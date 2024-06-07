import { Story } from "./App";
import NewsFeeds from "./Banner.NewsFeeds";
import SloganContainer from "./Banner.SloganContainer";
import "./Banner.scss";
type BannerPorps = {
  stories: Story[];
};
export default function Banner({ stories }: BannerPorps) {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__left">
          <SloganContainer />
        </div>
        <div className="banner__right">
          <NewsFeeds stories={stories} />
        </div>
      </div>
      <div className="banner__divider" />
    </section>
  );
}
