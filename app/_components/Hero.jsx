"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const services = [
  'Income Tax',
  'Value Added Tax (VAT)',
  'Service Tax',
  'Corporate Services',
  'Auditing',
  'Corporate Finance',
  'Services for Non-Resident',
  'Accounting Services',
  'TDS',
  'Corporate Governance'
];

const utilities = [
  'PAN Search',
  'TAN Search',
  'Currency Converter',
  'Online Payment of Taxes',
  'Income Tax Refund Status',
  'Challan Status Enquiry',
  'e-filing',
  'MCA21(ROC)',
  'Important Dates'
];

const whatsNew = [
  '17/05/2024: IT firms\' work for international clients may not always attract IGST',
  '17/05/2024: RBI warns NBFCs a mode they use for giving loans may bring grief',
  '17/05/2024: Franklin Templeton Mutual Fund files draft document with Sebi for a multicap fund',
  '16/05/2024: Big relief for mutual fund investors: Sebi eases Aadhaar-PAN KYC rules',
  '15/05/2024: Quant Mutual Fund gets RBI nod to increase stake up to 9.98% in RBL Bank',
  '14/05/2024: Domestically held gold reserve rise by 40% in 5 years, shows RBI data',
  '14/05/2024: Sebi tells investment advisors to share social media details twice a year',
  '14/05/2024: SC issues notice to Centre over petition on imposition of GST on JDA',
  '14/05/2024: RBI\'s investment in IIFC UK subsidiary fell by a fifth in FY23-24',
  '14/05/2024: RBI Monetary Policy: Indias sticky inflation gives RBI reason to stay on hold',
  '13/05/2024: GST on corporate guarantees: SC to offer clarity, say officials',
  '10/05/2024: Five mutual fund houses files draft offer documents with Sebi',
  '09/05/2024: RBI asks NBFCs not to lend more than Rs 20,000 in cash for gold loan',
  '08/05/2024: Govt evaluating RBI proposal for higher infrastructure provisioning; bankers, NBFCs voice concern',
  '08/05/2024: Indian lenders to appeal RBI\'s tough project finance proposal, sources say',
  '07/05/2024: Major GST relief for holding companies in corporate guarantees case',
  '06/05/2024: GST helped states earn 24% more than the old regime: FM Sitharaman',
  '06/05/2024: Kotak Bank shares jump 4% as Q4 beat makes investors overlook angry RBI to upgrade stock',
  '06/05/2024: Kotak MD, CEO Ashok Vaswani guides for a hit of up to ?400 cr from RBI curbs',
  '04/05/2024: RBI proposes floor for banks\' loan exposure for project finance',
  '04/05/2024: Mixed impact on Adani group stocks after Sebi alleges non-compliance',
  '04/05/2024: RBI proposes tighter project finance rules',
  '03/05/2024: Manpasand Beverages scam: How Sebi exposed the Rs 40-crore GST fraud.',
  '03/05/2024: Income tax calendar for May 2024: Check out full list of deadlines',
  '03/05/2024: RBI recovers 98% of Rs 2,000 notes; exchange facilities remain open',
  '03/05/2024: GST National Coordination meeting on Friday may discuss tightening noose on fake registrations',
];

const Hero = () => {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollInterval;

    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
          scrollContainer.scrollTop = 0;
        } else {
          scrollContainer.scrollTop += 1;
        }
      }, 50);
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // const handleLoginClick = () => {
  //   router.push('/login');
  // };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4 bg-gray-300 p-2">Our Services</h2>
        <ul className="list-none">
          {services.map((service, index) => (
            <li 
              key={index} 
              className="text-black mb-1 hover:bg-gray-300 p-2 rounded transition-colors duration-200"
            >
              {service}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4 bg-gray-300 p-2">Important Utilities</h2>
          <ul className="list-none">
            {utilities.map((utility, index) => (
              <li 
                key={index} 
                className="text-black mb-1 hover:bg-gray-300 p-2 rounded transition-colors duration-200"
              >
                {utility}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-2/4 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl lg:text-3xl font-bold bg-gray-200 text-blue-600 p-2 mb-4">Welcome to Ankur A Gupta & Associates</h1>
          <div className="flex flex-col lg:flex-row items-center mb-4">
            <div className="mb-4 lg:mb-0 lg:mr-4">
              <Image 
                src="/image1.png" 
                alt="Image description"
                width={150} 
                height={150}  
              />
            </div>
            <div>
              <p className='text-lg lg:text-xl'>
                Ankur A Gupta & Associates is a Proprietorship Chartered Accountancy <br/> Firm established in the year 2012.
                We are a practicing Chartered <br/> Accountancy firm specializing in auditing, accounting, taxation, <br/> management services, corporate services etc.
              </p>
            </div>
          </div>
          <div className="mt-8 text-lg lg:text-xl">
            <p>
              Our aim is to provide real value to our clients in return for their confidence in us as their consultants.<br/>
              Being fresh in the industry, we have the zeal to excel in our service and provide the highest degree of <br/> customer satisfaction to our clients.
              We accomplish this by forming one-to-one relationships with them,<br/> listening and analyzing carefully to their specific needs, and bringing together our broad resources to <br/> address those needs.
            </p>
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-bold bg-gray-200 text-blue-600 mt-12 p-2 mb-4">Vision</h1>
          <p className="mb-4 text-lg lg:text-xl">
            To be amongst the most respected and leading professional firms by providing quality professional service with highest standards of integrity, specialization & dedication to domestic as well as global clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <p className="mb-2 text-lg font-semibold">Accounting</p>
              <Image 
                src="/image1.png" 
                alt="Accounting Image"
                width={150} 
                height={150}  
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 text-lg font-semibold">Auditing</p>
              <Image 
                src="/image2.png" 
                alt="Auditing Image"
                width={150} 
                height={150}  
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2 text-lg font-semibold">Income Tax</p>
              <Image 
                src="/image3.png" 
                alt="Income Tax Image"
                width={150} 
                height={150}  
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/4 bg-white p-4 border-l border-gray-300">
        <h2 className="text-xl font-bold mb-4 bg-gray-300 p-2">What's New</h2>
        <div
          className="overflow-auto h-96"
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {whatsNew.map((item, index) => (
            <div key={index} className="py-2 px-4 border-b border-gray-200">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Enter your username" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                className="w-full border border-gray-300 rounded px-3 py-2" 
                placeholder="Enter your password" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              // onClick={handleLoginClick}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;