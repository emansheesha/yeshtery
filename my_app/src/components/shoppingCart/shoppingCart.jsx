
import React from "react";
import './shoppingCart.scss';
class Header extends React.Component {
    handleDelete(product) {
        this.props.handleDelete(product);
    }
    render() {
        // console.log(this.props.cart)
        const products = this.props.cart;
        let total=0;
        return (
            <div className="header">
                <div className="" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.903" height="24" viewBox="0 0 29.903 24">
                        <path d="M3438.544,406.339a1.179,1.179,0,0,0-.957-.491h-5.335l-7.514-9.393-.005-.006-.048-.054-.035-.037a.406.406,0,0,0-.037-.034c-.018-.017-.035-.033-.054-.048l-.006-.005-.025-.018a.686.686,0,0,0-.065-.047l-.038-.023c-.02-.012-.04-.025-.061-.036l-.049-.023c-.018-.008-.036-.017-.054-.024l-.059-.022-.047-.016-.065-.016-.046-.011-.064-.01-.049-.007c-.02,0-.04,0-.06,0l-.055,0-.054,0c-.021,0-.041,0-.061,0l-.049.007-.065.01-.045.011-.065.016-.047.016-.059.022c-.018.007-.036.016-.054.024l-.049.023c-.021.011-.041.024-.061.036l-.038.023c-.023.015-.044.031-.066.047l-.024.018-.006.005c-.019.015-.037.032-.055.048s-.025.022-.036.034-.023.025-.035.038-.033.035-.048.053l0,.006-7.514,9.393h-5.335a1.182,1.182,0,0,0-1.12,1.554l3.935,11.8a1.181,1.181,0,0,0,1.12.807h19.672a1.181,1.181,0,0,0,1.12-.807l3.935-11.8A1.179,1.179,0,0,0,3438.544,406.339Zm-14.728-7.257,5.413,6.766H3418.4Zm8.986,18.57H3414.83l-3.147-9.443h24.266Z" transform="translate(-3408.865 -396.013)"></path>
                    </svg>
                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">

                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h3 className="cart-header">My Cart</h3>
                        {
                            products?.map(product =>{
                                total += product.quantity * product.price
                                 return (
                                <div className="cart-item" key={product.id}>
                                    <div className="cart-img">
                                        <img src={require(`../../imgs/${product.img}`)} className="img-fluid img-cart" />
                                    </div>
                                    <div className="item">
                                        <p className="item-description ">{product.description}</p>
                                        <div className="item_info ">

                                            <p className="item-quantity my-2">Quantity: {product.quantity}</p>
                                            <div className="row d-flex justify-content-between">

                                                <p className="item-price col-6">{product.price} EGP</p>
                                                <button className="item-remove col-6 " onClick={() => this.handleDelete(product)}>Remove</button>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )})
                        }
                        <p className="cart_total">Total:{total} </p>
                        
                    </div>
                </div>
                </div>
                );
    }
}
export default Header;