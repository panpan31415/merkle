import { Story } from "./App";
import "./Banner.FeedItem.scss";
type FeedItemProps = {
  story: Story;
  imageName: string;
};
export default function FeedItem({ story, imageName }: FeedItemProps) {
  return (
    <li className="feed-item">
      <div className="feed-item__title">
        <a href={"#news-item" + imageName}>
          <h2>{story.title}</h2>
        </a>
      </div>
      <div className="feed-item__attributes">
        <div className="attribute-box">
          <span className="attribute-box__type">time</span>
          <span className="attribute-box__value">
            {new Date(story.time).toLocaleString()}
          </span>
        </div>
        <div className="attribute-box">
          <span className="attribute-box__type">score</span>
          <span className="attribute-box__value">{story.score}</span>
        </div>

        <div className="attribute-box">
          <span className="attribute-box__type">author</span>
          <span className="attribute-box__value">{story.by}</span>
        </div>
        <div className="attribute-box">
          <span className="attribute-box__type">author karma</span>
          <span className="attribute-box__value">{story.authorKarma}</span>
        </div>
      </div>
      <p className="feed-item__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In pariatur
        reprehenderit minus expedita, explicabo rem nemo magnam culpa sit
        consectetur voluptas earum porro, odio consequatur quos nesciunt quaerat
        saepe sed.
      </p>
    </li>
  );
}
