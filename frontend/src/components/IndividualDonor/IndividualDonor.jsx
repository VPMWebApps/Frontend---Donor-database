import React, { useState } from 'react';

const donors = [
  { name: 'ROHAN SHARMA', phone: '8899086578', email: 'rohansharm9667@gmail.com', whatsapp: '8899086578' },
  { name: 'ANAND SHAH', phone: '9999087559', email: 'SHAH_anand7@gmail.com', whatsapp: '9699087559' },
  { name: 'ROHINI SINGH', phone: '6699087899', email: 'ruhisingh7@gmail.com', whatsapp: '6699087899' },
  { name: 'SAM JOHNSON', phone: '6888568489', email: 'john_sam90@gmail.com', whatsapp: '6888568489' },
  { name: 'ADARSH SHAH', phone: '6888568489', email: 'ADI_shah@gmail.com', whatsapp: '6888568489' },
  { name: 'RAVI SHARMA', phone: '6888568489', email: 'itz_sharmaravi18@gmail.com', whatsapp: '6888568489' },
];

const IndividualDonor = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedDonors = [...donors].sort((a, b) => {
    if (sortOrder === 'newest') return -1;
    if (sortOrder === 'oldest') return 1;
    return 0;
  });

  const filteredDonors = sortedDonors.filter((donor) =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold mb-4 tracking-tight">INDIVIDUAL DONOR</h1>
        <button className="px-4 py-2 rounded-md bg-purple-600 text-white cursor-pointer ">
          Add donor
        </button>

      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search donor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2"
        />
        <div className="flex gap-2">
          <button
            onClick={() => setSortOrder('newest')}
            className={`px-4 py-2 rounded-md ${sortOrder === 'newest' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortOrder('oldest')}
            className={`px-4 py-2 rounded-md ${sortOrder === 'oldest' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'}`}
          >
            Oldest
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredDonors.map((donor, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="text-lg font-semibold">{index + 1}. {donor.name}</div>
              <div className="text-sm text-gray-600 mt-1 md:mt-0">Phone: {donor.phone}</div>
            </div>
            <div className="text-sm text-gray-600 mt-1">Email: {donor.email}</div>
            <div className="text-sm text-gray-600">WhatsApp: {donor.whatsapp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualDonor;
