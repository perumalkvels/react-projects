import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ResumeGenerator from './Pages/ResGenerator';
import View from './Pages/Viewpage';
import UserData from './ContextUserData';

function MainRoutes() {

    const [isLogged,setIslogged] = useState(false);

    localStorage.setItem('status',false);

    localStorage.setItem('user','');

    return (
        <UserData.Provider value={{isLogged,setIslogged}}>
        <Router>
            <Routes>
                    <Route path='/'          element={<Login />}         />
                    <Route path='/Register'  element={<Register />}      />
                    <Route path='/ResumeGenerator' element={<ResumeGenerator />}   />
                    <Route path='/View/:id' element={<View />}   />
            </Routes>
        </Router>
        </UserData.Provider>
    )
}

export default MainRoutes;