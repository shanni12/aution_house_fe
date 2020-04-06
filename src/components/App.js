import React, { useState } from "react";
import ProductsList from "./ProductsList";
import signup from "./signup";
import Login from "./Login";
import Form from "./Form";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Nav";

function App() {
  return (
    <BrowserRouter history={history}>
      <NavBar />
      <Route path="/home" component={ProductsList} />
      <Route path="/my-products" component={ProductsList} />
      <Route path="/my-bids" component={ProductsList} />
      <Route path="/signup" component={signup} />
      <Route path="/login" component={Login} />
      <Route path="/add-product" component={Form} />
    </BrowserRouter>
  );
}

export default App;
