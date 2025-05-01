import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const MiniCart = () => {
  const [open, setOpen] = useState(false);
  const { state } = useApp();

  const subtotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>🛒 ({state.cart.length})</button>
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white text-black shadow p-4 z-50">
          <h3 className="font-semibold mb-2">Mini Cart</h3>
          {state.cart.length === 0 ? (
            <p className="text-sm text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <ul className="max-h-48 overflow-y-auto">
                {state.cart.map(item => (
                  <>
                  <li key={item.id} className="flex gap-2 text-sm mb-2">
                    <img src={item.image} alt={item.title} className="w-10 h-10 object-contain" />
                    <div>
                      <p>{item.title}</p>
                      <p>{item.quantity} x ${item.price.toFixed(2)}</p>
                    </div>
                  </li>
                  <hr className='border-gray-800 border-solid p-2'/>
                  </>
                ))}
              </ul>
              <div className="mt-2 font-bold">Subtotal: ${subtotal.toFixed(2)}</div>
              <Link to="/cart" className="block mt-2 bg-blue-600 text-white text-center rounded py-1">
                View Cart
              </Link>
              <button disabled className="block w-full mt-1 bg-gray-400 text-white py-1 rounded">
                Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
