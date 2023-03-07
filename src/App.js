import React, { useContext } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About/About";
import ContactForm from "./Contact/ContactForm";
import Home from "./Home/Home";
import LoginForm from "./Login/LoginForm";
import Store from "./MainStorePAge/Store";
import NotFound from "./NotFound";
import ProductDetails from "./Product/ProductDetails";
import CartContext from './store/cart-context'


const App = () => {
const AuthContext=useContext(CartContext)
  return (
    <>
    
      <Switch>
     { AuthContext.isLoggedIn && <Route path='/login'>
        <Redirect to='/store'/>
      </Route>}
      { !AuthContext.isLoggedIn && <Route path='/login'>
        <LoginForm/>
      </Route>}
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact" exact>
          <ContactForm />
        </Route>
       {AuthContext.isLoggedIn && <Route path="/store">
          <Store />
        </Route>}
        {AuthContext.isLoggedIn && <Route path="/" exact>
          <Redirect to='/store'/>
        </Route>}
       {!AuthContext.isLoggedIn && <Route path='/store'><Redirect to='/login'/></Route>}
       {!AuthContext.isLoggedIn && <Route path='/'><Redirect to='/login'/></Route>}
       
       
        <Route path="/product/:id">
          <ProductDetails />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
       
      </Switch>
    </>
  );
};
export default App;
