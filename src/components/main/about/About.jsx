import aboutImg from "/src/assets/img/about-img.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper styles (required)
import '/src/assets/vendor/swiper/swiper-bundle.min.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function About() {
    return (
        <>
            <main id="main">
                <section id="about" className="about">
                    <div className="container">

                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src={aboutImg} className="img-fluid" alt="" data-aos="zoom-in" />
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0">
                                <h3 data-aos="fade-up">Voluptatem dignissimos provident quasi</h3>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                </p>
                                <div className="row">
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <i className="bx bx-receipt"></i>
                                        <h4>Corporis voluptates sit</h4>
                                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                    </div>
                                    <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Ullamco laboris nisi</h4>
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

export default About;