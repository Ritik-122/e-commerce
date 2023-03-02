import React from "react";

import { Route } from "react-router-dom";
import About from "./About/About";
import ContactForm from "./Contact/ContactForm";
import Home from "./Home/Home";
import Store from "./MainStorePAge/Store";

const App = () => {
  return (
    <>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/contact">
        <ContactForm/>
      </Route>
    </>
  );
};
export default App;
