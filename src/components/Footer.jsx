import fb from '../assets/img/fb.svg'
import inst from '../assets/img/inst.svg'
import tg from '../assets/img/tg.svg'
import em from '../assets/img/em.svg'
import whats from '../assets/img/whats.svg'

const Footer = ({ footerTitle }) => {
    return (
        <footer className="footer">
            <div className="container footer__block">
                <h2 className="footer__title">{footerTitle}</h2>
                <div className="footer__icons">
                    <a href="#"><img src={fb} alt="fb" /></a>
                    <a href="#"><img src={inst} alt="inst" /></a>
                    <a href="#"><img src={tg} alt="tg" /></a>
                    <a href="#"><img src={em} alt="em" /></a>
                    <a href="#"><img src={whats} alt="whats" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
