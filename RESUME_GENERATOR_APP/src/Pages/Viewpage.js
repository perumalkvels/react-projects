import React,{useState,useEffect,useContext } from "react";
import { useNavigate,useParams } from "react-router-dom";
import UserData from "../ContextUserData";
import axios from 'axios';

export default function View(){

    const params = useParams();

    const contextUserData = useContext(UserData);
    const { isLogged } = contextUserData;

    let navigate = useNavigate();

    const [singleUserData,setSingleUserData] = useState('');

    useEffect(()=>{
        getDetails(params.id);
    },
    [params.id]
    )


    // Getting All Resumes using API call 

    const getDetails = async() => {

        const {data} = await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=vels&id=${params.id}`)
        
        let details = data.data;

        var userData = JSON.parse(details.data);

        setSingleUserData({...userData});
}


    return (<>
     <div className="container bg-white">

    <div className="row">

    <div className="col-3 pl-3 pr-3 sidebar_section bg-danger  text-center">

        <div className="top_list text-white">
            <h1 className="mt-3 mb-4 border-white">Contact</h1>
            
            <hr className='text-white'/>

            <h3 className="bottom_border_dotted text-white">Phone No</h3>
            <h5 className="mb-5 mt-4" id="mobile">{singleUserData.mobile}</h5>

            <h3 className="bottom_border_dotted">Email</h3>
            <p className="mb-5 mt-4" id="email">{singleUserData.email}</p>

            <h3 classNameName="bottom_border_dotted">Address</h3>
            <p className="mb-5 mt-4" id="address">{singleUserData.address}</p>
        </div>
        <div className='text-white mb-5'>
            <h3 className="bottom_border mb-4">Skills</h3>
            <ul className="list-unstyled " id="skill">
                {singleUserData.skills && singleUserData.skills.map(val => <li className='h6'>* {val}</li>)}
            </ul>

        </div>
        <div className="hobbies text-white">
            <h3 className="bottom_border mb-4">Hobbies</h3>
            <ul className="list-unstyled" id="hobbies">
            {singleUserData.hobbies && singleUserData.hobbies.map(val => <li className='h6'>* {val}</li>)}
            </ul>

        </div>
    </div>

    <div class="col-9 mainbar_section pl-4 ">

         {/* Head Details  */}

        <div class="headDetails">
            <h1 className="display-3 text-danger" id="name">{singleUserData.name} </h1>
            <hr className='p-0 m-0 '/>
            <div>
            <h4 className="text-secondary h1 mt-2 mb-4 " id="role"> {singleUserData.role} </h4>
            <p className="">{singleUserData.objective}</p>
            </div>
            
        </div>

         {/* Education Details  */}

        <div class="educationDetails">
            <h2 class="mt-2 mb-3 text-danger">Education Details</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year</th>
                        <th scope="col">Institute</th>
                        <th scope="col">Percentage</th>
                    </tr>
                </thead>
                <tbody >

                {singleUserData.education && singleUserData.education.map((val,index) => <> <tr>
                    <th scope="col">{index+1}</th>
                    <td scope="col"> {val.course}</td>
                    <td scope="col"> {val.year}</td>
                    <td scope="col"> {val.institute}</td>
                    <td scope="col"> {val.percentage}</td>
                </tr></>
                )}

                </tbody>
            </table>
        </div>

        {/* Certification  */}

        <div class="certification">
            <h2 className="text-danger">Certification</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Sl.No</th>
                        <th scope="col">Courcse_name</th>
                        <th scope="col"> Duration </th>
                        <th scope="col">Institute </th>
                        <th scope="col">YearOfJoining</th>
                    </tr>
                </thead>
                <tbody>
                    
                {singleUserData.certification && singleUserData.certification.map((val,index) => <> <tr>
                    <th scope="col">{index+1}</th>
                    <td scope="col"> {val.courcse_name}</td>
                    <td scope="col"> {val.duration}</td>
                    <td scope="col"> {val.institute}</td>
                    <td scope="col"> {val.yearOfJoining}</td>
                </tr></>
                )}
                    
                </tbody>
            </table>

        </div>

        {/* Projects  */}

        <div className="Projects">
            <h2 className="text-danger">Projects</h2>

            {singleUserData.projects && singleUserData.projects.map((val,index) => <> 
            <div className="card mt-3">
                    <div className="card-header ">
                        <h3>{val.title}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text" id="main_pro_des">{val.description}</p>
                    </div>
            </div>
            </> )}

        </div>

        {/* Personal Details  */}

        <div className="personalDetails">
            <h2 className="mt-4 mb-3 text-danger">Personal Details</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Occupation_Name</th>
                        <td id="occupation">{singleUserData.occupation}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="col">Date of Birth </th>
                        <td id="dob">{singleUserData.dob}</td>
                    </tr>
                    <tr>
                        <th scope="col">Marital_status</th>
                        <td id="maritalStatus">{singleUserData.maritalstatus}</td>
                    </tr>
                    <tr>
                        <th scope="col">BloodGroup</th>
                        <td id="bg">{singleUserData.bg}</td>
                    </tr>
                    <tr>
                        <th scope="col">Languages</th>
                        <td id="language">
                        {singleUserData.language && singleUserData.language.map(val => <li>{val}</li>)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
    </>)
}