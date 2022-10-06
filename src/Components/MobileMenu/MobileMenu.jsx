import React,{useState} from 'react';
import './index.css';
import { menuLinks } from '../../menuLinks';
import {Links} from '../Links/Links';
import { Menu } from '../Menu/Menu';

const MobileMenu = () => {

  const handleToogle=()=>{
   setLogout(false);
    setToggle(true)
  }

  const [toggle, setToggle] = useState(false);
  const [logout, setLogout] = useState(true);
  return (
    <div className="mobile-menu">
    <ul>
     {menuLinks.map(link=>(
        <Links 
        to={link.to}
        text={link.text}
        key={link.text}/>
     ))}
    </ul>

    <ul>
        <Links to={'/orders'} text={'My orders'} key={'My rders'}/>
        <Links to={'/account'} text={'My account'} key={'My account'}/>
     
    </ul>

    <ul>
        
      <li className="email"
      onClick={handleToogle}
      >
        platzi@example.com
      </li>
     {logout &&  <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>}
    </ul>
    {toggle && <Menu/>}
  </div>
  )
}

export {MobileMenu}