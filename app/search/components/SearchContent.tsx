"use client";

import React from 'react';
import { Medicine} from '@/types';
import Table from './Table';


interface SearchContentProps {
    medicines: Medicine[];
}

const SearchContent: React.FC<SearchContentProps> = ({ medicines }) => {

    if (medicines.length === 0) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-black">
                Try searching some other medicine.
            </div>
        );
    }

    return (
        <Table medicines={medicines}/>
    );
};

export default SearchContent;
