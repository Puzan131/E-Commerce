import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart.jsx";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
      <Route path="products/:productId" element={<Products />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
);
