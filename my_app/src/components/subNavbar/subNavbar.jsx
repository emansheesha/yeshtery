
import React from "react";
import Header from "../shoppingCart/shoppingCart";
import './subNavbar.scss';
class SubNavbar extends React.Component {
    state={
        value:''
    }
    getQuantity = () => {
        let qt = 0;
        const qtArray = this.props.cart.map(item => item.quantity);
        // console.log(qtArray);
        qt = qtArray.join('+');
        // console.log(eval(qt));
        return eval(qt);


    }
    handleChange=(event)=>{
       this.setState({value: event.target.value}) ;

    }
    render() {

        return (
            <div className="subNavbar">
                <div className="container my-3">
                    <div className="row w-100">
                        <div className="col-md-4 col-8">
                            <form className="search-container">
                                <input type="text" className="search-input" defaultValue={this.state.value} 
                                onChange={(e)=>this.handleChange(e)} placeholder="Search" />
                                {/* <button type="submit" className="search_button me-auto">Search</button> */}
                            </form>
                        </div>
                        <div className="col-4 logo-container">
                            <img src={require(`../../imgs/adidas.png`)} alt='logo' className="img-fluid logo" />
                        </div>
                        <div className="col-4  d-flex justify-content-between align-items-center">
                            <div className="items d-flex">
                                <span className="icon me-0 me-sm-2 position-relative">
                                    <Header cart={this.props.cart} handleDelete={this.props.handleDelete} />
                                    {this.getQuantity() && <span className="cart_items cart_active">{this.getQuantity()}</span>
                                    }</span>
                                <span className="cart_link ps-1">Cart</span>
                            </div>
                            <div className="items">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25.765" height="24" viewBox="0 0 25.765 24" fill="#000">
                                        <path d="M3537.769,398.3h0a7.159,7.159,0,0,0-10.49,0l-.269.284-.268-.282a7.16,7.16,0,0,0-10.122-.372q-.194.178-.373.372a8.04,8.04,0,0,0,0,10.886l9.927,10.468a1.138,1.138,0,0,0,.8.358h.031a1.141,1.141,0,0,0,.788-.313l9.971-10.516A8.039,8.039,0,0,0,3537.769,398.3Zm-1.489,9.471-.178-.168-9.092,9.59-9.092-9.588a5.71,5.71,0,0,1,0-7.729,4.833,4.833,0,0,1,3.381-1.562c.066,0,.133,0,.2,0a4.833,4.833,0,0,1,3.3,1.29c.1.088.188.181.278.278l1.108,1.168a1.18,1.18,0,0,0,1.663-.005l1.1-1.164a4.864,4.864,0,0,1,6.876-.276c.1.088.189.18.278.277a5.65,5.65,0,0,1,0,7.725Z" transform="translate(-3514.125 -396.013)"></path>
                                    </svg>
                                </span>
                                <span className="cart_link ps-1">Wishlist</span>
                            </div>
                            <div className="items">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000">
                                        <path d="M3663.132,407.618a6.59,6.59,0,1,0-8.537,0,12.019,12.019,0,0,0-7.731,11.214,1.18,1.18,0,0,0,1.18,1.181h21.639a1.181,1.181,0,0,0,1.181-1.181A12.019,12.019,0,0,0,3663.132,407.618Zm-8.5-5.015a4.229,4.229,0,1,1,4.23,4.229A4.235,4.235,0,0,1,3654.634,402.6Zm-5.338,15.049a9.64,9.64,0,0,1,19.135,0Z" transform="translate(-3646.864 -396.013)">
                                        </path>
                                    </svg>
                                </span>
                                <span className="cart_link ps-1">Login</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
export default SubNavbar;