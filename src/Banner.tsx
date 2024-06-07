import NewsFeeds from "./Banner.NewsFeeds";
import SloganContainer from "./Banner.SloganContainer";
import "./Banner.scss";
export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__container">
                <div className="banner__left">
                    <SloganContainer />
                </div>
                <div className="banner__right">
                    <NewsFeeds />
                </div>
            </div>
            <div className="banner__divider">1</div>
        </section>
    );
}
