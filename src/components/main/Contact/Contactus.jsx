import { useEffect, useState } from "react"
import ApiService from "../../../utils/ApiService";
import { data } from "react-router-dom";

export default function Contactus() {
    const [userdata, setUserdata] = useState({
        name: null,
        email: null,
        subject: null,
        message: null
    });

    function contactDetails(event) {
        const { name, value } = event.target;
        // console.log(name)
        setUserdata({
            ...userdata,
            [name]: value
        })
        // console.log(userdata)
    }

    function sendMessage() {
        if (!userdata.name || userdata.name.trim() === "" || userdata.name == null) {
            console.log("Provide name");
            return false
        }
        if (!userdata.email || userdata.email.trim() === "" || userdata.email == null) {
            console.log("provide email");
            return false
        }
        if (!userdata.subject || userdata.subject.trim() === "" || userdata.subject == null) {
            console.log("provide subject");
            return false
        }
        const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailReg.test(userdata.email)) {
            console.log("Invalid email");
            return false
        }

        let dataString = {
            name: userdata.name,
            email: userdata.email,
            subject: userdata.subject,
            message: userdata.message
        }
        ApiService.postData("contact", dataString).then((res) => {
            if (res.status === 'success') {
                console.log(res.message)
            } else {
                console.log(res.message)
            }
        })
    }

    const [themedata, setThemeData] = useState({
        website_name: null,
        address: null,
        phone: null,
        email: null,
    })
    useEffect(() => {
        ApiService.getData("themesetting").then((res) => {
            // console.log(res)
            if (res.status === "success") {
                setThemeData(res.data)
            }
        })
    }, [])

    return (
        <>
            <main id="main">
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>Contact Us</h2>
                            <p>Contact us the get started</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>{themedata.address}</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>{themedata.email}</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>{themedata.phone}</p>
                                    </div>

                                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ border: 0, width: "100%", height: "290px", }} allowFullScreen></iframe> */}
                                </div>

                            </div>

                            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                                <div className="php-email-form">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" name="name" className="form-control" id="name" onChange={(event) => contactDetails(event)} placeholder="Your Name" required />
                                        </div>
                                        <div className="form-group col-md-6 mt-3 mt-md-0">
                                            <label htmlFor="name">Your Email</label>
                                            <input type="email" className="form-control" name="email" id="email" onChange={(event) => contactDetails(event)} placeholder="Your Email" required />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">Subject</label>
                                        <input type="text" className="form-control" name="subject" id="subject" onChange={(event) => contactDetails(event)} placeholder="Subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name">Message</label>
                                        <textarea className="form-control" name="message" onChange={(event) => contactDetails(event)} rows="5" required></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button className="btn btn-primary" type="button" onClick={sendMessage}>Send Message</button></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}