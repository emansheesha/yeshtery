import React from "react";
// import send from '/imgs/send.svg';
import './footer.scss';
class Footer extends React.Component {
    render() {
        return (
            <div className="footer mt-5">
                <div className="container ">
                    <div className="row pt-5">
                        <div className="col-md-6 ">
                            <div className="text">
                                <img src="https://api.yeshtery.com/v1/yeshtery/files/69/brand-logo-yellow.svg" alt="organization logo" className="mb-4 img-fluid " />
                                <p>This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="subscribe">
                                <h3>Subscribe to our newsletter</h3>
                                <form className="mb-3">
                                    <input name="email" type="email" required="" placeholder="Enter Your Mail" value="" />
                                    <button className="btn-subscribe my-2 ms-auto">Subscribe
                                        <img className="ms-1 img-fluid " src={window.location.origin + '/imgs/send.svg'} alt="Subscribe" />
                                        {/* call imgs from public folder */}
                                    </button>
                                </form>
                            </div>
                            <div className="row footer-nav">
                                <div className="col">
                                    <ul>
                                        <li>
                                            <a href="">About Us</a>
                                        </li>
                                        <li>
                                            <a href="">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="">Track Order</a>
                                        </li>
                                        <li>
                                            <a href="">Terms &amp; Conditions</a>
                                        </li>
                                        <li>
                                            <a href="">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="">Sell With Us</a>
                                        </li>
                                        <li>
                                            <a href="">Shipping And Returns</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={window.location.origin + '/imgs/facebook.png'} className="me-1 img-fluid" />
                                            </div>
                                            <a href="https://www.facebook.com/yeshtery/" target="_blank" rel="noopener noreferrer">facebook</a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={window.location.origin + '/imgs/instagram.png'} className="me-1 img-fluid" />
                                            </div>
                                            <a href="https://www.instagram.com/yeshtery/" target="_blank" rel="noopener noreferrer">instagram</a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={window.location.origin + '/imgs/instagram.png'} className="me-1 img-fluid" />
                                            </div>
                                            <a href="https://youtu.be/mq_jIbwjrYQ" target="_blank" rel="noopener noreferrer">youtube</a>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <div className="icon">
                                                <img src={window.location.origin + '/imgs/linkedin.png'} className="me-1 img-fluid" />
                                            </div>
                                            <a href="https://www.linkedin.com/company/yeshtery" target="_blank" rel="noopener noreferrer">linkedin</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright d-flex justify-content-between">
                            <p className="mb-2 col-md-4">© 2022 yeshtery, all rights reserved.</p>
                            <div className="col-md-4">
                                <img alt="cash" className="img-fluid" src={window.location.origin + '/imgs/cash.png'} />
                                <img alt="visa" className="img-fluid mx-2" src={window.location.origin + '/imgs/visa.png'}/>
                                <img alt="matercard" className="img-fluid" src={window.location.origin + '/imgs/matercard.png'} />
                            </div>
                            <p className="d-flex align-items-center justify-content-center mb-0 col-md-4">
                                <span className="">Powered By</span>
                                <img className="img-fluid" src={window.location.origin + '/imgs/nas_nav.svg'} alt="NasNav" />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;
