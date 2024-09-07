"use client";

import React from 'react';
import { Kendra } from '@/types';
import KendraTable from './KendraTable';

interface SearchContentProps {
    kendras: Kendra[];
}

const SearchContent: React.FC<SearchContentProps> = ({ kendras }) => {
    const hasValidAddresses = kendras.some((kendra) => kendra.address && kendra.address.trim().length > 0);

    if (!hasValidAddresses) {
        return (
            <div className="flex flex-col gap-y-2 w-full px-6 text-black">
                Try searching some other Jan Aushadi Kendra.
            </div>
        );
    }

    return (
        <KendraTable kendras={kendras} />
    );
};

export default SearchContent;
