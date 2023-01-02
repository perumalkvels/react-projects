
import cartImg from '../images/shopping_cart.png';

import { useSelector, useDispatch } from 'react-redux';

import React,{useState,useEffect } from 'react';

import { useNavigate, Link } from "react-router-dom";

import { setCartList,setOrderList } from '../Redux/Slices/foodlistSlice';

import UserCard from '../Components/UserCard';

import axios from 'axios';

export default function Cart() {

    const userData = useSelector((state) => state.userDetail.userData);

    const foodList = useSelector((state) => state.foodList.foodList)

    const cartList= useSelector((state) => state.foodList.cartList)

    const isLogged = useSelector((state) => state.userDetail.isLogged);
    

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const [items,setItems] = useState([]);


    let removeFromCart = (id) => {
          
        let newCartData = cartList.filter((val,index) => index !== id );
        dispatch(setCartList(newCartData));
    }

    let placeOrder = () => {

        dispatch(setOrderList(cartList));
        dispatch(setCartList([]));
        localStorage.removeItem('CartItems');
        localStorage.setItem('orderItems',JSON.stringify(cartList));
        navigate('/Orders')

    }

    return (<>

        <div className='container m-auto row mb-5'>

        <div className='col-8'>

        {cartList && cartList.map((val,index) => (
            <div className='card p-3 mt-3 col-12 mb-3' id={index}>
            <div className='row no-gutters'>
                <div className='col-4 img-fluid cart-img'>
                    <img className='mr-2 img-fluid ' src={val.foodImg}  />
                </div>
                <div className='col-8 '>
                    <div className='pl-3 m-0 card-body'>
                        <h5 className='card-title text-danger col-10' > {val.foodTitle}
                        <span className='text-success ml-2'>@ {val.foodPrice} /- </span> </h5>
                        <p className='card-text' >{val.foodDes}</p>
                        <div className='item-qty col-12 text-right row'>
                        <button type='button' className='bg-danger rounded p-0 m-0 col-3 border-0 text-white' onClick={()=>removeFromCart(index)}> remove </button>
                            <div className='col-8'> 
                                <div className='text-right border-0 ml-5 rounded'>
                                    <button type='button' className='btn text-white h3 btn-dark p-2 mr-2' 
                                    onClick={()=>dispatch(setCartList(cartList.map((val,key) => key==index ? {...val,'qty' : val.qty+1} : val)))}>
                                    +</button>
                                     <input type='number' className='p-0 m-0 col-3 rounded text-center' min='1' value={val.qty} />
                                    <button type='button' className='btn text-white h3 btn-dark p-2 ml-2' 
                                    onClick={()=>dispatch(setCartList(cartList.map((val,key) => key==index ? {...val,'qty' : val.qty-1} : val)))}>
                                    -</button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                        </div>

                    </div>
                </div>
            </div>
        </div>))
        
        }

          { cartList && cartList.length ? 
          <div className='text-right'>
          <button type='button' className='p-1 mb-5 btn btn-success col-lg-4 text-center' onClick={placeOrder} >Place Order</button>
          </div>
          : <>
           <h1 className='text-center text-secondary mt-5'>Cart is Empty</h1>
            <div className='delivery-img-wrapper text-center mt-3'> 
            <img className='cartImg' src={cartImg} />
            </div>
          </>
           }
          </div>


          <div className='col-4'>
            <UserCard />
        </div>
         
          </div>
        </>)
      
}


        // dispatch(setCartList(foodList.filter((val) => cartList.includes(val.foodId))))