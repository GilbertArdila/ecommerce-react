import React from 'react';
import './index.css';
import { Order } from '../../Components/Order/Order';

const Orders = () => {
  return (
    <div class="my-order">
    <div class="my-order-container">
      <h1 class="title">My orders</h1>

      <div class="my-order-content">

       <Order/>

       

        
       
      </div>
    </div>
  </div>
  )
}

export  {Orders}