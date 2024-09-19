import React, { useState } from 'react';
import 'flowbite';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './Search_Bar';
import logo from '../../public/assets/ddl_logo.png';

const Navbar = ({ posts, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Daily Deep Learning Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Daily Deep Learning</span>
        </a>
        <div className="flex md:order-2">
          {/* Search Bar visible on larger screens */}
          <div className="relative hidden md:block">
            <SearchBar posts={posts} onSearch={onSearch} />
          </div>
          <button 
            onClick={toggleMenu} 
            data-collapse-toggle="navbar-search" 
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-search" 
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div 
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`} 
          id="navbar-search"
        >
          {/* Collapsible menu for small screens */}
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link 
                to="/" 
                className={`block py-2 px-3 ${location.pathname === '/' ? 'text-white bg-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/all-posts" 
                className={`block py-2 px-3 ${location.pathname === '/all-posts' ? 'text-white bg-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                All Posts
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`block py-2 px-3 ${location.pathname === '/about' ? 'text-white bg-blue-700' : 'text-gray-900'} rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
              >
                About
              </Link>
            </li>
            {/* Search Bar for small screens */}
            <li className="block md:hidden">
              <SearchBar posts={posts} onSearch={onSearch} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
