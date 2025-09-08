function Hero() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1 data-aos="fade-up">Bettter digital experience with Selene</h1>
                            <h2 data-aos="fade-up">We are team of talented designers making websites with Bootstrap</h2>
                            <div>
                                <a data-aos="zoom-in" href="#about" className="btn-get-started scrollto">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
                            <img data-aos="zoom-in" src="./src/assets/img/hero-img.svg" className="img-fluid animated" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero;