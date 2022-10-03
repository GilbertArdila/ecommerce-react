import React from 'react';
import './index.css';
import {ProductInfo} from '../../Components'

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src="icon_close.png" alt="close" />
			</div>
			<ProductInfo />
		</aside>
  )
}

export  {ProductDetail}