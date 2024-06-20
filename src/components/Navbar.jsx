import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg fixed w-full px-6 py-4 z-20 bg-yellow-800 bg-opacity-80 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <p className="text-xl font-bold text-yellow-300">Coffee Shop</p>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Home</p>
            </Link>
            <Link href="/menu">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Menu</p>
            </Link>
            <Link href="/about">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Contact</p>
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-100 hover:text-yellow-500 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
            <Link href="/">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Home</p>
            </Link>
            <Link href="/menu">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Menu</p>
            </Link>
            <Link href="/about">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Contact</p>
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
