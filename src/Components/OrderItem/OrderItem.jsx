import React,{useContext} from 'react';
import { AppContext } from '../../Context/AppContext';
import './index.css';

const OrderItem = ({product}) => {
 
	const {removeFromCart}=useContext(AppContext);

	const handleRemove=(product)=>{
		removeFromCart(product)
	}

  return (
    <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="icon_close.png" alt="close" onClick={()=>handleRemove(product)} />
		</div>
  )
}

export { OrderItem}