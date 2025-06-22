import React from 'react';
import { MedicineData } from '@/types';

interface TableProps {
    medicines: MedicineData[];
}

const MedicineTable: React.FC<TableProps> = ({ medicines }) => {
    return (
        <div className="w-full px-2 md:px-4">
            {/* Desktop View */}
            <div className="hidden md:block">
                <div className="flex bg-gradient-to-r rounded-lg from-purple-500 to-indigo-500 text-white">
                    <div className="py-3 pl-4 pr-6 text-sm font-semibold uppercase tracking-wider w-[5%]">#</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[5%]">Sub-Category</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[10%]">Product Name</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[10%]">Salt Composition</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[2%]">Price</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[8%]">Manufacturer</div>
                    <div className="py-3 px-4 text-sm font-semibold uppercase tracking-wider w-[60%]">Description</div>
                </div>
                {medicines.map((medicine, index) => (
                    <div key={medicine.id} className="flex bg-white rounded-lg hover:bg-gray-200 transition-all duration-300 mb-2">
                        <div className="py-4 pl-4 pr-6 text-base font-medium text-gray-900 w-[5%]">{index + 1}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[5%]">{medicine.sub_category || '[No sub-category]'}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[10%]">{medicine.product_name || '[No product name]'}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[10%]">{medicine.salt_composition || '[No salt composition]'}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[2%]">{medicine.product_price || '[No price]'}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[8%]">{medicine.product_manufacturer || '[No manufacturer]'}</div>
                        <div className="py-4 px-4 text-base text-gray-900 w-[60%]">{medicine.medicine_desc || '[No description]'}</div>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden grid gap-2 mt-4">
                {medicines.map((medicine, index) => (
                    <div key={medicine.id} className="bg-white hover:bg-gray-200 transition-all duration-200 p-3 rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-sm font-semibold text-gray-900">{index + 1}.</div>
                            <div className="text-base font-semibold text-purple-600">{medicine.product_name || '[No product name]'}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-gray-500 uppercase">Sub-Category</div>
                            <div className="text-sm text-gray-800">{medicine.sub_category || '[No sub-category]'}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-gray-500 uppercase">Salt Composition</div>
                            <div className="text-sm text-gray-800">{medicine.salt_composition || '[No salt composition]'}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-gray-500 uppercase">Price</div>
                            <div className="text-sm text-gray-800">{medicine.product_price || '[No price]'}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-gray-500 uppercase">Manufacturer</div>
                            <div className="text-sm text-gray-800">{medicine.product_manufacturer || '[No manufacturer]'}</div>
                        </div>
                        <div className="mt-2">
                            <div className="text-xs text-gray-500 uppercase">Description</div>
                            <div className="text-sm text-gray-800">{medicine.medicine_desc || '[No description]'}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MedicineTable;
