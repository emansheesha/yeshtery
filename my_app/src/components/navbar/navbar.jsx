
import React from "react";
import './navbar.scss';
import { HiMenuAlt1 } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { NavLink } from "react-router-dom";
// import { NavLink} from 'react-router-dom' ; 
class Navbar extends React.Component {

    render() {

        return (
            <div className="navbar">
                <div className="container">
                    <div className="row d-flex justify-content-between w-100">
                        <div className="col-md-4 col-8 d-flex align-items-center ">

                            <HiMenuAlt1 className="menu-icon "
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" />
                            <span className="menu-name mx-2">yeshtery</span>

                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                                <div className="container p-4">
                                    <div className="d-flex justify-content-between">
                                        <img src="/imgs/brand_logo.svg" alt='yeshtery-logo' />
                                        <button type="button" className="btn-close ms-auto " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>


                                    <NavLink to="/men" >

                                        <div className="menu-items" >Men</div>
                                    </NavLink>
                                    <NavLink to="/women" >
                                        <div className="menu-items">Women</div>
                                    </NavLink>
                                    <NavLink to="kids">
                                        <div className="menu-items">Kids</div>
                                    </NavLink>
                                    <NavLink to="/sports" >
                                        <div className="menu-items">Sports &amp; Fitness</div>
                                    </NavLink>
                                </div>
                            </div>


                        </div>
                        <div className="col-md-4  d-flex align-items-center icon-data" >
                            <span className="">Valentine's Day Offers! </span>

                            <a to=''><span className=""><b>Shop Now</b></span></a>
                        </div>
                        <div className="col-md-4 col-4 d-flex  justify-content-between  align-items-center">

                            <NavLink className="contact-us" to="/contact-us">
                                <FiPhoneCall className="icons" /><span className="icon-data ps-1 "> Contact Us</span>
                            </NavLink>
                            <NavLink to="/track-order" className="track-order ">
                                <AiOutlineShoppingCart className="icons" /><span className="icon-data ps-1">Track Order</span>
                            </NavLink>
                            <NavLink to="/find-store" className="find-store"> <GrLocation className="icons" /><span className="icon-data ps-1">Find Store</span>
                            </NavLink>
                        </div>

                    </div>
                </div>

            </div >
        );
    }
}
export default Navbar;