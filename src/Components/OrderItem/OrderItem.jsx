import React from 'react';
import './index.css';

const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src="icon_close.png" alt="close" />
		</div>
  )
}

export { OrderItem}