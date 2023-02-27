import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './About/About'

import Home from "./Home/Home.js";
const route=createBrowserRouter([
    {path:'/',element:<Home/>},{path:'/about',element:<About/>}

])

const App = () => {
  return (
    
    <RouterProvider router={route} />
    
  );
};
export default App;
