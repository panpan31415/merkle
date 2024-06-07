import "./Banner.FeedItem.scss";
// type FeedItemProps = {
//     title: string;
//     score: number;
//     commentsCount: number;
//     publishDate: string;
// }
export default function FeedItem() {
    return (
        <li className="feed-item">
            <div className="feed-item__title">
                <a href="#123"><h2>Don Estridge: A misfit who built the IBM PC</h2></a>
            </div>
            <div className="feed-item__description">
                <div className="attribute-box">
                    <span className="attribute-box__type">time</span> <span className="attribute-box__value">2034-12-09 12:54</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">score</span> <span className="attribute-box__value">187</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">comments</span> <span className="attribute-box__value">187</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">author</span> <span className="attribute-box__value">187</span>
                </div>
            </div>
        </li>
    );
}
