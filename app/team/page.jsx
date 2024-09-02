"use client";
import React from 'react';

const TeamPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="mb-6">
        Our dedicated team comprises competent individuals with extensive knowledge and experience. Our professionalism and expertise help us service our clients to their satisfaction. Some of the key members of our firm are:
      </p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">CA SK Verma</h2>
        <p className="mb-4">
          He is Founder of MDS & associates and Professional in the fields of Taxation, Auditing, Management, and Corporate Consultancy through practicing the profession.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">CA Akhilesh</h2>
        <p className="mb-4">
          He possesses vast experience in the consultancy of direct taxes and handling corporate affairs in various areas. His in-depth knowledge of various fields in the corporate sector is a valuable asset to the firm.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">CA MD Singh</h2>
        <p className="mb-4">
          His expertise includes Taxation, Internal Audit, Accounting, Financial Services, VAT, and Sales Tax. As the Administrative Head of the firm, he handles all administrative and financial matters of our firm.
        </p>
      </div>
    </div>
  );
};

export default TeamPage;
