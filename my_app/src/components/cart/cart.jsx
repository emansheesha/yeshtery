
import React from "react";
import StarRating from "../startRating/startRating";
import './cart.scss';
class Cart extends React.Component {
    state = {
        count: 1
    }
    handleAddToCard=(product)=> this.props.handleAddCard({...product,quantity:this.state.count})
    increment = () => this.setState({ count: this.state.count + 1 },()=>console.log(this.state.count));
    decrement = () =>this.state.count >1 &&this.setState({ count:  this.state.count - 1 },()=>console.log(this.state.count));
    //  increase = () => {
    //     const count = this.state.count ;
    //     this.setState({ count + 1});
    //   };

    //   //decrease counter
    //    decrease = () => {
    //     this.setState({count - 1});
    //   };
    componentDidMount() {



    }
    render() {
        const product = this.props.product;
        // console.log(this.props.product)
        return (
            <div className='cart my-5'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between  card-flow" >


                                <div className="cardd">
                                    <img className="  card-img-top" src={require(`../../imgs/${product.img}`)} alt="shoes" />

                                </div>


                            </div>
                        </div>
                        <div className="col-md-6 product-details">
                            <img className="img-logo img-fluid" src={require(`../../imgs/${product.logo}`)} alt="adidas" />

                            <p className="card-text my-3">{product.description}</p>

                            <div className="start-rate">
                                <StarRating rate={3} />
                            </div>
                            <div className="d-flex align-items-canter my-2">
                                <div className="product-price">{product.price} LE</div>
                                <div className="prev-price mx-3"><del>{product.prevPrice}  LE</del></div>
                                <div className="sale-percentage">
                                    {product.sale}% Off
                                </div>
                            </div>
                            <div className="quantity">
                                <div className="quantity_counter">
                                    <button className="quantity_btn" onClick={this.decrement}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2"
                                            viewBox="0 0 12 2">
                                            <path d="M8019.418,1241.5h-10a1,1,0,0,0,0,2h10a1,1,0,0,0,0-2Z" transform="translate(-8008.418 -1241.499)">
                                            </path>
                                        </svg>
                                    </button>

                                    <span>{this.state.count}</span>
                                    <button className="quantity_btn"  onClick={this.increment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 12 12">
                                            <path d="M8223.418,1241.5h-4v-4a1,1,0,0,0-2,0v4h-4a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0v-4h4a1,1,0,0,0,0-2Z" transform="translate(-8212.418 -1236.499)"></path></svg>
                                    </button>
                                </div>
                                <div className="quantity_actions my-3 d-flex ">
                                    <button className="quantity_addToCart" onClick={()=>this.handleAddToCard(product)}>Add To Cart</button>
                                    <button className="quantity_pickUp">Pickup from store</button>

                                </div>
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        );
    }
}
export default Cart; 