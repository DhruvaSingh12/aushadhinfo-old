"use client";

import React from 'react';
import { Doctor} from '@/types';
import DoctorsTable from './DoctorTable';


interface SearchContentProps {
    doctors: Doctor[];
}

const SearchContent: React.FC<SearchContentProps> = ({ doctors }) => {
    return (
        <DoctorsTable doctors={doctors} />        
    );
};

export default SearchContent;
