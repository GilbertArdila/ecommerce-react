import React,{useContext,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import './index.css';
import {Button, OrderItem} from '../../Components'

const MyOrder = ({setToggleOrders}) => {
 const history=useHistory();   
 const {state}=useContext(AppContext);

 const handleToggle=()=>{
    setToggleOrders(false)
 }

 const finalPrice=state.cart.reduce((sum,item)=>sum+parseInt(item.price),0)
 
  return (
    <>
    <aside className="MyOrder">
        <div className="title-container">
            <img src="flechita.svg" alt="arrow" onClick={handleToggle}/>
            <p className="title">My order</p>
        </div>
        <div className="my-order-content">
            {/* hacemos render del número de elementos que están en el estado */}
            {state.cart.map(product=>(
                 <OrderItem  product={product} key={`orderItem-${product.id}`}/>
            ))}
           
            <div className="order">
                <p>
                    <span>Total</span>
                </p>
                <p>${finalPrice}</p>
            </div>
            <Button text={'Checkout'} styles={'primary-button'} type={'button'} onClick={()=>history.push('/checkout')}/>
           
        </div>
        
    </aside>
    
    </>
		
  )
}

export  {MyOrder}