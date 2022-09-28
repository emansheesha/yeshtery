
import React from "react";
import StarRating from "../startRating/startRating";
import { getProducts } from "../../services/services";

import './mainCards.scss';
class MainCards extends React.Component {
    state = {
        products: []
    }
    handleProduct = (product)=>{
        this.props.handleProduct(product)

    }
    componentDidMount() {
        (async () => {
            const products = await getProducts();

            this.setState({ products: products });
            console.log(this.state.products);
        })();


    }
    render() {

        return (
            <div className='main-cards my-5'>
                <div className="container ">
                    <div className="row">
                        <h2 className="similar-products">Similar Products</h2>
                        <p className="sub-products">You may like these products also</p>

                    </div>
                    <div className=" d-flex justify-content-between  card-flow" >

                        {this.state.products.map((product) => (
                            <div className="card me-3" key={product.id} onClick={()=>this.handleProduct(product)}>
                                <img className="card-img-top  img-fluid" src={require(`../../imgs/${product.img}`)} alt="shoes" />
                                <div className="card-body">
                                    <p className="card-text mb-3">{product.description}</p>
                                    <div className="row ">
                                        <div className="col-6">
                                            <div className="product-price">{product.price} LE</div>
                                            <div className="d-flex justify-content-between">
                                                <div className="prev-price"><del>{product.prevPrice}  LE</del></div>
                                                <div className="sale-percentage">
                                                    {product.sale}%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 d-flex justify-content-end">
                                            <img className="img-logo" src={require(`../../imgs/${product.logo}`)} alt="adidas" />
                                            {/* imgs inside src folder should be called by require to show*/}
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center ">
                                        <StarRating rate={product.rate} />
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </div>

        );
    }
}
export default MainCards; 