import React, { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserData from '../ContextUserData';

function Login() {

    const [logindata, setLoginData] = useState({
        request: 'candidate_login',
        email: '',
        password: '',
    })
    const value = useContext(UserData);

    const {isLogged,setIslogged,user,setUser} = value;

    let navigate = useNavigate();

    let RegisterUser = () => {
        navigate('/Register');
    }

    useEffect(
        () => {
            if (isLogged ) {

                localStorage.setItem('status',true);
                navigate('/ResumeGenerator');
             }else{
                navigate('/');
             }
        },
        [isLogged])




    let loginUser = async () => {
        
        const {data} = await axios.post('https://karka.academy/api/action.php?', JSON.stringify(logindata));
        if (data.status == 'success') {
            allMembers();
            setIslogged(true);
        }
    }
    
    let allMembers = async () =>{
        const {data} = await axios.get('https://karka.academy/api/action.php?request=getAllMembers' );
        let userData = data.data.find(val => val.email == logindata.email );
        let userName = userData.name;
        localStorage.setItem('user',userName);

        }
       

    return (<>
        <div className="w-100 text-center" >
            <div className="w-75 h-100 m-auto login-outerwrapper  ">
                <div className="w-50 login-innerwrapper pt-5 pb-5">
                    <h2 className="text-warning text-center pb-4">Login</h2>
                    <div className="w-75 m-auto">
                    <input className="form-control text-center p-3 mt-2 mb-2 " value={logindata.email} onChange={(e) => setLoginData({ ...logindata, email: 'perumal@gmail.com'})} placeholder="Email" />
                    <br />
                    <input className="form-control text-center p-3 mt-2 mb-2 " value={logindata.password} onChange={(e) => setLoginData({ ...logindata, password: 'perumal@123'})} placeholder="Password" />
                    <br />
                    </div>
                    <span className="text-white d-block">Didn't have account yet ? <a className="text-warning" onClick={RegisterUser} > Register </a></span>
                    <button className="form-control btn btn-warning mt-4 mb-2 w-50" type="button" onClick={loginUser}>Login</button>
                </div>
            </div>
        </div>
       
        </>
    )

}
export default Login; 