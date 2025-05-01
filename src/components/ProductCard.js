import React from 'react';
import { useApp } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useApp();

  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition-all bg-white">
      <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
      <h2 className="text-sm font-semibold my-2">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <button
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
        className="mt-2 w-full bg-green-600 text-white py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
