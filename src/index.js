import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Slider from './components/slider';
import ProductList from './components/productList';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header></Header>
    <Slider></Slider>
    <ProductList></ProductList>
    <Footer></Footer>
  </>
);
