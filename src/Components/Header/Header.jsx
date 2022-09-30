import React from 'react';
import Links from '../Links/Links';
import { Logo } from '../Logo/Logo';
import './index.css';

const Header = () => {
  return (
    <nav>
    <img src="icon_menu.svg" alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src="logo_yard_sale.svg" alt="logo" className="logo"/>

      <ul>
        <Links to={'/'} text={'All'}/>
        <Links to={'/'} text={'Clotes'}/>
        <Links to={'/'} text={'Electronics'}/>
        <Links to={'/'} text={'Furnitures'}/>
        <Links to={'/'} text={'Toys'}/>
        <Links to={'/'} text={'Others'}/>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li className="navbar-email">platzi@example.com</li>
        <Logo text={2} background={false}/>
      </ul>
    </div>
  </nav>
    
  )
}

export { Header}