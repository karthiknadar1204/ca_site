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
        <h2 className="text-2xl font-semibold mb-2">CA Ankur Gupta (Proprietor) B.Com. (H), ACA</h2>
        <p>
          Ankur Gupta is a member of the Institute of Chartered Accountants of India (ICAI) and has qualified for the Certificate Course on International Taxation (Transfer Pricing & DTAA) by ICAI. He is dedicated to learning and acquiring professional skills in the fields of Taxation, Auditing, Management, and Corporate Consultancy through practicing the profession.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Mr. Amod Kumar Gupta B.Com., C.A. (Inter.)</h2>
        <p>
          Mr. Amod Kumar Gupta has 35 years of experience in the field of accountancy. His expertise includes Taxation, Internal Audit, Accounting, Financial Services, VAT, and Sales Tax. As the Administrative Head of the firm, he handles all administrative and financial matters of our firm.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">CA Astha Gupta B.Com. (H), ACA</h2>
        <p>
          Ms. Astha Gupta is a member of the Institute of Chartered Accountants of India (ICAI) and is currently working in the corporate sector. She possesses vast experience in the consultancy of direct taxes and handling corporate affairs in various areas. Her in-depth knowledge of various fields in the corporate sector is a valuable asset to the firm.
        </p>
      </div>
    </div>
  );
};

export default TeamPage;
