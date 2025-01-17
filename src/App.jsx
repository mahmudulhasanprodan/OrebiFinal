import React from 'react'
import Home from './Pages/Home/Home';
import RouteLayout from './RouteLayout/RouteLayout';

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
