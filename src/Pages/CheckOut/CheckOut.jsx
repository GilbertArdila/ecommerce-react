import React,{useContext} from 'react';
import './index.css';
import { AppContext } from '../../Context/AppContext';
import {OrderItem} from '../../Components';

const CheckOut = () => {
 const {state}=useContext(AppContext);
 console.log(state)

  return (
    <div className="check-out">
    <div className="check-out-container">
      <h1 className="title">My order</h1>

      <div className="check-out-content">
        <div className="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>
        {/* nos falta pasar las props pero no podemos traer el contexto */}
        {/* <OrderItem/> */}

       

        

        
      </div>
    </div>
  </div>
  )
}

export  {CheckOut}