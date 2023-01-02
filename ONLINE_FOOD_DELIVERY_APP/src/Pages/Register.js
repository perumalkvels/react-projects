import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import { registerUser } from '../Redux/Slices/UserdetailSlice';

import { setRegisterData,setIsRegistered } from '../Redux/Slices/UserdetailSlice';

import axios from 'axios'



export default function Register({option,setOption}) {

    const isRegistered = useSelector((state) => state.userDetail.isRegistered);

    const registerData = useSelector((state) => state.userDetail.registerData)

    const dispatch = useDispatch()

    let navigate = useNavigate();

    const registerUser = async() => {

        const {data} = await axios.post('http://localhost:4000/registerUser',JSON.stringify(registerData));
        console.log(data)
    }

    useEffect(()=>{

        if(isRegistered){
            console.log('Register Effect');
            dispatch(setIsRegistered(false));
            setOption('login');
        }

    },[isRegistered])



    return (<>
        <div className="registercontainer container ">
            <form id="form" className="form">
                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Name : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="text" value={registerData.name}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'name': e.target.value }))} />
                </div>

                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Email Id : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="email" value={registerData.email}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'email': e.target.value }))} />
                </div>
                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Password : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="password" value={registerData.password}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'password': e.target.value }))} />
                </div>

                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Aadhar : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="text" value={registerData.aadhar}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'aadhar': e.target.value }))} />
                </div>

                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Address : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="text" value={registerData.address}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'street': e.target.value }))} />
                </div>

                <div className='w-100 d-flex '>

                    <div className="form-control bg-warning mb-4  border-0 mr-2">
                        <label className="text-dark bg-warning" for="username">Area : </label>
                        <input className='bg-warning border-0 text-center w-50 ml-3' value={registerData.area}
                            onChange={(e) => dispatch(setRegisterData({ ...registerData, 'area': e.target.value }))} />
                    </div>

                    <div className="form-control bg-warning mb-4  border-0 ml-2">
                        <label className="text-dark bg-warning" for="username">city : </label>
                        <input className='bg-warning border-0 text-center w-75' type="text"  value={registerData.city}
                            onChange={(e) => dispatch(setRegisterData({ ...registerData, 'city': e.target.value }))} />
                    </div>

                </div>

                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Phoneno : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="text" value={registerData.phoneNo}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'phoneNo': e.target.value }))} />
                    {/* <small id="errorText">Error message</small> */}
                </div>



                <div className="form-control bg-warning mb-4  border-0 ">
                    <label className="text-dark bg-warning" for="username">Pin : </label>
                    <input className='bg-warning border-0 text-center ml-3 w-75' type="text" value={registerData.pin}
                        onChange={(e) => dispatch(setRegisterData({ ...registerData, 'pin': e.target.value }))} />
                    {/* <small id="errorText">Error message</small> */}
                </div>


                 <div className='text-right'>
                    <button className='btn btn-warning' type="button" onClick={registerUser}>Register</button>
                </div>
            </form>
        </div>

    </>)



}