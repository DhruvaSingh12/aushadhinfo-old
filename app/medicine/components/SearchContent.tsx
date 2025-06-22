"use client";

import React from 'react';
import { MedicineData } from '@/types';
import MedicineTable from './Table';

interface SearchContentProps {
    medicines: MedicineData[];
}

const SearchContent: React.FC<SearchContentProps> = ({ medicines }) => {
    if (medicines.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-black">
                No medicines found. Try searching for something else.
            </div>
        );
    }

    return <MedicineTable medicines={medicines} />;
};

export default SearchContent;
