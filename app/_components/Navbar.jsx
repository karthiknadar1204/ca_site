"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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
  { name: 'Careers', href: '/careers' },
  { name: 'Terms & Conditions', href: 'https://drive.google.com/file/d/1V9qeLNg5pDG6m0VLyWNi4sWpEjnIKETs/view' },
  { name: 'Payment', href: '/payment' }
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
  Forms: [
    { name: 'ROC Forms(cos act 2013)', href: 'https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf' },
    { name: 'Income Tax Forms', href: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms' },
    { name: 'ROC Forms(cos act 1956)', href: 'https://www.mca.gov.in/Ministry/pdf/eformsMapping.pdf' },
    { name: 'Income Declaration Form', href: 'https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf' },
    { name: 'Wealth Tax Form', href: 'https://incometaxindia.gov.in/Pages/downloads/wealth-tax-return.aspx' },
    { name: 'ServiceTax Form', href: 'https://www.centralexcisechennai.gov.in/chennai2/Trade%20Notices/Trade%20Notices%20ST/forms-st.htm' },
    { name: 'NBFCs Tax Form', href: 'https://advocatekhoj.com/library/legalforms/formsfor/index.php?Fno=nbfcforms.php' },
    { name: 'LLP Winding up Form', href: 'https://www.mca.gov.in/LLP/pdf/llp_winding_up_rules_corrected.pdf' }
  ]
};

const Navbar = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (category) => {
    setOpenDropdowns(prev => ({...prev, [category]: !prev[category]}));
  };

  const handleNavigation = (href) => {
    router.push(href);
    setIsMenuOpen(false);
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
            <button key={index} onClick={() => handleNavigation(item.href)} className="block py-1 text-white w-full text-left">
              {item.name}
            </button>
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
              <span className="block lg:inline-block text-blue-700">MDS Associates</span>
              <span className="block lg:inline-block ml-4 lg:ml-[4rem] mt-2 lg:mt-0 text-black">Chartered Accountants</span>
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
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black p-4 z-50">
            {links.map((link, index) => (
              <button key={index} onClick={() => handleNavigation(link.href)} className="block text-white py-2 w-full text-left">
                {link.name}
              </button>
            ))}
            {Object.keys(dropdownLinks).map(renderMobileDropdown)}
          </div>
        )}

        <div className="hidden lg:flex justify-between flex-wrap items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white mx-2 hover:text-gray-300">
              {link.name}
            </Link>
          ))}
          {Object.entries(dropdownLinks).map(([category, items]) => (
            <DropdownMenu key={category}>
              <DropdownMenuTrigger className="text-white mx-2 flex items-center hover:text-gray-300">
                {category} <ChevronDown className="ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{category}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {items.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <Link href={item.href} target='_blank'>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;