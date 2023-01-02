 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Orders from './Pages/Orders';
import Cart from './Pages/Cart';
import Addproducts from './Pages/Addproducts';
import Accounts from './Pages/Accounts';

import { setFoodList } from './Redux/Slices/foodlistSlice';

export default function AppRoutes() {

    const dispatch = useDispatch()

    useEffect(() => {
        
        getFoodData()
        
    },
    [])

    const getFoodData = async() =>{

        const { data } = await axios.get('http://localhost:4000/read');
        console.log(data)

        dispatch(setFoodList(data))

    }



    return (<>
        <Router> 
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route path='/Products' element={<Products />} />
                   <Route path='/Addproducts' element={<Addproducts />} />


                  <Route path='/Cart' element={<Cart />} />
                   <Route path='/Orders' element={<Orders />} />

                     <Route path='/Accounts' element={<Accounts />} />
            </Routes>
            <Footer />
        </Router>
    </>)
}
