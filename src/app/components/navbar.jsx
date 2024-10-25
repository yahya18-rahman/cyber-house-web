"use client"

import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Logo from '../../assets/logo.png'

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);
  
    const handleMouseEnter = () => {
      clearTimeout(timeoutRef.current); // Hentikan timeout jika ada
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 500); // Jeda 2 detik
    };
  

  return (
    <nav className="w-full text-[#1a2434] flex font-semibold py-4 bg-[#F9FCFF]">
        <Image alt='logo' src={Logo} className='mx-[80px]' />
      <div className="max-w-6xl flex items-center justify-center gap-[48px]">
        <div >
        <a className='text-[20px]' >About Us</a>
        </div>

        <div
      className="relative text-[20px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center transition-colors">
        Our Class 
        <ChevronDown
          className={`ml-1 w-4 h-4 transition-transform ${isHovered ? 'rotate-180' : ''}`}
        />
      </button>

      {isHovered && (
        <div
          className="absolute bg-white shadow-md mt-2 p-2 rounded z-10 w-[200px] "
          onMouseEnter={handleMouseEnter} // Tetap aktif saat hover di div
          onMouseLeave={handleMouseLeave} // Aktifkan timeout saat mouse keluar dari div
        >
          <ul className='' >
           <li className="transition-colors hover:text-yellow-500">Free Class</li>
            <li className="transition-colors hover:text-yellow-500">Paid Class</li>
            <li className="transition-colors hover:text-yellow-500">Mini Course</li>
          </ul>
        </div>
      )}
    </div>

       <div>
       <a className='text-[20px]'>Blog</a>
       </div>

        <div>
        <a className='text-[20px]'>Contact</a>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;