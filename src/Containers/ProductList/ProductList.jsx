import './index.css';
import {ProductItem} from '../../Components';
import {API} from '../../API/API';
import { useGetProducts } from '../../Hooks';

const ProductList = () => {
    const products=useGetProducts(API)
	
  return (
    
		<section className="main-container">
			<div className="ProductList">
				{!products.lenght && products.map(product=>(
					<ProductItem  
					key={product.id}
					product={product}
					/>
				))}
			</div>
		</section>
	
  )
}

export  {ProductList}