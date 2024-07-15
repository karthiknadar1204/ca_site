// components/Navbar.js
"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/image1.png', 
  '/image2.png', 
  '/image3.png'
  // Add paths to your images here
];

const links = [
  'Home', 'Team', 'About Us', 'Service', 'Calculators', 
  'Bulletin', 'Utilities', 'Links', 'Acts', 'Rules', 
  'Forms', 'Query', 'Career', 'Admins', 'Contact Us'
];

const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col items-start justify-start p-4 bg-white text-black">
        <div className="flex items-center">
          <div className="text-6xl font-bold mr-4">CA</div>
          <div>
            <div className="text-2xl lg:text-4xl font-semibold text-blue-700">Ankuer A Gupta and Associates</div>
            <div className="text-xl lg:text-2xl font-medium ml-28 mt-4">Chartered Accountants</div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={image}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="bg-black p-4 flex justify-between flex-wrap">
        {links.map((link, index) => (
          <a key={index} href={`#${link.toLowerCase().replace(/ /g, '')}`} className="text-white mx-2">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
