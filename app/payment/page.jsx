import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900">Payment Details</h1>
      </div>
    </header>
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-2xl mx-auto">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex justify-center mb-6">
            <div className="w-64 h-64 relative">
              <Image
                src="/qr_code_2.png"
                alt="QR Code"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Account Name</dt>
              <dd className="mt-1 text-sm text-gray-900">MDS & ASSOCIATES</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Bank Name</dt>
              <dd className="mt-1 text-sm text-gray-900">INDIAN OVERSEAS BANK</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">IFS CODE</dt>
              <dd className="mt-1 text-sm text-gray-900">IOBA0003233</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Branch</dt>
              <dd className="mt-1 text-sm text-gray-900">LAL BANGLA</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Account Type</dt>
              <dd className="mt-1 text-sm text-gray-900">CURRENT</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">A/C No</dt>
              <dd className="mt-1 text-sm text-gray-900">323302000000136</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  </div>
  )
}

export default page