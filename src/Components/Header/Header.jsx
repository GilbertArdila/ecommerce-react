import React, { useState,useContext} from 'react';
import { AppContext } from '../../Context/AppContext';
import { Links } from '../Links/Links'
import { Menu } from '../Menu/Menu';
import {MyOrder} from '../../Containers';
import loginImage from '../../../public/login.webp';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { menuLinks } from '../../menuLinks';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const{state}=useContext(AppContext);
  const history=useHistory();

 
	
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const[toggleMobileMenu,setToggleMobileMenu]=useState(false)
	

	const handleToggle=()=>{
		setToggle(!toggle)
	};

  return (
    <nav>
			<img src="icon_menu.svg" alt="menu" className="menu" onClick={()=>setToggleMobileMenu(!toggleMobileMenu)} />
			<div className="navbar-left">
				<img src="logo_yard_sale.svg" alt="logo" className="logo" />
				<ul>
					{menuLinks.map(link=><Links to={link.to} text={link.text} search={link.search} key={link.text}/>)}
					
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
				    
					{state.login.length> 0 ? <li className="navbar-email" 
					onClick={handleToggle}>{state.login[0].userMail}</li>:<li 
					onClick={()=>history.push('/login')}><img 
					className='navbar-login-image'
					src={loginImage} alt='login'/></li>
}
					

					<li className="navbar-shopping-cart" onClick={()=>setToggleOrders(!toggleOrders)}>
						<img src="icon_shopping_cart.svg" alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div>  : null }
					</li>
				</ul>
			</div>
			{toggle && <Menu/>}
			{toggleOrders && <MyOrder setToggleOrders={setToggleOrders}/>}
			{toggleMobileMenu && <MobileMenu />}
		</nav>
  )
}

export { Header}