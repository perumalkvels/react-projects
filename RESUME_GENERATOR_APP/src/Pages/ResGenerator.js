import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import UserData from '../ContextUserData';

export default function ResumeGenerator() {

    let [allresumesList, setResumesList] = useState([]);

    let [resumeData, setResumeData] = useState({})

    const [tempState, setTempState] = useState('');

    const value = useContext(UserData);

    const { isLogged, setIslogged} = value;

    const [user,setUser] = useState('');


    let navigate = useNavigate();

    // Use Effect Function

  

    useEffect(
        () => {
            if (isLogged || localStorage.getItem('status')) {
                let name = localStorage.getItem('user');
                setUser(name);
                navigate('/ResumeGenerator');
                showDetails();

            } else {
                navigate('/');
            }
        },
        [isLogged])

    // Use Add Details To Main State by Temp State

    const addDetails = (e, type) => {

        if (type == 'skills' || 'interests' || 'hobbies' || 'education' || 'language' || 'certification') {
            if (!resumeData.type) {
                setResumeData({ ...resumeData, [type]: [tempState] });
            }
            setResumeData({ ...resumeData, [type]: [...resumeData[type], tempState] });
            setTempState('');
        }
    }

    // Del Details From Main State

    let delDetails = (e, id, type) => {

        if (type == 'education' || 'skills' || 'interests' || 'hobbies' || 'language' || 'certification') {
            let data = [...resumeData[type]];
            data.splice(id, 1);
            setResumeData({ ...resumeData, [type]: data });
        }
    }

    // Function For Handling Objects to add tempstate 

    let addObjectsInState = (e) => {

        // tempState==''? setTempState({}) : null;
        if (tempState == '') {
            setTempState({});
        }
        setTempState({ ...tempState, [e.target.name]: e.target.value });
    }

    // Function For Submitting All Details via API Call

    let sumbitDetails = async () => {

        let postResumeData = {
            request: 'create_react_resume',
            user: 'vels',
            resume: resumeData,
        }
        const { data } = await axios.post('https://karka.academy/api/action.php', JSON.stringify(postResumeData));

        data.status == 'success' ? alert('Resume is Added') : alert('Submission Failed');

        showDetails();
    }

    // Function For Showing Details using API Calls

    let showDetails = async () => {

        let { data } = await axios.get('https://karka.academy/api/action.php?request=get_user_react_resume&user=vels');

        var details = data.data;

        setResumesList(details);
    }

    // Function For Deleting Details using API Calls

    let resumedel = async (delId) => {

        let response = await axios.get(`https://karka.academy/api/action.php?request=delete_react_user_resume&user=vels&id=${delId}`);

        showDetails();
    }

    // Function For Logout 

    let logout = () => {
       navigate('/');
       setUser('');
       setIslogged(false);
       localStorage.setItem('status',false);
       localStorage.setItem('user','');
}


    return (<>
        <div className="genertor-form-wrapper container-fluid ">

            <div className="row bg-warning">
            <h2 className="col-6 text-center p-3 display-4">Resume-Generator-App</h2>
            <div className="col-6 text-center m-0 pt-3">
            <h4 className="display-4 pt-3 align-middle d-inline "> Hi! {user} </h4>
            <button className="btn btn-danger align-middle" onClick={logout}>Logout</button>
            </div>
            </div>
            <div className="container">

                <div className="single_field row mb-5">
                    <h2 className="col-12 text-center">Fill Your Basic Details here</h2>
                    <input className="" type="text" placeholder="Name" id='name'
                        onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })} />
                    <br />
                    <input className=" " type="email" placeholder="Email Id" id="email"
                        onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })} />
                    <br />
                    <input className="" type="number" placeholder="Contact No " id="mobile"
                        onChange={(e) => setResumeData({ ...resumeData, mobile: e.target.value })} />
                    <br />
                    <input className="" type="text" placeholder="Role " id="role"
                        onChange={(e) => setResumeData({ ...resumeData, role: e.target.value })} />
                    <br />
                    <textarea className=" text-center col-7 mx-auto " placeholder="Address " id="address"
                        onChange={(e) => setResumeData({ ...resumeData, address: e.target.value })} />
                    <br />
                    <textarea className=" text-center col-7 mx-auto " placeholder="Your Career Objective " id="objective"
                        onChange={(e) => setResumeData({ ...resumeData, objective: e.target.value })} />
                    <br />
                </div>

                <div className='table-wrapper row'>
                    <h2 className="col-12 text-center mb-4">Fill Your Education here</h2>
                    <h5 className="col-12 text-center mb-3 text-info"> Degrees Priority Higer to Lower</h5>
                    <table className="edu_table ">
                        <div className='col-12 tableinput-wrapper mb-3'>
                            <tbody>
                                <tr className="col-12">
                                    <td><input type="text" id="education" placeholder="Course" name='course' onChange={addObjectsInState} /></td>
                                    <td><input type="text" id="education" placeholder="Year" name='year' onChange={addObjectsInState} /></td>
                                    <td><input type="text" id="education" placeholder="Institute" name='institute' onChange={addObjectsInState} /></td>
                                    <td><input type="text" id="education" placeholder="Percentage" name='percentage' onChange={addObjectsInState} /></td>
                                    <td><button type='button' className='btn btn-warning' onClick={(e) => addDetails(e, 'education')}>add Education</button></td>
                                </tr>

                            </tbody>
                        </div>

                    </table>

                    {
                        resumeData.education ? resumeData.education.map((val, index) => <tr className="d-flex justify-content-center col-11 mb-3">
                            <th >{index + 1}</th>
                            <td className='col-4'>{resumeData.education[index].course}</td>
                            <td className='col-2'>{resumeData.education[index].year}</td>
                            <td className='col-3'>{resumeData.education[index].institute}</td>
                            <td className='col-2'>{resumeData.education[index].percentage}</td>
                            <td className='col-2'><button className='btn btn-warning' onClick={(e) => delDetails(e, index, 'education')}>Delete</button></td>
                        </tr>) : null
                    }

                </div>

                <div className="skills col-12">
                    <h2 className="col-12 mt-5 mb-5 text-center">Let Me Know Your Skills</h2>

                    <div id="skillSets" className='col-6 m-auto text-center'>

                        <input type="text" id="" placeholder="skill" name="skills" onChange={(e) => setTempState(e.target.value)} />
                        <button className="btn btn-warning" onClick={(e) => addDetails(e, 'skills')}>Add Skills</button>
                        <table className="table  table-dark text-center">
                            <tbody>
                                {
                                    resumeData.skills ? resumeData.skills.map((val, index) => <tr>

                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button className='btn btn-warning pt-1 pb-1'
                                            onClick={(e) => delDetails(e, index, 'skills')}>del</button></td>

                                    </tr>) : null
                                }
                            </tbody>
                        </table>

                        {/* onClick={(e)=> setResumeData({...resumeData,skills : [...resumeData.skills,tempState]})} */}
                    </div>
                </div>

                <div className="interests row">
                    <h2 className="col-12 mt-5 mb-2 text-center">Interests and Hobbies</h2>
                    <div className=" col-6 areaofinterests">
                        <input type="text" id="interest" placeholder="Area Of Interest" onChange={(e) => setTempState(e.target.value)} />
                        <button className="btn btn-warning" onClick={(e) => addDetails(e, 'interests')}>Add Interests</button>
                        <table class="table table-dark text-center mt-3">
                            <tbody>
                                {
                                    resumeData.interests ? resumeData.interests.map((val, index) => <tr>

                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button className='btn btn-warning pt-1 pb-1'
                                            onClick={(e) => delDetails(e, index, 'interests')}>Delete Skill</button></td>

                                    </tr>) : null
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="col-6 hobbies">
                        <input type="text" id="hobbies" placeholder="Hobbies" onChange={(e) => setTempState(e.target.value)} />
                        <button className="btn btn-warning" onClick={(e) => addDetails(e, 'hobbies')}>Add Hobbies</button>
                        <table class="table  table-dark text-center mt-3">
                            <tbody>
                                {
                                    resumeData.hobbies ? resumeData.hobbies.map((val, index) => <tr>

                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button className='btn btn-warning pt-1 pb-1'
                                            onClick={(e) => delDetails(e, index, 'hobbies')}>Delete</button></td>

                                    </tr>) : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="certification row">
                    <h2 className="col-12 mt-5 mb-2 text-center">Here Fill Your Certifications</h2>
                    <div className="certification1 col-12">
                        <input name="courcse_name" placeholder="courcse_name" onChange={addObjectsInState} />
                        <input name="duration" placeholder="duration" onChange={addObjectsInState} />
                        <input name="institute" placeholder="institute" onChange={addObjectsInState} />
                        <input name="yearOfJoining" placeholder="yearOfJoining" onChange={addObjectsInState} />
                        <button className='btn btn-warning' onClick={(e) => addDetails(e, 'certification')}>add Certification</button>
                    </div>
                    <table class="table table-dark text-center mt-3">
                        <tbody>
                            {
                                resumeData.certification ? resumeData.certification.map((val, index) => <tr>

                                    <th scope="row">{index + 1}</th>
                                    <td>{val.courcse_name}</td>
                                    <td>{val.duration}</td>
                                    <td>{val.institute}</td>
                                    <td>{val.yearOfJoining}</td>
                                    <td><button className='btn btn-warning pt-1 pb-1' onClick={(e) => delDetails(e, index, 'certification')}>Delete</button></td>

                                </tr>) : null
                            }
                        </tbody>
                    </table>
                </div>

                <div className="projects col-12">
                    <h2 className="col-12 mt-5 mb-2 text-center">Add Your Projects</h2>
                    <div className="inner-projects row">
                        <input className="col-12" placeholder="Project-Title"
                            name='title' onChange={addObjectsInState} />
                        <textarea className="col-12" placeholder="Project-Description"
                            name='description' onChange={addObjectsInState} />
                        <button className='btn btn-warning' onClick={(e) => addDetails(e, 'projects')}>add projects</button>
                    </div>
                    <table className="table  table-dark text-center">

                        {
                            resumeData.projects ? resumeData.projects.map((val, index) => <tr>

                                <th scope="row">{index + 1}  </th>
                                <td>{val.title}</td>
                                <td>{val.description}</td>
                                <td><button className='btn btn-warning pt-1 pb-1' onClick={(e) => delDetails(e, index, 'projects')}>del</button></td>
                            </tr>) : null
                        }

                    </table>
                </div>

                <div className="personalDetails mt-5">
                    <h2 className="col-12 mt-3  mb-3 text-center">Enter Your Personal Details here</h2>
                    <div className="inner-personalDetails">
                        <input placeholder="Occupatio_Name"
                            onChange={(e) => setResumeData({ ...resumeData, occupation: e.target.value })} />
                        <input placeholder="Date_of_Birth"
                            onChange={(e) => setResumeData({ ...resumeData, dob: e.target.value })} />
                        <input placeholder="Marital_Status"
                            onChange={(e) => setResumeData({ ...resumeData, maritalstatus: e.target.value })} />
                        <input placeholder="Blood_Group"
                            onChange={(e) => setResumeData({ ...resumeData, bg: e.target.value })} />
                        <input placeholder="Langauges" onChange={(e) => setTempState(e.target.value)} />
                        <button className='btn btn-warning' onClick={(e) => addDetails(e, 'language')}>add language</button>
                        <table className="table  table-dark text-center">
                            <tbody>
                                {/* {
                                    resumeData. ? resumeData.skills.map((val, index) => <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{val}</td>
                                        <td><button className='btn btn-warning pt-1 pb-1'
                                            onClick={(e) => delDetails(e, index, 'skills')}>del</button></td>
                                        </tr>) : null
                                } */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="buttons mx-auto text-center">
                    <button className="mt-5 pl-5 pr-5 border border-white btn btn-primary" id="submit_button" onClick={sumbitDetails}>Generate Resume</button>
                </div>

            </div>

            <div className="resume_links row container p-0">
                <h2 className="col-12 text-center text-dark p-3 display-4">Stored Resume Data </h2>
                <table className="table table-dark text-center">
                    <thead>
                        <tr>
                            <th scope="col">Sl.No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Get Resume</th>
                            <th scope="col">Delete Resume</th>
                        </tr>
                    </thead>
                    <tbody id="resume_list">

                        {allresumesList && allresumesList.map((val) => {
                            return (<>
                                <tr>
                                    <td scope='col'> {val.id}  </td>
                                    <td scope='col'> {JSON.parse(val.data).name}  </td>
                                    <td scope='col'> <Link to={`/View/${val.id}`}> <button class='get_res btn btn-warning  text-dark'
                                        type='button' >View </button></Link></td>
                                    <td scope='col'><button class='btn btn-danger text-white'
                                        id='del_resume' onClick={(e) => resumedel(val.id)}>Delete</button></td>
                                </tr></>)
                        })
                        }
                    </tbody>
                </table>
            </div>

        </div>

    </>)
}