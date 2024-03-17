import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import store from './redux/store'
import { Provider } from 'react-redux'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SendOtp from './pages/SendOtp.jsx';
import ProductList from './pages/ProductList.jsx';
import VerifyOtp from './pages/VerifyOtp.jsx';
import AuthRoute from "./components/AuthRoute.jsx";
import ProductDetail from "./pages/productDetail.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SendOtp />
  },
  {
    path: "/verify-otp",
    element: <VerifyOtp />
  },
  {
    path: "/home",
    element: <AuthRoute><ProductList /></AuthRoute>
  },
  {
    path: "/product-detail/:id",
    element: <ProductDetail></ProductDetail>
  }
],
{
  basename: "/react-test"
}
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
