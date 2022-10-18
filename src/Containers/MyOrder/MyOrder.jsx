import React,{useContext,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import {Button, OrderItem} from '../../Components';
import { handleTotalAmount } from '../../Helpers/handleTotalAmount';
import Swal from 'sweetalert2';

import './index.css';

const MyOrder = ({setToggleOrders}) => {
 const history=useHistory();   
 const {state}=useContext(AppContext);
 const{login,cart}=state;

 const handleToggle=()=>{
    setToggleOrders(false)
 }

 const handleCheckout=()=>{
   if(login.length===0){
    Swal.fire({
        title: 'debes ingresar tus credenciales para continuar con el pedido',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      history.push('/login')
   }else{
       history.push('/checkout')
   }
    
 }

 
  return (
    <>
    <aside className="MyOrder">
        <div className="title-container">
            <img src="flechita.svg" alt="arrow" onClick={handleToggle}/>
            <p className="title">My order</p>
        </div>
        <div className="my-order-content">
            {/* hacemos render del número de elementos que están en el estado */}
            {cart.map(product=>(
                 <OrderItem  product={product} key={`orderItem-${product.id}`}/>
            ))}
           
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${handleTotalAmount()}</p>
            </div>
            <Button text={'Checkout'} styles={'primary-button'} type={'button'} onClick={handleCheckout}/>
           
        </div>
        
    </aside>
    
    </>
		
  )
}

export  {MyOrder}