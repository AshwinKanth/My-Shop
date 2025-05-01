import React from 'react';
import { FaTrash } from "react-icons/fa";
import { useApp } from '../context/AppContext';

const CartPage = () => {
  const { state, dispatch } = useApp();

  const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-8 ">
            {state.cart.map(item => (
              <li key={item.id} className="flex items-center gap-4 p-3 border">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                <div className="flex-1">
                  <p className='font-bold'>{item.title}</p>
                  <p>${item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}>+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })} className="text-gray-600"><FaTrash /></button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 font-bold text-lg">Total: ${subtotal.toFixed(2)}</div>
          <button disabled className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
