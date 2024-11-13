import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const BiotechWebsite = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left column */}
        <div className="space-y-8">
          {/* Main heading */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
              AushadhInfo - Where Care Meets Excellence
            </h1>
            {/* <button className="flex items-center text-blue-600 hover:text-blue-800 transition mt-2">
              How do we work <ArrowUpRight className="ml-2" size={18} />
            </button> */}
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Empowering patients with advanced healthcare technology and pharmaceutical access. Our platform offers comprehensive medication management and affordable generic alternatives.
          </p>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Generic Medicine Identification */}
          <Link href="/search">
          <div className="bg-indigo-500 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold mb-4">
              GENERIC MEDICINE INFORMATION ↗
            </h2>
            <h3 className="text-3xl font-bold">3,726 approved generic drugs.</h3>
            <p className="text-lg mb-4">
              Discover affordable and effective alternatives for your prescriptions with ease.
            </p>
          </div>
          </Link>

          {/* Aushadh Kendra */}
          
          <div className="bg-blue-500 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform">
          <Link href="/stores">
            <h3 className="text-2xl font-bold mb-4">JANAUSHADHI KENDRAS ↗</h3>
            <h3 className="text-3xl font-bold">6,318 listed kendras.</h3>
            <p className="text-lg">
              Find nearby pharmacies through an integrated search and mapping system, ensuring easy access to essential medicines.
            </p>
            </Link>
          </div>
          

          {/* Hospitals card */}
          <div className="bg-pink-500 text-white p-8 rounded-xl shadow-lg flex justify-between items-center transform hover:scale-105 transition-transform">
            <div>
            <Link href="/hospitals">
              <button className="bg-white text-pink-800 px-6 py-2 rounded-full text-lg font-semibold mb-4 hover:bg-pink-100 transition">
                Hospitals
              </button>
              </Link>
              <h3 className="text-3xl font-bold">30,273 listed hospitals.</h3>
              <p className="text-lg">
                Track medication intake and avoid conflicts between prescriptions from multiple doctors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiotechWebsite;