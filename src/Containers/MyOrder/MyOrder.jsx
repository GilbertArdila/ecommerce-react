import React,{useContext} from 'react';
import { AppContext } from '../../Context/AppContext';
import './index.css';
import {OrderItem} from '../../Components'

const MyOrder = ({setToggleOrders}) => {
 const {state}=useContext(AppContext);

 const handleToggle=()=>{
    setToggleOrders(false)
 }

 const finalPrice=state.cart.reduce((sum,item)=>sum+parseInt(item.price),0)
 
  return (
    
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
            <button className="primary-button">
                Checkout
            </button>
        </div>
    </aside>
  )
}

export  {MyOrder}