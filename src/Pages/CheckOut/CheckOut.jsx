import React,{useContext} from 'react';
import './index.css';
import { AppContext } from '../../Context/AppContext';
import {OrderItem} from '../../Components';

const CheckOut = () => {
 const {state}=useContext(AppContext);
const{cart,login}=state;
console.log(cart)
console.log(login)

const totalAmount=cart.reduce((sum,sell)=>sum+parseInt(sell.price),0)

  return (
    <div className="check-out">
    <div className="check-out-container">
      <h1 className="title">My order</h1>

      <div className="check-out-content">
        <div className="order">
          <p>
            <span>03.25.21</span>
            <span>{cart.length} articles</span>
          </p>
          <p>${totalAmount}</p>
        </div>
        {/* nos falta pasar las props pero no podemos traer el contexto */}
        {cart.map((product)=>(
          <OrderItem  product={product}/>
        ))}

       

        

        
      </div>
    </div>
  </div>
  )
}

export  {CheckOut}