import React from 'react';
import './index.css';
import {ShopingCard} from '../ShopingCard/ShopingCard';

const AsideMyOrder = () => {
  return (
    <aside class="product-detail">
    <div class="title-container">
      <img src="/flechita.svg" alt="arrow"/>
      <p class="title">My order</p>
    </div>

    <div class="my-order-content">
      
      <ShopingCard/>
      <ShopingCard/>
      <ShopingCard/>

    

      <div class="order">
        <p>
          <span>Total</span>
        </p>
        <p>$560.00</p>
      </div>

      <button class="primary-button">
        Checkout
      </button>
    </div>
  <div/>
  </aside>
  )
}

export  {AsideMyOrder}