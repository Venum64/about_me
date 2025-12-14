const Hero = ({ bgText }) => {
    return (
        <div className="bg">
            <div className="container bg__content">
                <h3 className='bg__content-p'>{bgText?.title}</h3>
                <button className="bg__content-btn">{bgText?.desc}</button>
            </div>
        </div>
    )
}

export default Hero
