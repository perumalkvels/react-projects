import { useEffect, useState } from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import UserCard from '../Components/UserCard';
import { useSelector } from 'react-redux';

export default function Accounts() {

    const isLogged = useSelector((state) => state.userDetail.isLogged);

    const [option, setOption] = useState('login');

    if (option == 'login') {
        var class1 = 'text-warning display-4';
        var class2 = 'text-white';
    } else {
        var class2 = 'text-warning display-4';
        var class1 = 'text-white';
    }

    return (<>

        {isLogged ? <div className='container w-100 mt-5 mb-5'>
            <div className='w-50 rounded m-auto border border-danger p-5'>
                <UserCard />
            </div>
        </div> :

            <div className=' container rounded w-100 mt-5 mb-5'>

                <div className='bg-dark w-50 m-auto rounded p-5'>

                    <div className='mb-5 w-100 text-center'>

                        <span className=' mb-4 w-100 pr-5' ><a className={class1} onClick={() => setOption('login')} >Login</a> </span>

                        <span className=' mb-4 w-100 text-center pl-5'> <a className={class2} onClick={() => setOption('register')} >Register</a></span>

                    </div>

                    {option == 'login' ? <Login /> : <Register option={option} setOption={setOption}/>}

                </div>

            </div>}


    </>)
}