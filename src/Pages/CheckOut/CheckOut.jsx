import React from 'react';
import './index.css';
import {OrderItem} from '../../Components';

const CheckOut = () => {
  return (
    <div class="check-out">
    <div class="check-out-container">
      <h1 class="title">My order</h1>

      <div class="check-out-content">
        <div class="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>

        <OrderItem/>
        <OrderItem/>
        <OrderItem/>
        <OrderItem/>

        

        
      </div>
    </div>
  </div>
  )
}

export  {CheckOut}