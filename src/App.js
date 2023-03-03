import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About/About";
import ContactForm from "./Contact/ContactForm";
import Home from "./Home/Home";
import Store from "./MainStorePAge/Store";
import ProductDetails from "./Product/ProductDetails";


const App = () => {
  return (
    <>
    
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/store">
          <Store />
        </Route>
        <Route path="/" exact>
          <Redirect to='/store'/>
        </Route>
        <Route path="/contact">
          <ContactForm />
        </Route>
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
      </Switch>
    </>
  );
};
export default App;
