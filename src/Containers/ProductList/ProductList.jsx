import { useState,useRef } from 'react';
import {ProductItem} from '../../Components';
import {API} from '../../API/API';
import { useGetProducts } from '../../Hooks';
import { Loader } from '../../Components/Loader/Loader';
import { Searcher } from '../../Components/Searcher/Searcher';
import './index.css';


const ProductList = () => {
    const products=useGetProducts(API)
	const [search, setSearch] = useState('');
	const searchInput=useRef(null);

	const handleSearch=()=>{
		setSearch(searchInput.current.value)
	}
	const filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(search.toLowerCase());
	  });
	
  return (
    
		<section className="main-container">
			<Searcher 
				handleSearch={handleSearch}
				search={search}
				searchInput={searchInput}/>
			<div className="ProductList">
				
				{products.length===0 &&
				 <><Loader/>
				<Loader/>
				<Loader/>
				<Loader/></>}
				{!products.lenght && filteredProducts.map(product=>(
					product.images[0]!=='' &&
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