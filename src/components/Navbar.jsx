import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-lg fixed w-full px-6 py-4 z-20 bg-yellow-800 bg-opacity-80 top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <ScrollLink to="home" smooth={true} duration={500}>
              <p className="text-xl font-bold text-yellow-300 cursor-pointer">Coffee Shop</p>
            </ScrollLink>
          </div>
          <div className="hidden md:flex space-x-4">
            <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Home</p>
            </ScrollLink>
            <ScrollLink to="aboutUs" smooth={true} duration={500} className="cursor-pointer">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">About Us</p>
            </ScrollLink>
            <ScrollLink to="menu" smooth={true} duration={500} className="cursor-pointer">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Our Menu</p>
            </ScrollLink>
            <ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Testimonials</p>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">
              <p className="text-white hover:text-gray-400 font-bold transition duration-300">Contact</p>
            </ScrollLink>
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
              <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <p className="text-white hover:text-gray-400 font-bold transition duration-300">Home</p>
              </ScrollLink>
              <ScrollLink to="aboutUs" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <p className="text-white hover:text-gray-400 font-bold transition duration-300">About Us</p>
              </ScrollLink>
              <ScrollLink to="menu" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <p className="text-white hover:text-gray-400 font-bold transition duration-300">Our Menu</p>
              </ScrollLink>
              <ScrollLink to="testimonials" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <p className="text-white hover:text-gray-400 font-bold transition duration-300">Testimonials</p>
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <p className="text-white hover:text-gray-400 font-bold transition duration-300">Contact</p>
              </ScrollLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
