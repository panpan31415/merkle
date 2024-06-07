import { Fragment, useEffect, useMemo, useState } from "react";
import "./App.scss";
import Banner from "./Banner";
import Header from "./Header";
import NewsItems from "./NewsItems";

const topStories: number[] = [
  40605532, 40607017, 40607442, 40604596, 40595741, 40597216, 40606802,
  40596689, 40607060, 40599749,
];

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  authorKarma: number;
};

type Author = {
  karma: number;
};

type StoryList = Record<number, Story>;

function App() {
  const [storyList, setStoryList] = useState<StoryList>({});
  const [requestStatus, setRequestStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  useEffect(() => {
    (async () => {
      topStories.forEach(async (storyId) => {
        try {
          setRequestStatus(() => "loading");
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
          );
          const story: Story = await response.json();
          const userResponse = await fetch(
            `https://hacker-news.firebaseio.com/v0/user/${story.by}.json`
          );
          const user: Author = await userResponse.json();
          setRequestStatus("idle");
          story.authorKarma = user.karma;
          setStoryList((prevStories) => ({
            ...prevStories,
            [storyId]: story,
          }));
        } catch (error) {
          console.log("There is an error");
        } finally {
          setRequestStatus("idle");
        }
      });
    })();
  }, []);

  const memorizedStories = useMemo(() => {
    return Object.values(storyList).sort((a, b) => a.score - b.score);
  }, [storyList]);

  return (
    <div
      className={`App 
       ${requestStatus === "loading" ? "loading" : ""}
       `}
    >
      <Header />
      {requestStatus === "loading" ? null : (
        <Fragment>
          <Banner stories={memorizedStories} />
          <NewsItems stories={memorizedStories} />
        </Fragment>
      )}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
