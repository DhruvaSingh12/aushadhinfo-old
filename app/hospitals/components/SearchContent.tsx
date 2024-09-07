"use client";

import React from 'react';
import { Hospital } from '@/types';
import HospitalTable from './HospitalTable';

interface SearchContentProps {
    hospitals: Hospital[];
}

const SearchContent: React.FC<SearchContentProps> = ({ hospitals }) => {
    return (
        <HospitalTable hospitals={hospitals} />
    );
};

export default SearchContent;
