import React, { useState,useContext } from 'react'
import { Links } from '../Links/Links'
import { Menu } from '../Menu/Menu';
import { AppContext } from '../../Context/AppContext';
import {MyOrder} from '../../Containers';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const {state}=useContext(AppContext);

	const handleToggle=()=>{
		setToggle(!toggle)
	};

  return (
    <nav>
			<img src="icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					{menuLinks.map(link=><Links to={link.to} text={link.text} key={link.text}/>)}
					
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" 
					onClick={handleToggle}>platzi@example.com</li>
					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src="icon_shopping_cart.svg" alt="shopping cart" />
						{state.cart.length> 0 ? <div>{state.cart.length}</div>  : null }
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrders && <MyOrder/>}
		</nav>
  )
}
const menuLinks=[];
menuLinks.push({
	to:'/',
	text:'All'
});
menuLinks.push({
	to:'/',
	text:'Clotes'
});
menuLinks.push({
	to:'/',
	text:'Electronics'
});
menuLinks.push({
	to:'/',
	text:'Fornitures'
});
menuLinks.push({
	to:'/',
	text:'Toys'
});
menuLinks.push({
	to:'/',
	text:'Others'
});
export { Header}