import React,{useState} from 'react';

 

const initialState={
    cart:[],
    login:[],
    categorySearch:[]
   
}

const UseInitialState = () => {
    const [state, setState] = useState(initialState);
   
 
    

    const addToCart=(payload)=>{
        setState({
            ...state,
            cart:[...state.cart,payload]
        });
    }
    
    const removeFromCart=(payload)=>{
      setState({
        ...state,
        cart:state.cart.filter(items=>items.id !== payload.id)
      })
    }

    const addToLogin=(payload)=>{
      setState({
          ...state,
          login:[...state.login,payload]
      });
  }

  const addToCategorySearch=(payload)=>{
    setState({
        ...state,
        categorySearch:[payload]
    });
}

  return {
    state,
    addToCart,
    removeFromCart,
    addToLogin,
    addToCategorySearch
  }
}

export  {UseInitialState}