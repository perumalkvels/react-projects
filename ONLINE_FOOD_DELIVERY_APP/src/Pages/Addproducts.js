
import React, { useEffect } from 'react';
import { setTempFoodList } from '../Redux/Slices/foodlistSlice';
import { addFoodItem } from '../Redux/Slices/foodlistSlice';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function AddProducts() {

    const tempFoodList  = useSelector((state) => state.foodList.tempFoodList);

    const dispatch = useDispatch()

    const addFoodItem = async() => {

        const { data } = await axios.post('http://localhost:4000/create',JSON.stringify(tempFoodList));

        console.log(data)
    }

    return (<>
        <div class='food-form-wrapper p-5'>
        <form class="container food-form bg-white pl-5 pr-5 pt-4 pb-3">
            <h1 class="text-center mb-3 text-dark">Add Foot Item</h1>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Food-Title</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Enter your Food Title" 
                    onChange={(e) => dispatch(setTempFoodList({...tempFoodList, 'foodTitle': e.target.value }))} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Food-Image-URL</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Enter your Image URL" 
                    onChange={(e) =>dispatch(setTempFoodList({...tempFoodList, 'foodImg': e.target.value }))} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Food-Description</label>
                <div class="col-sm-9">
                    <textarea type="text" class="form-control" placeholder="Write Description About the Food"
                        onChange={(e) => dispatch(setTempFoodList({...tempFoodList,'foodDes': e.target.value }))}></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label ">Food-Brand</label>
                <div class="col-sm-9 radio-type">
                    <div onChange={(e) => dispatch(setTempFoodList({...tempFoodList, 'foodBrand': e.target.value }))}>
                        <input type="radio" value="KFC" name="foodBrand" />
                        <label>KFC</label>
                        
                        <input type="radio" value="mcdonald" name="foodBrand" /> 
                        <label>Mc-Donald</label>
                       
                        <input type="radio" value="pizzahut" name="foodBrand" /> 
                        <label>Pizza-Hut</label>

                    </div>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Foot-Type</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Enter Type Of Food"
                        onChange={(e) => dispatch(setTempFoodList({...tempFoodList, 'foodType': e.target.value }))} />
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Foot-Price</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control" placeholder="Price Of Food"
                        onChange={(e) => dispatch(setTempFoodList({...tempFoodList,'foodPrice': e.target.value }))} />
                </div>
            </div>
            <div class="form-group row">
                <div class=" mx-auto mt-6 lg-12">
                    <button type="button" class="p-2 btn btn-primary" onClick={addFoodItem}>Place This Food Item</button>
                </div>
            </div>
        </form>
        </div>
    </>)
}