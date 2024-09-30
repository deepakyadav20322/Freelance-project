import React from 'react'
import HomePage from './pages/HomePage';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Header from './components/Header';
import ContactUsPage from './pages/ContactUsPage';
import Footer from './components/Footer';
import LogoHeader from './components/LogoHeader';
import OfferHeadline from './components/OfferHeadline';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './components/Checkout';
import ConfirmationPage from './components/ConfirmationPage';
import AboutPage from './pages/AboutPage';
import Blog from './pages/BlogPage';


function App() {
  const location = useLocation();

    // // Define the routes where you want the navbar to be shown
    // const showNavbar = [ '/','/about-us', '/contact-us', '/product-list'];

  return (
    <>
         <OfferHeadline/>
         <Header/>
    <Routes>
      
      <Route path='/' element={<HomePage/>} />
      <Route path='/product-list' element={<ProductList/>} />
      <Route path='/contact-us' element={<ContactUsPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout/>} />
      <Route path='/ConfirmationPage' element={<ConfirmationPage/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='*' element={<h1 className=''>Page Not Found</h1>} />
    
      
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
