import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About/About";
import Home from './Home/Home'

import Store from "./MainStorePAge/Store";
const route = createBrowserRouter([
  
  { path: "/", element: <Store /> },
  { path: "/store", element: <Store /> },
  { path: "/about", element: <About /> },
  { path: "/home", element: <Home /> },
]);

const App = () => {
  return <RouterProvider router={route} />;
};
export default App;
