import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const donors = [
  {
    name: "ABC COMPANY",
    url: "abc.com",
    location: "Mumbai, Maharashtra",
    roles: {
      spoc: "Mr. Alpha",
      requirement: "Mr. Alpha",
      referred: "Mr. Gamma",
    },
    phone: "88938203902",
    email: "abccom90@gmail.com",
  },
  {
    name: "ABC COMPANY",
    url: "abc.us",
    location: "Mumbai, Maharashtra",
    roles: {
      spoc: "Mr. Alpha",
      requirement: "Mr. Alpha",
      referred: "Mr. Gamma",
    },
    phone: "88938203902",
    email: "abccom90@gmail.com",
  },
  {
    name: "ABC COMPANY",
    url: "abc.in",
    location: "Mumbai, Maharashtra",
    roles: {
      spoc: "Mr. Alpha",
      requirement: "Mr. Alpha",
      referred: "Mr. Gamma",
    },
    phone: "88938203902",
    email: "abccom90@gmail.com",
  },
];

const NGOPartners = () => {
  return (
    <div className="min-h-screen bg-[#F4D6D6] px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-[#1E2A38]">
        NGO PARTNERS
      </h2>

      {/* Search + Edit + Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm w-full md:max-w-md">
          <FaSearch className="text-[#1E2A38] mr-2" />
          <input
            type="text"
            placeholder="Search by company, referred, etc."
            className="flex-grow outline-none text-sm text-[#1E2A38]"
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-[#D4AF37] text-[#1E2A38] px-4 py-2 rounded-md hover:bg-[#C49B2F] text-sm cursor-pointer">
            Edit
          </button>
          <button className="flex items-center gap-1 border border-[#1E2A38] px-3 py-2 rounded-md text-sm text-[#1E2A38] hover:bg-[#D4AF37] cursor-pointer">
            <FaFilter />
            Filter By
          </button>
        </div>
      </div>

      {/* Donor Cards */}
      <div className="space-y-6">
        {donors.map((donor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border-2 border-[#D4AF37] shadow-sm flex flex-col md:flex-row justify-between gap-6"
          >
            {/* Avatar + Info */}
            <div className="flex gap-4 items-start">
              <div className="w-16 h-16 bg-[#F4D6D6] rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-[#1E2A38]">
                  {donor.name}
                </h3>
                <a
                  href={`https://${donor.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] text-sm hover:text-[#C49B2F]"
                >
                  {donor.url}
                </a>
                <p className="text-sm text-[#1E2A38]">{donor.location}</p>
                <div className="mt-2 space-y-1 text-sm text-[#1E2A38]">
                  <p>
                    <span className="font-semibold">Role:</span>{" "}
                    Csr Spoc - {donor.roles.spoc}
                  </p>
                  <p>
                    <span className="font-semibold">Designation:</span>{" "}
                    {donor.roles.requirement}
                  </p>
                  <p>
                    <span className="font-semibold">Referred By:</span>{" "}
                    {donor.roles.referred}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="flex flex-col justify-between gap-4 text-sm text-[#1E2A38]">
              <div>
                <p>
                  <span className="font-semibold">Phone number:</span>{" "}
                  {donor.phone}
                </p>
                <p>
                  <span className="font-semibold">Email address:</span>{" "}
                  {donor.email}
                </p>
              </div>
              <button className="bg-[#D4AF37] hover:bg-[#C49B2F] text-[#1E2A38] px-4 py-2 rounded-md flex items-center justify-center gap-2 text-sm cursor-pointer">
                <FaSearch />
                Check due to diligence status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NGOPartners;