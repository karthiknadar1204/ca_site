"use client";
import React, { useState } from 'react';

const QueryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    phoneNumber: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white text-gray-800 border-2 border-black rounded-lg mt-5">
      <h1 className="text-4xl font-bold mb-6">Query</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="emailAddress">Email Address</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
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
            required
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
