import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Navbar() {
  // State to track if the menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex justify-between items-center p-4 shadow-sm bg-white sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-brand-dark border-2 border-brand-accent overflow-hidden relative">
          <img src={logo} alt="Heritreats Logo" className="w-full h-full object-cover z-10 relative" onError={(e) => e.target.style.display='none'} />
          <span className="absolute z-0">LOGO</span>
        </div>
      </div>

      {/* Hamburger / Close Button */}
      <button onClick={toggleMenu} className="z-50 relative p-2">
        {isOpen ? (
          <X className="w-8 h-8 text-brand-dark" />
        ) : (
          <Menu className="w-8 h-8 text-brand-dark" />
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col items-center py-8 gap-6 text-brand-dark font-bold text-lg animate-in slide-in-from-top-2 duration-200">
          <a href="#values" onClick={toggleMenu} className="hover:text-brand-accent transition-colors w-full text-center">About</a>
          <a href="#community" onClick={toggleMenu} className="hover:text-brand-accent transition-colors w-full text-center">Community</a>
          <a href="#team" onClick={toggleMenu} className="hover:text-brand-accent transition-colors w-full text-center">Team</a>
          <a href="#apply" onClick={toggleMenu} className="hover:text-brand-accent transition-colors w-full text-center">Apply Now</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-brand-accent transition-colors w-full text-center">Contacts</a>
        </div>
      )}
      
    </nav>
  );
}