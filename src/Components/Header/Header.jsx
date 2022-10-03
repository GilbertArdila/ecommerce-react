import React from 'react'
import { Links } from '../Links/Links'

const Header = () => {
  return (
    <nav>
			<img src="./icons/icon_menu.svg" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					{menuLinks.map(link=><Links to={link.to} text={link.text} key={link.text}/>)}
					
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">platzi@example.com</li>
					<li className="navbar-shopping-cart">
						<img src="icon_shopping_cart.svg" alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
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