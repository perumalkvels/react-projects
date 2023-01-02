import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { setCartList,setFoodList } from '../Redux/Slices/foodlistSlice';
import axios from 'axios';
export default function ProductCard(){

    
    const foodList = useSelector((state) => state.foodList.foodList)

    const foodBrand = useSelector((state) => state.foodList.foodBrand)

    const cartList= useSelector((state) => state.foodList.cartList)

    const isLogged = useSelector((state) => state.userDetail.isLogged)
    
    
    const dispatch = useDispatch()



    useEffect(() => {

        getFoodData()

    },[foodBrand])

    const getFoodData = async() =>{

        const { data } = await axios.get('http://localhost:4000/read');
        let tempFoodList = data;
        if(!foodBrand == ''){
            let filterList = tempFoodList && tempFoodList.filter((val) => val.foodBrand == foodBrand);
            dispatch(setFoodList(filterList));
         }
         else{
            dispatch(setFoodList(tempFoodList));
         }
    }
 
    // Add Cart Function Definition

    let addCart = async(id) => {

        if(isLogged){
                
          let newFilterItem = {'id' : id ,'qty' : 1};

            if(cartList == ''){
                    dispatch(setCartList([newFilterItem]));
                }else{
                    cartList && cartList.includes(id) ? alert('Item Already added to cart')
                    : dispatch(setCartList([...cartList,newFilterItem]));
                }
                alert('Food Added to Cart');
                
        }
        else{
            alert('Login Required');
        }
        
    }

    // let addCart = async(id) => {

    //     if(isLogged){
    //         let [filterItem] = foodList.filter((val) => val.foodId == id);
   
    //             let newFilterItem = [{'id' : filterItem.id ,'qty' : 1}];
    //         if(cartList == ''){
    //                 dispatch(setCartList([...newFilterItem]));
    //             }else{
    //                 cartList && cartList.includes(id) ? alert('Item Already added to cart')
    //                 : dispatch(setCartList([...cartList,...newFilterItem]));
    //             }
    //             alert('Food Added to Cart');
                
    //     }
    //     else{
    //         alert('Login Required');
    //     }
        
    // }

    return(<>  

        {foodList && foodList.map((value, index) => (<React.Fragment key={index}>
            
            <div class='product-id col-lg-3 col-md-4 col-12' >
                
                <div class='product-card card mb-3' id={value.foodId} >

                    <img src={value.foodImg} class='card-img-top food-img' />

                        <div class='card-body product-card-body bg-danger text-white'>

                            <div class='product-text-content'> 

                                <h5 class='card-title' id='food-title'>{value.foodTitle}</h5>

                                <span class='badge badge-dark mb-2 mr-2 p-2 font-weight-normal' id='food-session'>{value.foodBrand}</span>

                                <span class='badge badge-dark p-2 mb-2 font-weight-normal' id='food-type'>{value.foodType} </span>

                                <p class='card-text p-0 m-0' id='food-description'>{value.foodDes}</p>

                            </div>

                            <div class='product-cart-content'> 
                        
                            <button onClick={() => addCart(value.id)} class='font-weight-bold text-dark btn btn-light'>
                            <i class='fa fa-external-link pr-3' aria-hidden='true'> Add to Cart</i>
                            </button>

                            </div>
                        
                        </div>

                        <div class='card-footer bg-dark text-white text-center'>
                            <small class='h6' id='food-price'> Buy Now @ <span> {value.foodPrice} </span>/-</small>
                        </div>
                </div>
            </div>
            </React.Fragment>))
        }</> )  
} 