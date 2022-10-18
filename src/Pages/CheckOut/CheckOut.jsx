import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import {OrderItem} from '../../Components';
import { handleTotalAmount } from '../../Helpers/handleTotalAmount';
import './index.css';

const CheckOut = () => {
 const {state}=useContext(AppContext);
const{cart,login}=state;
const date =new Date();



  return (
    <div className="check-out">
    <div className="check-out-container">
      <h1 className="title">My order</h1>
      <h3>{login[0].userMail}</h3>

      <div className="check-out-content">
        <div className="order">
          <p>
            <span>{date.toISOString().split('T')[0]}</span>
            <span>{cart.length} articles</span>
          </p>
          <p>${handleTotalAmount()}</p>
        </div>
        {/* nos falta pasar las props pero no podemos traer el contexto */}
        {cart.map((product)=>(
          <OrderItem  product={product} key={product.id}/>
        ))}

       

        

        
      </div>
    </div>
    <Link to={'/'}> 🔙</Link>
  </div>
  )
}

export  {CheckOut}