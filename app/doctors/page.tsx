import Header from "@/components/Header";
import SearchInput from "./components/SearchInput";

import Box from "@/components/Box";

import SearchContent from "./components/SearchContent";
import getDoctorsByQuery from "@/actions/getDoctorsByQuery";
import AppointmentModal from "./components/AppointmentModal";

interface SearchProps {
    searchParams: {
        query?: string;
    }
};

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const { query } = searchParams;
    const doctors = await getDoctorsByQuery(query || "");

    return (
        <div className="
            bg-white
            rounded-lg
            h-full
            w-full
            overflow-y-auto
            overflow-x-hidden 
        ">
            <div className="
                w-full
                flex
                flex-col
                gap-y-2
                bg-white
                h-full
                overflow-x-hidden 
            ">
                <Box>
                    <Header>
                        <div className="mb-2 flex flex-col gap-y-3">
                        <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
                            Search Doctors Near You
                        </h1>
                            <SearchInput />
                        </div>
                    </Header>
                </Box>
                <Box className="overflow-auto flex flex-row gap-x-2 h-full">
                    <Box className="w-full">
                    <div className="mt-4 mb-4">
                        <SearchContent doctors={doctors} />
                    </div>
                     </Box>
                    
                    
                </Box>
            </div>
        </div>
    )
};

export default Search;
