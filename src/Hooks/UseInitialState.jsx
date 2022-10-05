import React,{useState} from 'react';

const initialState={
    cart:[]
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

  return {
    state,
    addToCart,
    removeFromCart
  }
}

export  {UseInitialState}