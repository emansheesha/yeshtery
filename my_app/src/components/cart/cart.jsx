
import React from "react";
import StarRating from "../startRating/startRating";
import './cart.scss';
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
   
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
           
        />
    );
}
class Cart extends React.Component {
    state = {
        count: 1,
        activeSize: false,
        activeColor: false
    }
    handleSizeClick = () => this.setState({ activeSize: !this.state.activeSize }, () => { })


    handleAddToCard = (product) => this.props.handleAddCard({ ...product, quantity: this.state.count })
    increment = () => this.setState({ count: this.state.count + 1 }, () => { });
    decrement = () => this.state.count > 1 && this.setState({ count: this.state.count - 1 }, () => console.log(this.state.count));
    handleNext = () => { return 'hfhf' }

    render() {
        const product = this.props.product;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow onClick={this.handleNext} />,
            prevArrow: <SamplePrevArrow />
        };
        // console.log(this.props.product)
        return (
            <div className='cart my-5'>
                <div className="container ">
                    <div className="row  d-flex justify-content-between">
                        <div className="col-md-5">
                            <div className=" d-flex justify-content-between  card-flow" >


                                <div className="cardd">
                                    <img className="  card-img-top" src={require(`../../imgs/${product.img}`)} alt="shoes" />

                                </div>



                            </div>
                            <div>
                                <Slider {...settings} className="mx-md-0 mx-3">

                                    {/* <div className="d-flex"> */}
                                    {product.subimgs?.map(subimg => <div key={Math.random() * 21} > <img className=" px-2 subimg img-fluid" alt=''
                                        src={require(`../../imgs/${subimg}`)} /></div>)}


                                </Slider>
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
                            <hr className="detail_item_breakLine" />
                            <div className="detail_item">
                                <h4 className="item_title">Size</h4>
                                <div className="wrapper ">
                                    <div className="item d-flex  " > {product.size?.map(size => <span key={Math.random() * 1010} 
                                    onClick={(event)=>{event.target.className='addSize'}}
                                        className="me-2 size"
                                    // style={{
                                    //     borderColor: this.state.activeSize ? 'gray' : ''

                                    // }}
                                    // onClick={this.handleSizeClick}
                                    >{size}</span>)}</div>
                                </div>
                            </div>
                            <hr className="detail_item_breakLine" />
                            <div className="detail_item">
                                <h4 className="item_title">Color</h4>
                                <div className="wrapper">
                                    <div className="item ">
                                        {product.color?.map(color => <img key={Math.random() * 1123} className="me-2 color" alt=''
                                          onClick={(event)=>{event.target.className='addColor'}}  src={require(`../../imgs/${color}`)} />)}
                                    </div>
                                </div>
                            </div>
                            <hr className="detail_item_breakLine" />
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
                                    <button className="quantity_btn" onClick={this.increment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                            viewBox="0 0 12 12">
                                            <path d="M8223.418,1241.5h-4v-4a1,1,0,0,0-2,0v4h-4a1,1,0,0,0,0,2h4v4a1,1,0,0,0,2,0v-4h4a1,1,0,0,0,0-2Z" transform="translate(-8212.418 -1236.499)"></path></svg>
                                    </button>
                                </div>
                                <div className="quantity_actions my-3 d-flex ">
                                    <button className="quantity_addToCart" onClick={() => this.handleAddToCard(product)}>Add To Cart</button>
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