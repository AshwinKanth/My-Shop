import React from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white p-5">
      <Link to="/" className="text-xl font-bold">🛍 MyShop</Link>
      <nav className="flex gap-4 items-center">
        <Link to="/products">Products</Link>
        <MiniCart />
      </nav>
    </header>
  );
};

export default Header;
