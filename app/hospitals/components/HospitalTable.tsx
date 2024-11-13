import React, { useState } from 'react';
import { Hospital } from '@/types';

interface HospitalTableProps {
    hospitals: Hospital[];
}

const HospitalTable: React.FC<HospitalTableProps> = ({ hospitals }) => {
    const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
    const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(undefined);
    const uniqueStates = Array.from(new Set(hospitals.map(hospital => hospital.state).filter(state => state)));

    const districtsForSelectedState = Array.from(
        new Set(
            hospitals
                .filter(hospital => hospital.state === selectedState)
                .map(hospital => hospital.district)
                .filter(district => district)
        )
    );

    const filteredHospitals = hospitals.filter(hospital =>
        (selectedState ? hospital.state === selectedState : true) &&
        (selectedDistrict ? hospital.district === selectedDistrict : true)
    );
    const normalizeCategory = (category: string | null) => {
        return category === '0' || !category ? 'Private' : category;
    };
    const normalizeTelephone = (telephone: string | null) => {
        return telephone === '0' || !telephone ? 'Not Available' : telephone;
    };

    return (
        <div className="w-full h-full px-4 mx-auto">
            <div className="mb-4 flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">State</label>
                    <select
                        value={selectedState || ''}
                        onChange={(e) => {
                            setSelectedState(e.target.value || undefined);
                            setSelectedDistrict(undefined);
                        }}
                        className="mt-1 block w-full h-10 px-3 py-2 border hover:cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="">All States</option>
                        {uniqueStates.map((state, index) => (
                            <option key={index} value={state || ''}>{state || ''}</option>
                        ))}
                    </select>
                </div>

                <div className="w-full md:w-1/2">
                    <label className="block text-sm font-medium text-gray-700">District</label>
                    <select
                        value={selectedDistrict || ''}
                        onChange={(e) => setSelectedDistrict(e.target.value || undefined)}
                        disabled={!selectedState}
                        className="mt-1 block w-full h-10 px-3 py-2 border hover:cursor-pointer bg-gradient-to-r from-teal-500 to-blue-500 border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                    >
                        <option value="">All Districts</option>
                        {districtsForSelectedState.map((district, index) => (
                            <option key={index} value={district || ''}>{district || ''}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="h-[calc(100vh-200px)]">
                <div className="hidden md:block">
                    <div className="flex bg-gradient-to-r rounded-full from-teal-500 to-blue-500 text-white">
                        <div className="flex-1 py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[2%]">#</div>
                        <div className="flex-2 py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[20%]">Hospital Name</div>
                        <div className="flex-3 py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[38%]">Address</div>
                        <div className="flex-4 py-3 px-2 text-sm font-semibold uppercase tracking-wider w-[10%]">Pincode</div>
                        <div className="flex-5 py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[15%]">Telephone</div>
                        <div className="flex-6 py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[15%]">Category</div>
                    </div>
                    {filteredHospitals.map((hospital, index) => (
                        <div key={index} className="flex bg-white rounded-lg hover:bg-gray-200 transition-all duration-300">
                            <div className="flex-1 py-4 px-4 text-base font-medium text-gray-900 w-[2%]">{index + 1}</div>
                            <div className="flex-2 py-4 px-4 text-base text-gray-900 w-[20%]">{hospital.name || '[No hospital name available]'}</div>
                            <div className="flex-3 py-4 px-4 text-base cursor-pointer hover:underline text-gray-900 w-[38%]">{hospital.address || '[No address available]'}</div>
                            <div className="flex-4 py-4 px-2 text-base text-gray-900 w-[10%]">{hospital.pincode || '[No pincode available]'}</div>
                            <div className="flex-5 py-4 px-4 text-base text-gray-900 w-[15%]">{normalizeTelephone(hospital.telephone) || '[No telephone available]'}</div>
                            <div className="flex-6 py-4 px-4 text-base text-gray-900 w-[15%]">{normalizeCategory(hospital.category)}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile View */}
                <div className="md:hidden grid gap-2 mt-4">
                    {filteredHospitals.map((hospital, index) => (
                        <div key={index} className="bg-white hover:bg-gray-200 transition-all duration-200 p-2 rounded-lg shadow-md hover:shadow-lg">
                            <div className="flex justify-between items-center">
                                <div className="text-s font-semibold text-gray-900">{index + 1}.</div>
                                <div className="text-base font-semibold text-teal-600">{hospital.name || '[No hospital name available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Address</div>
                                <div className="text-sm text-gray-800">{hospital.address || '[No address available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Pincode</div>
                                <div className="text-sm text-gray-800">{hospital.pincode || '[No pincode available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Telephone</div>
                                <div className="text-sm text-gray-800">{normalizeTelephone(hospital.telephone) || '[No telephone available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Category</div>
                                <div className="text-sm text-gray-800">{normalizeCategory(hospital.category)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HospitalTable;
