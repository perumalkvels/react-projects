
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {loginUser} from '../Redux/Slices/UserdetailSlice';

import { setloginData,setIsLogged } from '../Redux/Slices/UserdetailSlice';


export default function Login(){

    const loginData = useSelector((state) => state.userDetail.loginData)

    const dispatch = useDispatch()

    return ( <>
        <div className="logincontainer container ">
        <form id="form" className="form">

            <div className="form-control bg-warning mb-4 border-0 ">
                <label className="text-dark bg-warning">Email Id : </label>
                <input className='bg-warning border-0 text-center w-75' type="text" placeholder="Enter username"
                value={loginData.email} onChange ={(e) => dispatch(setloginData({...loginData,'email':e.target.value}))} />
            </div>

            <div className="form-control bg-warning mb-4  border-0 ">
                <label className="text-dark bg-warning">Password : </label>
                <input className='bg-warning border-0 text-center w-75' type="password" placeholder="Enter password" 
                value={loginData.password}  onChange ={(e) => dispatch(setloginData({...loginData,'password':e.target.value}))} />
            </div>

            <div className='text-right'>
            <button className='btn btn-warning' type="button" onClick={() => dispatch(loginUser(loginData))}>Login</button>
            </div>
        </form>    
    </div>

    </>)


}