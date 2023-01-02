
import Kart_icon from '../images/cart-plus-fill.svg';

import Account_icon from'../images/person-circle.svg';

import {useEffect} from 'react';

import { Link,useNavigate } from "react-router-dom";

import { useSelector,useDispatch } from 'react-redux';

import { setUserData,setIsLogged } from '../Redux/Slices/UserdetailSlice';



import axios from 'axios';


export default function Header() {

    const cartList = useSelector((state) => state.foodList.cartList);

    const isLogged = useSelector((state) => state.userDetail.isLogged);

    const userData = useSelector((state) => state.userDetail.userData);

    var cartCount = !cartList ?  0 : cartList.length;

    let navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(()=>{

        CheckUserLogin()



    },[])

    useEffect(()=>{

            addtocartFood()
    },[cartList])

    let addtocartFood = async() => {

        const response = await axios.post('http://localhost:4000/addtocart',JSON.stringify({cartList}));
        console.log(response)
        
    }

    const CheckUserLogin = async() =>{

        const { data } = await axios.get('http://localhost:4000/checkLoginStatus');
        if (!data.length == 0){
            dispatch(setIsLogged(true))
            dispatch(setUserData(data[0])) 
        }
    }

    const logOutUser = async() =>{

        const response = await axios.get('http://localhost:4000/logoutUser');
        console.log(response)
        dispatch(setUserData({}))
        dispatch(setIsLogged(false))
        navigate('/')
    }

    // useEffect(()=>{


    // },
    // [isLogged,cartList])



    let navigateToLogin = () => {

        navigate('/Accounts') 

    }
   


    return (

        <div className="container_fluid">
            <div className="top_title">
                <img src="https://www.codester.com/static/uploads/items/000/018/18519/preview-xl.jpg" />
                <p className="text-center ">Taste that best, its on time</p>
            </div>

            {/* Navigation Bar Starts here  */}

            <nav className="container_fluid navbar navbar-expand-lg bg-dark" id="navbar">

                {/* Here is a button declaration for toggle a navbar contents  */}

                <button className="sampleclass2 navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#menu">

                </button>

                <div className="sampleclass1 collapse navbar-collapse row" id="menu">

                    <ul className="navbar-nav mx-auto  col-lg-9 p-0 m-0">

                        <li className="nav-item"><Link to="/" className="nav-link text-white text-left ">Home</Link></li>
                        
                        <li className="nav-item"><Link to="/Products" className="nav-link text-white text-left">Products</Link></li>

                       <li className="nav-item">
                       {isLogged && cartList !== '' ?
                        <Link to="/Cart" className="nav-link text-white text-left ">Cart
                         <span className='bg-white pl-2 pr-1 pt-0 pb-0 rounded text-dark ml-2'>{cartCount} <img className='bg-white nav-icon-img m-0 mr-1' src={Kart_icon}/></span> 
                        </Link> : <Link className='nav-link text-white text-left' onClick={()=> alert('Please Login To use Cart')}>Cart </Link> } </li>
                        

                        <li className="nav-item">
                        {isLogged ? <Link to="/Orders" className="nav-link text-white text-left">Orders</Link> : 
                        <Link className='nav-link text-white text-left' onClick={()=> alert('Please Login To Make Orders')}>Orders  </Link> } </li>
                        

                       
                        <li className="nav-item">
                        <Link to='/Accounts' className='nav-link text-white text-left'>Account  
                        {isLogged ? <img class='bg-white nav-icon-img p-1' src={Account_icon} /> : null } </Link> </li>

                    </ul>

                    <div className='col-lg-3 text-right'>
                    {isLogged ? <> <span className='text-white mr-3 h4 pt-2'>hi.. <span className='text-warning'>{userData?.name}</span></span>                        
                                 <button className='btn btn-light mr-4' onClick={logOutUser}>Logout</button> </> : 
                                 <button className='btn btn-light mr-4' onClick={navigateToLogin}>Login</button>
                                }
                     </div>
             
                    
                </div>

            </nav>
        </div>
    )

}