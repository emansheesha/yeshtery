import React from "react";
import { NavLink } from "react-router-dom";
import './bottomNavbar.scss';
class BottomNavbar extends React.Component {
    render() {
        
        return (
            <div className='bottom_navbar'>
                <nav className="bottom_nav">
                    <div className="container my-0 h-100">
                        <div className="wrapper">
                            <ul className="links_list">
                                <li className="list_item">
                                    <NavLink className="nav_link" to="/men">Men</NavLink>
                                </li>
                                <li className="list_item">
                                <NavLink className="nav_link" to="/women">women</NavLink>
                                </li>
                                <li className="list_item">
                                    <NavLink className="nav_link" to="/kids">Kids</NavLink>
                                </li>
                                <li className="list_item">
                                    <NavLink className="nav_link" to="/sports">Sports &amp; Fitness</NavLink>
                                </li>
                                <li className="list_item">
                                    <NavLink className="nav_link" to="/electronics">Electronics</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }

}
export default BottomNavbar; 