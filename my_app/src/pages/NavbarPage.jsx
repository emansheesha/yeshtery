import React from "react";
import BottomNavbar from "../components/bottomNavbar/bottomNavbar";
import Navbar from "../components/navbar/navbar";
import SubNavbar from "../components/subNavbar/subNavbar";
export function NavbarPage(props) {

    return (
        <>
            <Navbar />
            <SubNavbar cart={props.cart} handleDelete={props.handleDelete} />
            <BottomNavbar />
        </>

    );
}
export default NavbarPage;
