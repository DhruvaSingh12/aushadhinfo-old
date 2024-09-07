"use client";

import React, { useState } from 'react';
import { Kendra } from '@/types';

interface KendraTableProps {
    kendras: Kendra[];
}

const KendraTable: React.FC<KendraTableProps> = ({ kendras }) => {
    const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
    const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(undefined);

    // Get unique states from the data
    const uniqueStates = Array.from(new Set(kendras.map(kendra => kendra.state).filter(state => state)));
    
    // Filter districts based on the selected state
    const districtsForSelectedState = Array.from(
        new Set(
            kendras
                .filter(kendra => kendra.state === selectedState)
                .map(kendra => kendra.district)
                .filter(district => district)
        )
    );

    const filteredKendras = kendras.filter(kendra =>
        (selectedState ? kendra.state === selectedState : true) &&
        (selectedDistrict ? kendra.district === selectedDistrict : true)
    );

    return (
        <div className="w-full h-full px-4 mx-auto">
            <div className="mb-4 flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <label className="block text-sm overflow-y-auto font-medium text-gray-700">State</label>
                    <select
                        value={selectedState}
                        onChange={(e) => {
                            setSelectedState(e.target.value);
                            setSelectedDistrict(undefined);
                        }}
                        className="mt-1 block w-full h-10 px-3 py-2 hover:cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 text-whiteborder border-gray-300 rounded-full overflow-y-auto shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="">All States</option>
                        {uniqueStates.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">District</label>
                    <select
                        value={selectedDistrict}
                        onChange={(e) => setSelectedDistrict(e.target.value)}
                        disabled={!selectedState} 
                        className="mt-1 block w-full h-10 px-3 py-2  hover:cursor-pointer border bg-gradient-to-r from-teal-500 to-blue-500 text-white border-gray-300 rounded-full overflow-y-auto shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="">All Districts</option>
                        {districtsForSelectedState.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="h-[calc(100vh-200px)]"> 
                <div className="hidden md:block">
                    <div className="flex bg-gradient-to-r rounded-full from-teal-500 to-blue-500 text-white">
                        <div className="flex-1 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[2%]">#</div>
                        <div className="flex-2 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[15%]">Blocks</div>
                        <div className="flex-3 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[43%]">Address</div>
                        <div className="flex-4 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">Pincode</div>
                        <div className="flex-5 py-3 pl-8 pr-4 text-sm font-semibold uppercase tracking-wider w-[20%]">Contact Person</div>
                    </div>
                    {filteredKendras.map((kendra, index) => (
                        <div key={index} className="flex bg-white rounded-lg hover:bg-gray-200 transition-all duration-300">
                            <div className="flex-1 py-4 px-6 text-base font-medium text-gray-900 w-[2%]">{index + 1}</div>
                            <div className="flex-2 py-4 px-6 text-base text-gray-900 w-[15%]">{kendra.blocks || '[No blocks available]'}</div>
                            <div className="flex-3 py-4 px-6 text-base hover:cursor-pointer hover:underline text-gray-900 w-[43%]">{kendra.address || '[No address available]'}</div>
                            <div className="flex-4 py-4 px-6 text-base text-gray-900 w-[10%]">{kendra.pincode || '[No pincode available]'}</div>
                            <div className="flex-5 py-4 pl-8 pr-4 text-base text-gray-900 w-[20%]">{kendra.contact_person || '[No contact person available]'}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden grid gap-2 mt-4">
                    {filteredKendras.map((kendra, index) => (
                        <div key={index} className="bg-white hover:bg-gray-200 transition-all duration-200 p-2 rounded-lg shadow-md hover:shadow-lg">
                            <div className="flex justify-between items-center">
                                <div className="text-s font-semibold text-gray-900">{index + 1}.</div>
                                <div className="text-base font-semibold text-teal-600">{kendra.blocks || '[No blocks available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Address</div>
                                <div className="text-sm text-gray-800">{kendra.address || '[No address available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Pincode</div>
                                <div className="text-sm text-gray-800">{kendra.pincode || '[No pincode available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Contact Person</div>
                                <div className="text-sm text-gray-800">{kendra.contact_person || '[No contact person available]'}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KendraTable;
