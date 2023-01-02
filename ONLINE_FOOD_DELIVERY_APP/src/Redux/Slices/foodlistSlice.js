import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    //Initial State Declaration
    foodList : [],
    cartList : [],
    orderList : [],
    tempFoodList :{},
    foodBrand : '',

    
}


export const foodlistSlice = createSlice({
    name : 'food',
    initialState,
    
    // Functions That may associate with Changing The Initial State
    reducers : {
        setFoodList : (state,action) => {
            state.foodList = action.payload
        },
        setCartList : (state,action) => {
            state.cartList = action.payload
        },
        setOrderList : (state,action) => {
            state.orderList = action.payload
        },
        setFoodBrand : (state,action) => {
            state.foodBrand = action.payload
        },
        setFilterFoodList :(state,action) => {
            state.filterFoodList = action.payload
        },
        setTempFoodList : (state,action) => {
            state.tempFoodList = action.payload
        }
    },
})

export const addFoodItem  = (foodItem) => (dispatch) => {
    let localfoodList = JSON.parse(localStorage.getItem('food-list'));
    let newFoodList = [...localfoodList,foodItem];
    localStorage.setItem("food-list", JSON.stringify(newFoodList));
}

export const { setFoodList,setCartList,setOrderList,setFoodBrand,setFilterFoodList,setTempFoodList  } = foodlistSlice.actions

export default foodlistSlice.reducer