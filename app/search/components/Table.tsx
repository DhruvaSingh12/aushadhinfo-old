import React from 'react';
import { Medicine } from '@/types';

interface TableProps {
    medicines: Medicine[];
}

const Table: React.FC<TableProps> = ({ medicines }) => {
    return (
        <div className="w-full px-2 md:px-4">
            <div>
                <div className="hidden overflow-x-hidden md:block">
                    <div className="flex bg-gradient-to-r rounded-lg from-teal-500 to-blue-500 text-white">
                        <div className="py-3 pl-4 pr-6 text-sm font-semibold uppercase tracking-wider w-8">#</div>
                        <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-1/4">Drug Name</div>
                        <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-1/3">Strength</div>
                        <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-1/2">Indication</div>
                    </div>
                    {medicines.map((medicine, index) => (
                        <div key={medicine._id} className="flex bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 mb-2">
                            <div className="py-4 pl-4 pr-6 text-base font-medium text-gray-900 w-8">{index + 1}</div>
                            <div className="py-4 px-4 text-base text-gray-900 w-1/4">{medicine.drug_name || '[Information not available]'}</div>
                            <div className="py-4 px-4 text-base text-gray-900 w-1/3">{medicine.strength || '[Information not available]'}</div>
                            <div className="py-4 px-4 text-base text-gray-900 w-1/2">{medicine.indication || '[Information not available]'}</div>
                        </div>
                    ))}
                </div>

                <div className="md:hidden grid gap-2 mt-4">
                    {medicines.map((medicine, index) => (
                        <div key={medicine._id} className="bg-white hover:bg-gray-200 transition-all duration-200 p-3 rounded-lg shadow-md hover:shadow-lg">
                            <div className="flex justify-between items-center mb-2">
                                <div className="text-sm font-semibold text-gray-900">{index + 1}.</div>
                                <div className="text-base font-semibold text-teal-600">{medicine.drug_name || '[No name available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Strength</div>
                                <div className="text-sm text-gray-800">{medicine.strength || '[No strength available]'}</div>
                            </div>
                            <div className="mt-2">
                                <div className="text-xs text-gray-500 uppercase">Indication</div>
                                <div className="text-sm text-gray-800">{medicine.indication || '[No indication available]'}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Table;
