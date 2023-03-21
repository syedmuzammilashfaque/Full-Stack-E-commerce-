import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import "./App.css";
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Home from "./components/Home/Home";
import LoginSignup from "./components/User/LoginSignup/LoginSignup";
import ProductDetails from "./components/Product/ProductDetails/ProductDetails";




const App = () => {



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

  }, []);


  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginSignup />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;