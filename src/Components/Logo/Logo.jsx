import React from 'react';
import './index.css';

const Logo = ({ text, background = true }) => {
    return (
        <>
            {background &&
                <li className="navbar-shopping-cart" style={{ backgroundColor: '#ACD9B2', borderRadius: '50%' }} >
                    <img src="./icon_shopping_cart.svg" alt="shopping cart" />

                    <div>{text}</div>
                </li>
            }
             {!background&&<li className="navbar-shopping-cart"  >
                    <img src="./icon_shopping_cart.svg" alt="shopping cart" />

                    <div>{text}</div>
                </li>}
        </>


    )
}

export { Logo }