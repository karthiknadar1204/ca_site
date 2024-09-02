import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start p-6 lg:p-12 bg-gray-100 mt-5">
      <div className="flex-shrink-0 lg:w-1/2 mb-6 lg:mb-0 lg:ml-6 relative">
        <Image 
          src="/Contactus.jpg" 
          alt="Contact Us"
          width={500}
          height={300} 
          className="object-cover rounded-lg"
        />
      </div>
      <div className="lg:w-1/2 lg:ml-12 text-center lg:text-left">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <h2 className="text-2xl font-semibold mb-2">MDS Associates</h2>
        <p className="text-lg mb-2">Chartered Accountants</p>
        <p className="text-lg mb-2"><strong>Cell:</strong>+91 9889222218</p>
        <p className="text-lg mb-2"><strong>Email IDs:</strong> caskverma@mdsassociate.in</p>
      </div>
    </div>
  );
};

export default ContactUs;
