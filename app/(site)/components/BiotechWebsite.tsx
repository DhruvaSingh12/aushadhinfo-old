import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BiotechWebsite = () => {
  return (
    <div className="bg-blue-50 p-8 font-sans min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          {/* Main heading */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              AushadhInfo - Where Care Meets Excellence
            </h1>
            <button className="flex items-center text-blue-600 hover:text-blue-800 transition">
              How do we work <ArrowUpRight className="ml-1" size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-700">
            The area of focus lies in Healthcare Technology and Pharmaceutical Access.
            Implementation of a digital platform that empowers patients with comprehensive medication management tools.
          </p>

        </div>

        <div className="space-y-6">
          <div className="bg-indigo-500 text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Generic Medicine Identification
            </h2>
            <p className="mb-4 text-sm">
              Implementation of a digital platform that empowers patients with comprehensive medication management tools.
            </p>
            <ArrowUpRight className="text-white" size={24} />
          </div>
          <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-2">Aushadh Kendra</h3>
            <p className="text-sm">
              Links the user to nearby pharmacies through an integrated search and mapping system.
            </p>
          </div>

          {/* Scientists card */}
          <div className="bg-pink-500 text-white p-6 rounded-xl shadow-lg flex justify-between items-center">
            <div>
              <button className="bg-white text-pink-800 px-4 py-2 rounded-full text-sm mb-2 hover:bg-pink-100 transition">
                Hospitals
              </button>
              <h3 className="text-4xl font-bold">34</h3>
              <p className="text-sm">
                Tracks user’s medication intake thus avoiding conflicts between prescriptions from multiple doctors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiotechWebsite;
