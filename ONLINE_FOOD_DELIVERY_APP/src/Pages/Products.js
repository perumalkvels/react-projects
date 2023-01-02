import ProductCard from '../Components/ProductCard';
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { setFoodBrand } from '../Redux/Slices/foodlistSlice';
import { useSelector, useDispatch } from 'react-redux';


export default function Products() {

    const dispatch = useDispatch()

    const foodBrand = useSelector((state) => state.foodList.foodBrand)

    useEffect(() => {
        
        dispatch(setFoodBrand(''));

    },[foodBrand]
    )

    return (<>
        <div className='text-right  mt-5 mr-4'>
            <button className=' btn btn-success'>
                <Link to={'/Addproducts'}>
                    <span className='text-white'>Add Products</span>
                </Link>
            </button>
        </div>

        <h1 className='text-center p-5 display-4'>Our All Food Varities</h1>
        <div class='container row m-auto' >
            <ProductCard />
        </div>
    </>)
}

