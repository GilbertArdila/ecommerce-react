import React,{useContext,useEffect} from 'react';
import { Header } from '../../Components';
import {ProductList} from '../../Containers';
import { AppContext } from '../../Context/AppContext';

const Home = () => {
  const {state}=useContext(AppContext);
  const{cart,login}=state;
  console.log(cart)
  

  useEffect(() => {
   console.log(login)
  }, [])
  
  return (
    <>
     <Header  />
     <ProductList/>
    </>
   
    
      
    
  )
}

export  {Home}