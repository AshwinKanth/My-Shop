import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="h-screen flex flex-col md:flex-row items-center justify-center text-center bg-[url(https://res.cloudinary.com/dq1ktqbtb/image/upload/v1746096053/7990_kaeyim.jpg)] p-6">
    <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1746100434/ChatGPT_Image_May_1_2025_05_23_42_PM_d7bw59.png" alt="" className='w-96 rounded-xl shadow-xl/30 w-lg' />
    <div className='p-6'>
      <h1 className="font-bold mb-4 text-sky-700 font-serif text-shadow-lg/30 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Welcome to My Shop</h1>
      <p className="text-gray-600 mb-6">Browse our exclusive collection of products</p>
      <Link to="/products" className="bg-blue-600 text-white px-4 py-2 rounded">
        Shop Now
      </Link>
    </div>
  </div>
);

export default Home;
