import { Story } from "./App";
import FeedItem from "./Banner.FeedItem";
import "./Banner.NewsFeeds.scss";

type NewsFeedsProp = {
  stories: Story[];
};

export default function NewsFeeds({ stories }: NewsFeedsProp) {
  return (
    <div className="news-feeds">
      <ul className="news-feeds__container">
        {stories.map((story, index) => (
          <FeedItem key={story.id} story={story} imageName={String(index)} />
        ))}
      </ul>
      <div className="news-feeds__buttons"></div>
    </div>
  );
}
