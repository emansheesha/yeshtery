import React from "react";
import Cart from "../components/cart/cart";
import MainCards from "../components/mainCards/mainCards";


export function HomePage(props) {

    return (
        <>
            <Cart product={props.product} handleAddCard={props.handleAddCard} />

            <br /><br />
            <MainCards handleProduct={props.handleProduct} />
        </>

    );
}
export default HomePage;
