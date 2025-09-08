import { useEffect, useState } from "react";
import ApiService from "../../utils/ApiService";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Footer() {
    const [name, setName] = useState("")

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    async function subscribe() {
        let elemail = document.getElementsByClassName('emails');
        // console.log(elemail);
        
        if (!name || name.trim() === "") {
            return false
        }
        if (!emailReg.test(name)) {
            console.log("invild email")
            elemail[0].style.border = "3px solid red";
            elemail[0].style.borderRadius = "3px";
            return false
        }
        let dataString = { sub_name: name }
        ApiService.postData("newsletter", dataString).then((res) => {
            if (res.status === 'success') {
                console.log(res.message)
            } else {
                console.log(res.message)
            }
        })

    }

    const [footer1, setFooter1] = useState("")
    const [footer2, setFooter2] = useState("")
    const [footer3, setFooter3] = useState("")
    const [footer4, setFooter4] = useState("")

    useEffect(() => {
        ApiService.getData("footer").then((res) => {
            // console.log(res.status);

            if (res.status === "success") {
                // console.log(res.data._id);
                setFooter1(res.data.footer_desc1)
                setFooter2(res.data.footer_desc2)
                setFooter3(res.data.footer_desc3)
                setFooter4(res.data.footer_desc4)
            }

        })
    }, [])

    const [themedata, setThemeData] = useState({
        website_name:null,
        address:null,
        phone:null,
        email:null,
    })
    useEffect(()=>{
        ApiService.getData("themesetting").then((res)=>{
            // console.log(res)
            if(res.status === "success"){
                setThemeData(res.data)
            }
        })
    },[])

    const [pageData,setPageData] = useState([])
    useEffect(()=>{
        ApiService.getData("pages").then((res)=>{
            // console.log(res)
            if(res.status === "success"){
                setPageData(res.data)
            }
        })
    },[])
    // console.log(pageData)

    const btnStyle = { backgroundColor: "rgb(235, 93, 30)", color: "white", padding: "5px 15px", border: "none", borderRadius: "3px" }

    return (
        <>
            <footer id="footer">

                <div className="footer-newsletter">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <div className="newsform">
                                    <input type="email" className="emails" name="email" onChange={(event) => setName(event.target.value)} />
                                    <button onClick={subscribe} type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>{themedata.website_name}</h3>
                                <p>
                                    {/* A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br /> */}
                                    {themedata.address}
                                    <br />
                                    <strong>Phone:</strong> {themedata.phone}<br />
                                    <strong>Email:</strong> {themedata.email}<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    {pageData.map((page)=>(
                                        (page.page_usefull_links_status==1)&&(
                                        <li key={page._id}>
                                            <Link to={page.page_slug===`home`?`/`:page.page_slug}><i className="bx bx-chevron-right"></i>{page.page_name}</Link>
                                        </li>)
                                    ))}
                                    {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links" >
                                <h4>Our Services</h4>
                                <ul>
                                    {pageData.map((page)=>(
                                        (page.page_our_services_status==1)&&(
                                        <li key={page._id}>
                                            <Link to={page.page_slug===`home`?`/`:page.page_slug}><i className="bx bx-chevron-right"></i>{page.page_name}</Link>
                                        </li>)
                                    ))}
                                    {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
                                </ul>
                            </div>

                             <div className="col-lg-3 col-md-6 footer-links" dangerouslySetInnerHTML={{__html:footer4}}>
                                {/* <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div> */}
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Prateek</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="">Lala Company</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
