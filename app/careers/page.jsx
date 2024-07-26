// "use client"

// import React, { useState } from 'react';

// const QueryPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNo: '',
//     gender: '',
//     roleApplyingFor: '',
//     date: '',
//     highestQualification: '',
//     portfolioLink: '',
//     resume: null,
//     lastCompany: '',
//     yearsExperience: '',
//     monthsExperience: '',
//     description: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: type === 'file' ? files[0] : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto bg-white text-gray-800 border border-gray-300 rounded-lg mt-5">
//       <h1 className="text-4xl font-bold mb-6">Query</h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="mobileNo">Mobile No.</label>
//             <input
//               type="tel"
//               id="mobileNo"
//               name="mobileNo"
//               value={formData.mobileNo}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="gender">Gender</label>
//             <select
//               id="gender"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="roleApplyingFor">Role Applying For</label>
//             <input
//               type="text"
//               id="roleApplyingFor"
//               name="roleApplyingFor"
//               value={formData.roleApplyingFor}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="date">Date</label>
//             <input
//               type="date"
//               id="date"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="highestQualification">Highest Qualification</label>
//             <input
//               type="text"
//               id="highestQualification"
//               name="highestQualification"
//               value={formData.highestQualification}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="portfolioLink">Link to Portfolio Website</label>
//             <input
//               type="url"
//               id="portfolioLink"
//               name="portfolioLink"
//               value={formData.portfolioLink}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="resume">Resume</label>
//             <input
//               type="file"
//               id="resume"
//               name="resume"
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="lastCompany">Last Company Worked In</label>
//             <input
//               type="text"
//               id="lastCompany"
//               name="lastCompany"
//               value={formData.lastCompany}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="yearsExperience">Years of Experience</label>
//             <input
//               type="number"
//               id="yearsExperience"
//               name="yearsExperience"
//               value={formData.yearsExperience}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               min="0"
//             />
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2" htmlFor="monthsExperience">Months of Experience</label>
//             <input
//               type="number"
//               id="monthsExperience"
//               name="monthsExperience"
//               value={formData.monthsExperience}
//               onChange={handleChange}
//               className="w-full p-2 border border-gray-300 rounded"
//               min="0"
//               max="11"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-lg font-medium mb-2" htmlFor="description">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QueryPage;








"use client"

import React, { useState } from 'react';

const QueryPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNo: '',
    gender: '',
    roleApplyingFor: '',
    date: '',
    highestQualification: '',
    portfolioLink: '',
    resume: null,
    lastCompany: '',
    yearsExperience: '',
    monthsExperience: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataCopy = { ...formData };

    // Create FormData to handle file uploads
    const form = new FormData();
    for (const key in formDataCopy) {
      form.append(key, formDataCopy[key]);
    }

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(formDataCopy),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // Handle successful response
      } else {
        // Handle error response
        const error = await response.json();
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-white text-gray-800 border border-gray-300 rounded-lg mt-5">
      <h1 className="text-4xl font-bold mb-6">Query</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="mobileNo">Mobile No.</label>
            <input
              type="tel"
              id="mobileNo"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="roleApplyingFor">Role Applying For</label>
            <input
              type="text"
              id="roleApplyingFor"
              name="roleApplyingFor"
              value={formData.roleApplyingFor}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="highestQualification">Highest Qualification</label>
            <input
              type="text"
              id="highestQualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="portfolioLink">Link to Portfolio Website</label>
            <input
              type="url"
              id="portfolioLink"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="resume">Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="lastCompany">Last Company Worked In</label>
            <input
              type="text"
              id="lastCompany"
              name="lastCompany"
              value={formData.lastCompany}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="yearsExperience">Years of Experience</label>
            <input
              type="number"
              id="yearsExperience"
              name="yearsExperience"
              value={formData.yearsExperience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              min="0"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2" htmlFor="monthsExperience">Months of Experience</label>
            <input
              type="number"
              id="monthsExperience"
              name="monthsExperience"
              value={formData.monthsExperience}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              min="0"
              max="11"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default QueryPage;
