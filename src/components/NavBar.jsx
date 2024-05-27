// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  

<nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-7 font-bold text-xl">
    <Link to="/" class="block py-2 px-3 text-white">Home</Link>
    <Link to="/favorites" class="block py-2 px-3 text-white">Favorite</Link>
    </div>
</nav>

  );
};

export default Navbar;
