import React from "react";
import './cartItem.scss';
class CartItem extends React.Component {
    render() {
        return (
            <div className="my_cart">
                <div className="myCart_closeBtn" >
                    <button className="close">
                        <img className="close img-fluid" src="/yeshtery/images/close.svg" alt="close"/>
                    </button>
                </div>
                <h2 className="title">My Cart</h2>
                <p className="summary">Cart Summary</p>
                <div className="cart_data">
                    <a className="w-100" href="/product/723038">
                        <div className="cartItem">
                            <div className="cartItem_image">
                                <img src="https://api.yeshtery.com/v1/yeshtery/files/74/206167-4o9-1.jpg" alt="" className="img-fluid"/>
                            </div>
                            <div className="cartItem_productDetails">
                                <p className="cartItem_description">CrocsFL OL Disney Frozen2 Cg K</p>
                                <div className="cartItem_info">
                                    <div>
                                        <p className="cartItem_quantity">Quantity: 3</p>
                                        <p className="cartItem_price">3,897 EGP</p>
                                    </div>
                                    <button className="cartItem_remove">Remove</button>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className="w-100" href="">
                        <div className="">
                            <div className="">
                                <img src="https://api.yeshtery.com/v1/yeshtery/files/31/gz7017-6-footwear-photography-front-lateral-top-view-white-c4bdcddede8d42369d056fa4e0d64a3c.jpg" alt="" className="img-fluid"/>
                            </div>
                            <div className="cartItem_product">
                                <p className="cartItem_description">Adidas Originals Flex J Big Kids running shoe</p>
                                <div className="cartItem_info"><div><p className="cartItem_quantity">
                                    Quantity: 1</p>
                                    <p className="cartItem_price">1,629 EGP</p>
                                </div><button className="cartItem_remove">Remove</button></div>
                            </div>
                        </div>
                    </a>
                </div>
                <p className="myCart_total">Total: 5,526 EGP</p>
                <div className="cart_btn">
                    <button className="myCart_review">Review Cart</button>
                    <button className="myCart_checkout">Complete Checkout</button>
                </div>
            </div>
        )
    }
}
    export default CartItem;
