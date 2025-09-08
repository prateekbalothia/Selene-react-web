import imgpath1 from "../../../assets/img/clients/client-1.png";
import imgpath2 from "../../../assets/img/clients/client-2.png";
import imgpath3 from "../../../assets/img/clients/client-3.png";
import imgpath4 from "../../../assets/img/clients/client-4.png";
import imgpath5 from "../../../assets/img/clients/client-5.png";
import imgpath6 from "../../../assets/img/clients/client-6.png";
import imgpath7 from "../../../assets/img/clients/client-7.png";
import imgpath8 from "../../../assets/img/clients/client-8.png";


export default function Client() {
    return (
        <>
            <section id="clients" className="clients section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Clients</h2>
                        <p>They trusted us</p>
                    </div>

                    <div className="clients-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper align-items-center">
                            {/* <div className="swiper-slide"><img src= {imgpath1} className="img-fluid" alt=""/></div> */}
                            <div className="swiper-slide"><img src= {imgpath2} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath3} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath4} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath5} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath6} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath7} className="img-fluid" alt=""/></div>
                            <div className="swiper-slide"><img src= {imgpath8} className="img-fluid" alt=""/></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
        </>
    )
}