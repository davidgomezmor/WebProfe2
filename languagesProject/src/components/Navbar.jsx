import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <button
            className="sm:hidden text-gray-800 hover:text-gray-600 focus:outline-none"
            onClick={menu}
            aria-label="menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          <Link to="/" className="text-2xl font-bold text-gray-800">

          </Link>
          <ul className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
            <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/"
                className="block text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                Home
              </Link>
            </li>
            <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/courses"
                className="block text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                Courses
              </Link>
            </li>
            <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/about"
                className="block text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                About me
              </Link>
            </li>
            <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/contact"
                className="block text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul>
          <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/login"
                className="flex items-center text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                <FaUserAlt size={24} className="mr-2" />
                Log In
              </Link>
            </li>
            <li className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                to="/register"
                className="flex items-center text-gray-800 hover:text-gray-600 font-medium tracking-wide"
              >
                <FaUserAlt size={24} className="mr-2" />
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
