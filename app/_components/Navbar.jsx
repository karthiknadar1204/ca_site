
// const dropdownLinks = {
//   Service: [
//     { name: 'Income Tax', href: '/service/consulting' },
//     { name: 'Value Added Tax(VAT)', href: '/service/auditing' },
//     { name: 'Corporate Services', href: '/service/taxation' },
//     { name: 'Audit', href: '/service/accounting' },
//     { name: 'Corporate Finance', href: '/service/financial-planning' },
//     { name: 'Service for non residents', href: '/service/accounting' },
//     { name: 'Accounting services', href: '/service/accounting' },
//     { name: 'Payroll', href: '/service/accounting' },
//     { name: 'Benefits of Outsourcing', href: '/service/accounting' },
//     { name: 'TDS', href: '/service/accounting' },
//     { name: 'Corporate Governance', href: '/service/accounting' },
//     { name: 'Service Tax', href: '/service/accounting' }
//   ],
//   Forms: [
//     { name: 'ROC Forms(cos act 2013)', href: 'https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf' },
//     { name: 'Income Tax Forms', href: 'https://www.incometax.gov.in/iec/foportal/downloads/income-tax-forms' },
//     { name: 'ROC Forms(cos act 1956)', href: 'https://www.mca.gov.in/Ministry/pdf/eformsMapping.pdf' },
//     { name: 'Income Declaration Form', href: 'https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf' },
//     { name: 'Wealth Tax Form', href: 'https://incometaxindia.gov.in/Pages/downloads/wealth-tax-return.aspx' },
//     { name: 'ServiceTax Form', href: 'https://www.centralexcisechennai.gov.in/chennai2/Trade%20Notices/Trade%20Notices%20ST/forms-st.htm' },
//     { name: 'NBFCs Tax Form', href: 'https://advocatekhoj.com/library/legalforms/formsfor/index.php?Fno=nbfcforms.php' },
//     { name: 'LLP Winding up Form', href: 'https://www.mca.gov.in/LLP/pdf/llp_winding_up_rules_corrected.pdf' }
//   ]
// };

"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const images = ['/b1.jpg', '/b2.jpg', '/b3.jpg', '/b4.jpg'];

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
  const [openDropdown, setOpenDropdown] = useState(null);
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
    setOpenDropdown(null);
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (href) => {
    router.push(href);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const renderMobileDropdown = (category) => (
    <div key={category} className="mb-2">
      <button 
        onClick={() => toggleDropdown(category)}
        className="flex items-center justify-between w-full text-white py-2"
      >
        {category}
        <ChevronDown className={`ml-2 transform ${openDropdown === category ? 'rotate-180' : ''}`} />
      </button>
      {openDropdown === category && (
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
      <nav className="bg-black p-4 relative">
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black p-4 z-50 max-h-[80vh] overflow-y-auto">
            {links.map((link, index) => (
              <button key={index} onClick={() => handleNavigation(link.href)} className="block text-white py-2 w-full text-left">
                {link.name}
              </button>
            ))}
            {Object.keys(dropdownLinks).map(renderMobileDropdown)}
          </div>
        )}

        <div className="hidden lg:flex lg:flex-wrap justify-between items-center">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-white mx-2 hover:text-gray-300 whitespace-nowrap">
              {link.name}
            </Link>
          ))}
          {Object.entries(dropdownLinks).map(([category, items]) => (
            <div key={category} className="relative group mx-2">
              <button 
                onClick={() => toggleDropdown(category)}
                className="text-white flex items-center hover:text-gray-300 whitespace-nowrap focus:outline-none"
              >
                {category} <ChevronDown className={`ml-1 transform ${openDropdown === category ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === category && (
                <div className="absolute left-[-6rem] mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {items.map((item, index) => (
                      <Link 
                        key={index} 
                        href={item.href} 
                        target='_blank'
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" 
                        role="menuitem"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;