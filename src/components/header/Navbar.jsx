import { Link, NavLink } from "react-router-dom";
import ApiService from "../../utils/ApiService";
import { useEffect, useState } from "react";


function Navbar() {

    const [nav,setNav] = useState([])

    useEffect(() => {
      ApiService.getData("navbar").then((res)=>{
        // console.log(res.data);
        setNav(res);
        
      })
    }, [])

    const [webname,setWebname] = useState({
        website_name:null
    })
    useEffect(()=>{
        ApiService.getData("themesetting").then((res)=>{
            setWebname(res.data)
        })
    },[])
    // console.log(webname);
    
    
    //api
    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <div className="logo">
                        <h1 className="text-light"><Link to="/"><span>{webname.website_name}</span></Link></h1>
                        {/* {<!-- Uncomment below if you prefer to use an image logo -->}
                        {<!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>-->} */}
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            {
                                nav.map((navitem)=>(
                                    <li key={navitem._id}>
                                {/* <Link className="nav-link scrollto" active={onfocus} to='/'>Home</Link> */}
                               { navitem.navbar_status == 1 &&(
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link scrollto active" : "nav-link scrollto"
                                    }
                                    to={navitem.navbar_slug===`home`?`/`:navitem.navbar_slug}
                                    end
                                >{navitem.navbar_name}

                                </NavLink>
                                )}   
                            </li>
                                ))
                            }
                            
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Navbar;