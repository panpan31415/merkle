import { Story } from "./App";
import "./NewsItems.scss";
type NewsItemsProps = {
  stories: Story[];
};
export default function NewsItems({ stories }: NewsItemsProps) {
  return (
    <div className="news-items">
      <div className="news-items__container">
        {stories.map((story, index) => {
          return (
            <NewsItem key={story.id} story={story} imageName={String(index)} />
          );
        })}
      </div>
    </div>
  );
}

type NewsItemProps = {
  story: Story;
  imageName: string;
};
function NewsItem({ story, imageName }: NewsItemProps) {
  return (
    <div className="news-item" id={"news-item" + imageName}>
      <Picture imageName={imageName} alt={story.title} />
      <div className="news-item__title">
        <a href={story.url}>
          <h2>{story.title}</h2>
        </a>
      </div>
      <div className="news-item__attributes">
        <div className="attribute-box">
          <span className="attribute-box__type">Score</span>
          <span className="attribute-box__value">{story.score}</span>
        </div>
        <div className="attribute-box">
          <span className="attribute-box__type">Author</span>
          <span className="attribute-box__value">{story.by}</span>
        </div>
        <div className="attribute-box">
          <span className="attribute-box__type">Karma Score</span>
          <span className="attribute-box__value">{story.authorKarma}</span>
        </div>
        <div className="attribute-box">
          <span className="attribute-box__type">time</span>
          <span className="attribute-box__value">
            {new Date(story.time).toLocaleString()}
          </span>
        </div>
      </div>
      <p className="news-item__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas
        tenetur adipisci sint velit deleniti quo neque mollitia animi magnam
        veritatis, dolore accusamus amet distinctio! Quasi sit illum itaque?
        Dolore!
      </p>
    </div>
  );
}

type PictureProps = {
  alt: string;
  imageName: string;
};
function Picture({ alt, imageName }: PictureProps) {
  const imgBaseUrl = "https://s3.eu-west-1.amazonaws.com/panpan.dk/merkle/";
  return (
    <img
      className="news-item__image"
      srcSet={`${imgBaseUrl}${imageName}_w_1400.webp 1400w,
                ${imgBaseUrl}${imageName}_w_992.webp 992w,
                ${imgBaseUrl}${imageName}_w_768.webp 768w,
                ${imgBaseUrl}${imageName}_w_576.webp 576w
                 `}
      sizes="(max-width: 1400px) 1400px,
               (min-width: 992px) 992px,
               (min-width: 768px) 768px,
               (min-width: 576px) 576px"
      src={`${imgBaseUrl}0_w_1400.webp`}
      alt={alt}
    ></img>
  );
}
