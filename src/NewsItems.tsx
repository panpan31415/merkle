import "./NewsItems.scss";
export default function NewsItems() {
    return (
        <div className="news-items">
            <div className="news-items__container">
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
                <NewsItem />
            </div>
        </div>
    );
}

type NewsItemProps = {
    title: string;
    url: string;
    time: string;
    authorId: string;
    authorKarmaScore: string;
    image: string
}
function NewsItem() {
    return (
        <div className="news-item">
            <img
                className="news-item__image"
                src="https://s3.eu-west-1.amazonaws.com/panpan.dk/merkle/0_w_1400.webp"
                alt="item"
            ></img>
            <div className="news-item__title">
                <a href="#"><h2>title</h2></a>
            </div>
            <div className="news-item__attributes">
                <div className="attribute-box">
                    <span className="attribute-box__type">Score</span>
                    <span className="attribute-box__value">2034-12-09 12:54</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">Author</span>
                    <span className="attribute-box__value">Panpan</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">Karma Score</span>
                    <span className="attribute-box__value">9</span>
                </div>
                <div className="attribute-box">
                    <span className="attribute-box__type">time</span>
                    <span className="attribute-box__value">2034-12-09 12:54</span>
                </div>
            </div>
            <p className="news-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptas tenetur adipisci sint velit deleniti quo neque mollitia animi magnam veritatis, dolore accusamus amet distinctio! Quasi sit illum itaque? Dolore!</p>
        </div>
    );
}

type PictureProps = {
    alt: string;
    filename: string;
};
function Picture({ alt, filename }: PictureProps) {
    const imgBaseUrl = "https://s3.eu-west-1.amazonaws.com/panpan.dk/merkle/";
    return (
        <img
            srcSet={`${imgBaseUrl}${filename}_w_1400.webp 1400w,
                ${imgBaseUrl}${filename}_w_992.webp 992w,
                ${imgBaseUrl}${filename}_w_768.webp 768w,
                ${imgBaseUrl}${filename}_w_576.webp 576w
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
