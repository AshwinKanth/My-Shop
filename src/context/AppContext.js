import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      };

    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
