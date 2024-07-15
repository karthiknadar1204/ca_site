// components/Hero.js
"use client"
import React from 'react';
import Image from 'next/image'; // Assuming you have Next.js image component set up

const services = [
  'Income Tax',
  'Value Added Tax (VAT)',
  'Service Tax',
  'Corporate Services',
  'Auditing',
  'Corporate Finance',
  'Services for Non-Resident',
  'Accounting Services',
  'Payroll',
  'Benefits of Outsourcing',
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

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4 bg-gray-300 p-2">Our Services</h2>
        <ul className="list-none space-y-2">
          {services.map((service, index) => (
            <li key={index} className="text-black mb-2">{service}</li>
          ))}
        </ul>

        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 bg-gray-300 p-2">Important Utilities</h2>
            <ul className="list-none space-y-2">
              {utilities.map((utility, index) => (
                <li key={index} className="text-black mb-2">{utility}</li>
              ))}
            </ul>
          </div>
      </div>
      <div className="w-3/4 p-4">
        <div className="max-w-4xl">
          <h1 className="text-2xl font-bold bg-gray-200 text-blue-600 mb-4">Welcome to Ankur A Gupta & Associates</h1>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <Image 
                src="/image1.png" 
                alt="Image description"
                width={150} 
                height={150}  
              />
            </div>
            <div>
              <p>
                Ankur A Gupta & Associates is a Proprietorship Chartered Accountancy <br/> Firm established in the year 2012.
                We are a practicing Chartered <br/> Accountancy firm specializing in auditing, accounting, taxation, <br/> management services, corporate services etc.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p>
              Our aim is to provide real value to our clients in return for their confidence in us as their consultants.<br/>
              Being fresh in the industry, we have the zeal to excel in our service and provide the highest degree of <br/> customer satisfaction to our clients.
              We accomplish this by forming one-to-one relationships with them,<br/> listening and analyzing carefully to their specific needs, and bringing together our broad resources to <br/> address those needs.
            </p>
          </div>
          <h1 className="text-2xl font-bold bg-gray-200 text-blue-600 mt-4 mb-4">Vision</h1>
          <p className="mb-4">
            To be amongst the most respected and leading professional firms by providing quality professional service with highest standards of integrity, specialization & dedication to domestic as well as global clients.
          </p>
          <div className="flex space-x-2">
            <div className="flex-1 text-center">
              <p className="mb-2 mr-36">Accounting</p>
              <Image 
                src="/image1.png" 
                alt="Accounting Image"
                width={150} 
                height={150}  
              />
            </div>
            <div className="flex-1 text-center">
              <p className="mb-2 mr-36">Auditing</p>
              <Image 
                src="/image2.png" 
                alt="Auditing Image"
                width={150} 
                height={150}  
              />
            </div>
            <div className="flex-1 text-center">
              <p className="mb-2 mr-36">Income Tax</p>
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
    </div>
  );
};

export default Hero;
