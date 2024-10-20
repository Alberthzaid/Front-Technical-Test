// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route , Routes  , BrowserRouter} from "react-router-dom";
import {Home} from "./Pages/Public/Home/Home.jsx";
import './App.css'
import {Navbar} from "./Components/ Navbar/Nabar.jsx";
import {Login} from "./Pages/Public/Login/Login.jsx";
import {ProductsPage} from "./Pages/Public/Products/ProductsPage.jsx";
import {CartPopup} from "./Components/CartPopup/CartPopup.jsx";
import {CartPayment} from "./Pages/Public/Payments/CartPayment.jsx";
import {Admin} from "./Pages/Private/Admin/Admin.jsx";


function App() {
  return (

    <>

        <BrowserRouter>
            <CartPopup/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Products' element={<ProductsPage/>}/>
                <Route path='/Payments' element={<CartPayment/>}/>
                <Route path='/Admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
