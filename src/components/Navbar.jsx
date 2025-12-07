import human from '../assets/img/human.png'
import puma from '../assets/img/puma.jpg'
import fb from '../assets/img/fb.svg'
import inst from '../assets/img/inst.svg'
import tg from '../assets/img/tg.svg'
import em from '../assets/img/em.svg'
import whats from '../assets/img/whats.svg'

const Navbar = ({ headerLogo, listLinks, bgText, portfolio, works, footerTitle }) => {
    return (
        <>
            {/* header start */}
            <header className="header">
                <div className="container header__nav">
                    <a href="#" className="header__nav-logo">{headerLogo}</a>
                    <ul className="header__nav-list">{listLinks.map((item) => (
                        <li key={item.id}>
                            <a href="#" className="header__nav-list_link">{item.name}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </header>
            {/* header end */}

            {/* bg start */}
            <div className="bg">
                <div className="container bg__content">
                    <h3 className='bg__content-p'>{bgText?.title}</h3>
                    <button className="bg__content-btn">{bgText?.desc}
                    </button>
                </div>
            </div>
            {/* bg end */}

            {/* portfolio start */}

            <div className="portfolio">
                <div className="container portfolio__content">
                    <h2 className="portfolio__content-title">{portfolio?.title}</h2>
                    <div className="portfolio__content-block">
                        <div className="portfolio__content-img">
                            <img src={human} alt="human" /></div>
                        <div className="portfolio__content-text">
                            <h3 className="portfolio__content-text_h">
                                {portfolio?.textTitle}
                            </h3>
                            <p className="portfolio__content-text_p">
                                {portfolio?.textDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* portfolio end */}

            {/* works start */}

            <div className="works">
                <div className="container works__content">
                    <h2 className="works__content-title">{works?.title}</h2>
                    <div className="works__card-block">
                        {works?.items?.map((item) => (
                            <div className="works__card" key={item.id}>
                                <div className="works__card-img">
                                    <img src={puma} alt='puma' />
                                </div>
                                <div className="works__card-text">
                                    <h3 className="works__card-title">{item.cardTitle}</h3>
                                    <p className="works__card-desc">{item.cardDesc}</p>
                                    <button type="button" className='works__card-btn'>
                                        <span className="works__card-btn_p">{item.cardBtn}</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* works end */}
            {/* footer start */}

            <footer className="footer">
                <div className="container footer__block">
                    <h2 className="footer__title">
                        {footerTitle}
                    </h2>
                    <div className="footer__icons">
                        <a href="#"><img src={fb} alt="fb" /></a>
                        <a href="#"><img src={inst} alt="inst" /></a>
                        <a href="#"><img src={tg} alt="tg" /></a>
                        <a href="#"><img src={em} alt="em" /></a>
                        <a href="#"><img src={whats} alt="whats" /></a>
                    </div>
                </div>
            </footer>

            {/* footer end */}
        </>
    )
}

export default Navbar