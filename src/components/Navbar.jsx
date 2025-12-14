import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Works from './Works'
import Footer from './Footer'

const Navbar = ({ headerLogo, listLinks, bgText, portfolio, works, footerTitle }) => {
    return (
        <>
            <Header headerLogo={headerLogo} listLinks={listLinks} />
            <Hero bgText={bgText} />
            <Portfolio portfolio={portfolio} />
            <Works works={works} />
            <Footer footerTitle={footerTitle} />
        </>
    )
}

export default Navbar