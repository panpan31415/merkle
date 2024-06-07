import FeedItem from "./Banner.FeedItem";
import "./Banner.NewsFeeds.scss";

export default function NewsFeeds() {
    return (
        <div className="news-feeds">
            <ul className="news-feeds__container">
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
                <FeedItem />
            </ul>
            <div className="news-feeds__buttons"></div>
        </div>
    );
}
