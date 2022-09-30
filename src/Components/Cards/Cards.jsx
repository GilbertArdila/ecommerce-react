import React from 'react';
import './index.css';

const Cards = () => {
  return (
    <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="producto"/>
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="bt_add_to_cart.svg" alt="carrito de compras"/>
      </figure>
    </div>
  </div>
  )
}

export  {Cards}