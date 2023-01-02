import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Viewpage from '../Pages/Viewpage';
export default function Showresume(){

    const [resumeContainer,setResumeContainer] = useState([]);

    let showDetails = async() => {

        let {data} = await axios.get('https://karka.academy/api/action.php?request=get_user_react_resume&user=vels' );

        var details = data.data;

        console.log(details);

        setResumeContainer(details);

        // console.log();

        // console.log(resumeContainer);    
    }

    let resumedel = async(delId) => {

        let response =  await axios.get(`https://karka.academy/api/action.php?request=delete_react_user_resume&user=vels&id=${delId}`);
        showDetails();
       }


    useEffect(
        () => {
           showDetails();   
           console.log('useEffect Working');    
        } 
        ,
        [])

    return(
        <>
       {resumeContainer&&resumeContainer.map((val,index)=> {
        
        return (<>
        <tr>
        <td scope='col'> {val.id}  </td>
        <td scope='col'> {JSON.parse(val.data).name}  </td>
        <td scope='col'> <Link to={`/Viewpage/${val.id}`}> <button class='get_res btn btn-warning  text-dark' 
        type='button' >View </button></Link></td>
        <td scope='col'><button class='btn btn-danger text-white' 
        id='del_resume' onClick={(e)=>resumedel(val.id)}>Delete</button></td>
        </tr>
        </> ) 
       
    } ) }
        
        </> )

    }
    
