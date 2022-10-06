import React from 'react';
import './index.css';
import { Links } from '../Links/Links';

const Menu = () => {
  return (
    <div className="Menu">
			<ul>
			{menuLinks.map(link=> <Links 
			to={link.to} 
			text={link.text} 
			key={link.text}
			className={`${link.class}`}/>)}
			</ul>
		</div>
  )
}
const menuLinks=[];
menuLinks.push({
  to:'/orders',
  text:'My Orders',
  class:'title'
});
menuLinks.push({
	to:'/account',
	text:'My account',
	class:''
  });
  menuLinks.push({
	to:'/',
	text:'Sign out',
	class:''
  });


export  {Menu}