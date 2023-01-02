import { useState,useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserData from '../ContextUserData';
import axios from 'axios';

export default function Register() {

    const [registerdata, setRegisterData] = useState({
        request: 'create_candidate',

    })

    const value = useContext(UserData);

    const {isLogged,setIslogged} = value;

    let navigate = useNavigate();


    let loginUser =() =>{
            
        navigate('/')
        
    }
    
    let registerUser = async() => {

        const {data} = await axios.post('https://karka.academy/api/action.php?', JSON.stringify(registerdata));
       
        if (data.status == "success"){
            alert('Successfully Created');
            setIslogged(true);
            navigate('/ResumeGenerator')
        }else{
            alert('Register Failed');
            navigate('/Register');
        }
    }

    
    return (
        <div className="register-wrapper" >
            <div className="bg-dark register-innerwrapper pb-5 ">
            <div className=" pt-3 register-fields">

                <h2 className="text-warning text-center p-3 rounded">Register</h2>

                <label className='reg-Label '>Name</label>
                <input className="reg-input text-center" onChange={(e) => setRegisterData({ ...registerdata, name: e.target.value })} />
                <br />
                <label className='reg-Label'>E-Mail</label>
                <input className="text-center " onChange={(e) => setRegisterData({ ...registerdata, email: e.target.value })} />
                <br />
                
                <label className='reg-Label'>AAdhar</label>
                <input className=" text-center " onChange={(e) => setRegisterData({ ...registerdata, aadhar: e.target.value })}  />
                <br />

                <label className='reg-Label'>Phone</label>
                <input className=" text-center " onChange={(e) => setRegisterData({ ...registerdata, phone: e.target.value })}  />
                <br />

                <label className='reg-Label'>Password</label>
                <input className=" text-center  " onChange={(e) => setRegisterData({ ...registerdata, password: e.target.value })} />
                <br />

                <label className='reg-Label'>Address</label>
                <input className=" text-center   " onChange={(e) => setRegisterData({ ...registerdata, address: e.target.value })} />
                <br />

                <label className='reg-Label'>City</label>
                <input className="    " onChange={(e) => setRegisterData({ ...registerdata, city: e.target.value })} />
                <br />

                <label className='reg-Label'>Area</label>
                <input className="   " onChange={(e) => setRegisterData({ ...registerdata, area: e.target.value })} />
                <br />

                <label className='reg-Label'>Pincode</label>
                <input className="   " onChange={(e) => setRegisterData({ ...registerdata, pin: e.target.value })}/>
                <br />
                <br />
                <span className="text-white d-block">If already have an account ? <a className="text-warning" onClick={loginUser}> Login </a></span>
                <br />
                <button className="form-control btn btn-warning  mt-4 mb-2" type="button" onClick={registerUser} >Register</button>

                </div>
            </div>
        </div>
    )

}
