"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from 'lucide-react';

const images = [
  '/b1.jpg', 
  '/b2.jpg', 
  '/b3.jpg',
  '/b4.jpg'
];

const links = [
  { name: 'Home', href: '/' }, 
  { name: 'Team', href: '/team' }, 
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Query', href: '/query' },
  { name: 'Careers', href: '/careers' }
];

const dropdownLinks = {
  Service: [
    { name: 'Income Tax', href: '/service/consulting' },
    { name: 'Value Added Tax(VAT)', href: '/service/auditing' },
    { name: 'Corporate Services', href: '/service/taxation' },
    { name: 'Audit', href: '/service/accounting' },
    { name: 'Corporate Finance', href: '/service/financial-planning' },
    { name: 'Service for non residents', href: '/service/accounting' },
    { name: 'Accounting services', href: '/service/accounting' },
    { name: 'Payroll', href: '/service/accounting' },
    { name: 'Benefits of Outsourcing', href: '/service/accounting' },
    { name: 'TDS', href: '/service/accounting' },
    { name: 'Corporate Governance', href: '/service/accounting' },
    { name: 'Service Tax', href: '/service/accounting' }
  ],
  Links: [
    { name: 'Quick Links', href: '/links/resources' },
    { name: 'Important Links', href: '/links/partners' },
    { name: 'GST/VAT links', href: '/links/blog' },
    { name: 'Ease of Doing Business', href: '/links/news' }
  ],
  Rules: [
    { name: 'Compliance', href: '/rules/compliance' },
    { name: 'Regulations', href: '/rules/regulations' },
    { name: 'Standards', href: '/rules/standards' },
    { name: 'Guidelines', href: '/rules/guidelines' },
    { name: 'Policies', href: '/rules/policies' }
  ],
  Forms: [
    { name: 'Contact Form', href: '/forms/contact' },
    { name: 'Feedback Form', href: '/forms/feedback' },
    { name: 'Application Form', href: '/forms/application' },
    { name: 'Registration Form', href: '/forms/registration' },
    { name: 'Survey Form', href: '/forms/survey' }
  ]
};

const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (category) => {
    setOpenDropdowns(prev => ({...prev, [category]: !prev[category]}));
  };

  const renderMobileDropdown = (category) => (
    <div key={category} className="mb-2">
      <button 
        onClick={() => toggleDropdown(category)} 
        className="flex items-center justify-between w-full text-white py-2"
      >
        {category}
        <ChevronDown className={`ml-2 transform ${openDropdowns[category] ? 'rotate-180' : ''}`} />
      </button>
      {openDropdowns[category] && (
        <div className="pl-4">
          {dropdownLinks[category].map((item, index) => (
            <Link key={index} href={item.href} className="block py-1 text-white">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full relative">
      <div className="flex flex-col items-start justify-start p-4 bg-white text-black">
        <div className="flex items-center">
          <div className="text-6xl font-bold mr-4">CA</div>
          <div className="flex flex-col">
            <div className="text-2xl lg:text-4xl font-semibold">
              <span className="block lg:inline-block text-blue-700">Ankur A Gupta and Associates</span>
              <span className="block lg:inline-block ml-4 lg:ml-0 mt-2 lg:mt-0 text-black">Chartered Accountants</span>
            </div>
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
      <div className="bg-black p-4 relative">
        {/* Hamburger menu for small and medium screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black p-4 z-50">
            {links.map((link, index) => (
              <Link key={index} href={link.href} className="block text-white py-2">
                {link.name}
              </Link>
            ))}
            {Object.keys(dropdownLinks).map(renderMobileDropdown)}
          </div>
        )}

        {/* Regular menu for large screens */}
        <div className="hidden lg:flex justify-between flex-wrap items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white mx-2 hover:text-gray-300">
                {link.name}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white mx-2 flex items-center hover:text-gray-300">
              Service <ChevronDown className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Service</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownLinks.Service.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white mx-2 flex items-center hover:text-gray-300">
              Links <ChevronDown className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Links</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownLinks.Links.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white mx-2 flex items-center hover:text-gray-300">
              Rules <ChevronDown className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Rules</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownLinks.Rules.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-white mx-2 flex items-center hover:text-gray-300">
              Forms <ChevronDown className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Forms</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {dropdownLinks.Forms.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href}>{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
