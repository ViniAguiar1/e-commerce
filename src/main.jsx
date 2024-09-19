import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './screens/home/index';
import ProductDescription from './screens/productsDescription/index';
import Cart from './screens/cart/index';
import Category from './screens/category';

const Root = () => {
  const [cartItems, setCartItems] = React.useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/productsDescription/:id" element={<ProductDescription cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
