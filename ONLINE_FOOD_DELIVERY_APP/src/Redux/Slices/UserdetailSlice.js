import { createSlice } from '@reduxjs/toolkit';
import { setCartList } from './foodlistSlice';
import axios from 'axios';

const initialState = {

    //Initial State Declaration

    isLogged : false,

    isRegistered : false,

    userData :{},

    loginData : {
        
        email : "perumal.159@gamil.com",
        password : "12345",

    },

    registerData : {}
}

export const userdetailSlice = createSlice({

    name : 'login',

    initialState,
    
    // Reducers That may associate with Changing The Initial State

    reducers : {

        setUserData : (state,action) => {
            state.userData = action.payload
        },
        setIsLogged : (state,action) => {
            state.isLogged = action.payload
        },
        setloginData : (state,action) => {
            state.loginData = action.payload
        },
        setIsRegistered : (state,action) => {
            state.isRegistered = action.payload
        },
        setRegisterData : (state,action) => {
            state.registerData = action.payload
        }
    },
})


export const loginUser = (logindata) => async (dispatch) => {

    const {data} = await axios.post('http://localhost:4000/loginUser',JSON.stringify(logindata));
    console.log(data)
    if(!data==''){

        dispatch(setIsLogged(true))
        dispatch(setUserData(data[0]))
        dispatch(setCartList(data[0].cart_Items))

        alert('Login Successsfully');
    }
    else{
        alert('Login Failed');
    }
    
}


export const registerUser = (registerdata) => async (dispatch) => {

    const response = await axios.post('http://localhost:4000/registerUser', JSON.stringify(registerdata));

    console.log(response);

        // alert('Successfuly Registered');

        // dispatch(setIsRegistered(true))

        // dispatch(setRegisterData({request : 'create_candidate'})) 

}


export const { setUserData,setIsLogged,setloginData,setRegisterData,setIsRegistered } = userdetailSlice.actions

export default userdetailSlice.reducer