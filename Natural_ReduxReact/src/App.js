import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import React, { Component } from 'react';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>

    <div className="container-fluid">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Catalog" exact component={Catalog}></Route>
          <Route path="/About" exact component={About}></Route>
          <Route path="/Cart" exact component={Cart}></Route>
        </Switch>
      </div>
    
        <Footer></Footer>
       
    </div>
    
    </BrowserRouter>
  );
}

export default App;
