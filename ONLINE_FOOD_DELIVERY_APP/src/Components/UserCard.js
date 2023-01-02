import { useSelector } from 'react-redux';

export default function UserCard() {

    const userData = useSelector((state) => state.userDetail.userData);


    return(<>
    
    <h3 class='User-details-header text-center mt-4 mb-4 pb-2'>User Details</h3>
    <label class='h5 text-center  d-block border-bottom'>Name</label>
    <h3 class='text-center text-danger mt-3 h5' >{userData.name}</h3>
    <label class='h5 text-center d-block border-bottom mt-4'>Gmail</label>
    <h3 class='text-center mt-3 text-danger h5'>{userData.email}</h3>
    <label class='h5 text-center d-block border-bottom mt-4'>Contact No</label>
    <h3 class='text-center mt-3 text-danger h5'>{userData.phoneNo}</h3>
    <label class='h5 text-center d-block border-bottom mt-4'>Address</label>
    <h3 class='text-center mt-3 text-danger h5'>{userData.street}</h3>
    <h3 class='text-center mt-3 text-danger h5'>{userData.city}</h3>
    <h3 class='text-center mt-3 text-danger h5'>{userData.area}</h3>
    <h3 class='text-center mt-3 text-danger h5'>{userData.pin}</h3>
    
    </>)
}