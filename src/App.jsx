import React from 'react'
import Home from './Pages/Home/Home';
import RouteLayout from './RouteLayout/RouteLayout';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import SignUp from './Pages/SignUp/SignUp';
import Account from './Pages/Account/Account';
import Billing from './Pages/Billing/Billing';
import ProductDetails from './Pages/ProductDeatails/ProductDetails';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/billing" element={<Billing />}></Route>
      <Route path="/product-details/:ProductId" element={<ProductDetails />}></Route>
    </Route>
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App
