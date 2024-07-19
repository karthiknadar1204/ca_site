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
import { ChevronDown } from 'lucide-react';

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
  { name: 'careers', href: '/careers' }
];

const dropdownLinks = {
  Service: [
    { name: 'Consulting', href: '/service/consulting' },
    { name: 'Auditing', href: '/service/auditing' },
    { name: 'Taxation', href: '/service/taxation' },
    { name: 'Accounting', href: '/service/accounting' },
    { name: 'Financial Planning', href: '/service/financial-planning' }
  ],
  Links: [
    { name: 'Resources', href: '/links/resources' },
    { name: 'Partners', href: '/links/partners' },
    { name: 'Blog', href: '/links/blog' },
    { name: 'News', href: '/links/news' },
    { name: 'Events', href: '/links/events' }
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
            <div className="text-2xl lg:text-4xl font-semibold text-blue-700">Ankur A Gupta and Associates</div>
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
      <div className="bg-black p-4 flex justify-between flex-wrap items-center">
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
  );
};

export default Navbar;
