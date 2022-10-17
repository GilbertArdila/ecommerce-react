import React from 'react';
import './index.css';
import { Order } from '../../Components';

const Orders = () => {
  return (
    <div className="my-order">
    <div className="my-order-container">
      <h1 className="title">My orders</h1>

      <div className="my-order-content">

       <Order/>

       

        
       
      </div>
    </div>
  </div>
  )
}

export  {Orders}