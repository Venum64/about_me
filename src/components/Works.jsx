import puma from '../assets/img/puma.jpg'

const Works = ({ works }) => {
    return (
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
    )
}

export default Works
