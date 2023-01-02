import { useSelector, useDispatch } from 'react-redux';

import { useNavigate } from "react-router-dom";

import delivery from '../images/orderImg.png';


export default function Orders() {

  let navigate = useNavigate();

  const orderList = useSelector((state) => state.foodList.orderList);

  const totalAmount = orderList && orderList.reduce((acc, val) => {
    return val.foodPrice * val.qty + acc;
  }, 0);

  const totalQty = orderList && orderList.reduce((acc, val) => {
    return val.qty + acc;
  }, 0);

  return ( <>
    <div className='order-wrapper container m-auto'>

      { orderList && !orderList.length == 0 ? (<>

        <h1 className='display-4 text-center mt-5 text-dark'> Yours Orders Are !!! </h1>

        {orderList.map((val) => <div className='card-body border mt-3 p-4 ' id={val.itemId}>
          <div className='row align-items-center'>
            <div className='col-md-3'>
              <img src={val.foodImg} className='img-fluid order-img' /></div>
            <div className='col-md-3 d-flex justify-content-center'><div>
              <h5 className='text-muted mb-4 pb-2 h5 text-center'>Name</h5>
              <p className='lead fw-normal mb-0 text-center'> {val.foodTitle} </p></div></div>
            <div className='col-md-3 d-flex justify-content-center'><div>
              <h5 className='text-muted mb-4 pb-2 h5  text-center'>Quantity</h5>
              <p className='lead fw-normal mb-0 text-center'>{val.qty}</p></div></div>
            <div className='col-md-3 d-flex justify-content-center'><div>
              <h5 className='text-muted mb-4 pb-2 h5  text-center'>Price</h5>
              <p className='lead fw-normal mb-0 text-center'>{val.foodPrice * val.qty}</p>
            </div>
            </div>
          </div>
        </div>)}


        <div class="card mt-5 mb-5">
          <div class="card-body bg-light p-4">
            <p class="mb-0 me-5 d-flex align-items-center" >
              <span class="text-muted mx-auto h3">Order total:</span>
              <span class="text-muted mx-auto h3"> Qty : {totalQty}</span>
              <span class="mr-5 h3 mx-auto display-4">{totalAmount}</span>
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-end mb-5">
          <a type="button" class="btn btn-success btn-lg me-2" onClick={() => { navigate('/') }}>Continue shopping </a>
        </div>

      </>) :

        (<div className="">
          <h1 className='text-center text-secondary mt-5'>No Order Placed</h1>
          <div className='delivery-img-wrapper text-center mt-3'>
            <img className='deliveryImg ' src={delivery} />
          </div>
        </div>)
      }

      </div>

  </> )
}