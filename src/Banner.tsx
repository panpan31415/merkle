import "./Banner.scss";
export default function Banner() {
    return (
        <section className="banner">
            <div className="banner__container">
                <div className="banner__left">
                    <div className="slogan-container">
                        <a href="https//www.panpan.dk" className="slogan-container__author-link" rel="noreferrer" target="_blank">By Panpan Zhang </a>
                        <div className="slogan-container__title-container">
                            <h1 className="slogan-container__title">Here’s All the Hack News You already Missed</h1>
                        </div>
                        <p className="slogan-container__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                            qui maio ionem quis menda  nemo
                            ?</p>
                        <button className="slogan-container__button">Read More</button>
                    </div>

                </div>
                <div className="banner__right">

                </div>
            </div>
            <div className="banner__divider">1</div>
        </section>
    );
}
