import human from '../assets/img/human.png'

const Portfolio = ({ portfolio }) => {
    return (
        <div className="portfolio">
            <div className="container portfolio__content">
                <h2 className="portfolio__content-title">{portfolio?.title}</h2>
                <div className="portfolio__content-block">
                    <div className="portfolio__content-img">
                        <img src={human} alt="human" />
                    </div>
                    <div className="portfolio__content-text">
                        <h3 className="portfolio__content-text_h">{portfolio?.textTitle}</h3>
                        <p className="portfolio__content-text_p">{portfolio?.textDesc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
