import './App.css';
import Footer from './components/footer/footer';
import React, { Suspense, lazy } from 'react';
import { AddProduct, deleteProduct, EditProduct, GetProduct, getProducts } from './services/services';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NavbarPage from './pages/NavbarPage';
import SpinnerPage from './pages/SpinnerPage';
import MenPage from './pages/MenPage';
import ErrorPage404 from './pages/ErrorPage404';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import ElectronicsPage from './pages/ElectronicsPage';
import SportsPage from './pages/SportsPage';
import Toaster from './components/Toaster';
import { toast } from 'react-toastify';
const ContactUs = lazy(() => import('./pages/ContactUsPage'));
const FindStore = lazy(() => import('./pages/FindStorePage'));
const TrackOrder = lazy(() => import('./pages/TrackOrderPage'));

class App extends React.Component {
  state = {
    product: {
      id: 1,
      img: "shirt.png",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 9568,
      prevPrice: 9861,
      sale: 30,
      logo: "adidas.png",
      rate: 4
    },
    cart: []

  }

  componentDidMount() {
    (async () => {
      const defaultProduct = await getProducts();
      const randomProduct = defaultProduct[1];
      this.setState({ product: randomProduct }, () => { })
    })();
    (async () => {
      const cartProduct = await GetProduct();
      // console.log(cartProduct);
      this.setState({ cart: cartProduct }, () => { })
    })();
  }
  handleProduct = (product) => {
    // console.log(product);
    this.setState({ product }, () => { })
    // console.log(GetProduct());

  }
  handleAddCard = (product) => {
    const addedProduct = this.state.cart.find((singleProductInCart) => { return singleProductInCart.id === product.id });
    // console.log(addedProduct, product, this.state.cart)
    if (this.state.cart.length == 0) {
      const newCart = [];
      newCart.push(product);
      this.setState({ cart: newCart }, () => { });
      AddProduct(product);
    }

    else if (addedProduct) {
      // console.log('founded');
      const cart = this.state.cart.map(item => item.id === product.id
        ? {
          ...item,
          quantity: item.quantity + product.quantity,
        }
        : item
      )


      // console.log(cart)
      this.setState({ cart }, () => {});
      const quant= addedProduct.quantity + product.quantity ;
      // console.log(quant)
      EditProduct({...addedProduct,quantity:quant});

    }
    else {
      const newCart = [...this.state.cart, product];
      this.setState({ cart: newCart }, () => { console.log() });
      AddProduct(product);

    }


    toast.success("added successfully");
  }
  handleDelete = (product) => {
    const newCart = this.state.cart?.filter(item => item.id != product.id);
    console.log(newCart);
    this.setState({ cart: newCart }, () => { console.log() });
    deleteProduct(product.id);
    toast.success('deleted successfully');
  }
  render() {

    return (
      <div className="App">
        <Toaster />
        <Router>
          <NavbarPage cart={this.state.cart} handleDelete={this.handleDelete} />
          <Suspense fallback={<SpinnerPage />}>
            <Routes>
              <Route exact path="/" element={

                <HomePage product={this.state.product} handleAddCard={this.handleAddCard}
                  handleProduct={this.handleProduct} />} />
              <Route exact path="/contact-us" element={<ContactUs />} />
              <Route exact path='/track-order' element={<TrackOrder />} />
              <Route exact path="/find-store" element={<FindStore />} />
              <Route exact path="/men" element={<MenPage />} />
              <Route exact path="/women" element={<WomenPage />} />
              <Route exact path="/kids" element={<KidsPage />} />
              <Route exact path="/electronics" element={<ElectronicsPage />} />
              <Route exact path="/sports" element={<SportsPage />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/notfound" element={<ErrorPage404 />} />
              <Route path="*" element={<Navigate to="/notfound" />} />

            </Routes>
          </Suspense>
        </Router >
        <Footer />
        {/* <Navbar />
        
        <ContacUs />
        

         */}
      </div >
    );
  }

}

export default App;
