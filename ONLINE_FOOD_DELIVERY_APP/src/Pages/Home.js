import KFC_img from '../images/bannerKfc.png';
import PizzaHutz_img from '../images/bannerPizzaHut.png';
import McDonald_img from '../images/mcDonaldsbanner.jpg';
import KFC_logo from '../images/kfcfinallogo.png';
import McDonald_logo from '../images/mcdonalds-logo.png';
import Pizzahut_logo from '../images/pizza-hut-logo.png';
import ProductCard from '../Components/ProductCard';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFoodBrand } from '../Redux/Slices/foodlistSlice';


export default function Home() {

    const foodBrand = useSelector((state) => state.foodList.foodBrand)

    const dispatch = useDispatch()

    return (<>

        {/* Banner Starts here  */}
        
        <div class="banner ">
        <div class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={KFC_img} className="d-block w-100 carousel-image" alt="First Image" />
                            <div className="carousel-caption d-none d-md-block carousel-details">
                                <h5>Chicken Styles in ' KFC '</h5>
                                <p>When it comes to the best type of food to order at a restaurant</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={PizzaHutz_img} className="d-block w-100 carousel-image" alt="First Image" />
                            <div className="carousel-caption d-none d-md-block carousel-details">
                                <h5>Pizza Styles in PizzaHutz</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={McDonald_img} className="d-block w-100 carousel-image" alt="First Image" />
                            <div className="carousel-caption d-none d-md-block carousel-details">
                                <h5>Burger Styles in McDonald's</h5>
                                <p>When it comes to the best type of food to order at a restaurant</p>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
        </div>


        {/* Section Starts here  */}

        <section className="container-fluid pm-0 text-center">

            <div className='bg-light pb-3 '>

                <h1 className="text-center p-3 font-weight-bold text-dark">Our Top Brands</h1>
                <span className='h4' >Click Below to Select Your Food From Your Favorite Brand </span>
            
            </div>

            <div className="top_brands container-fluid row" >
                
                <div className="brand-img col-4">
                    <button onClick={() => dispatch(setFoodBrand('KFC'))}> <img src={KFC_logo} /></button>
                </div>
                <div className="brand-img col-4">
                    <button onClick={() => dispatch(setFoodBrand('mcdonald'))}><img src={McDonald_logo} /></button>
                </div>
                <div className="brand-img col-4">
                    <button onClick={() => dispatch(setFoodBrand('pizzahut'))}><img src={Pizzahut_logo} /></button>
                </div>
            
            </div>

            <div class='container row m-auto' > {!foodBrand == '' ? <ProductCard /> : null} </div>

            <div className="container text-center my-5">

                    <h4>Most Wanted Chicken Styles to Eat in Above Brands </h4>

                    <p>When it comes to the best type of food to order at a restaurant, it does not get much better than pizza. Pizza is a universal favorite across the world, and it is easy to see why.</p>

            </div>

        </section>

    </>)
}