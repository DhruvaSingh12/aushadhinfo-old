import Header from "@/components/Header";
import Box from "@/components/Box";
import SearchContent from "./components/SearchContent";
import getHospitalByQuery from "@/actions/getHospitalByQuery";
import MapComponent from "./components/MapComponent";
import SearchInput from "./components/SearchInput";

interface SearchProps {
    searchParams: {
        query?: string;
    };
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const { query } = searchParams;
    const hospitals = await getHospitalByQuery(query || "");

    return (
        <div className="
            bg-white
            rounded-lg
            h-full
            w-full
            overflow-hidden
            flex
            flex-col
        ">
            <Box>
                <Header>
                    <div className="mb-2 flex flex-col gap-y-3">
                        <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
                            Search Your Nearest Hospital
                        </h1>
                        <SearchInput />
                    </div>
                </Header>
            </Box>
            <div className="
                flex
                flex-1
                gap-2
                overflow-hidden
            ">
                <Box className="flex-1 rounded-md overflow-y-auto">
                    <div className="mt-4 mb-4">
                        {hospitals && hospitals.length > 0 ? (
                            <SearchContent hospitals={hospitals} />
                        ) : (
                            <p className="text-center text-gray-500">
                                No hospitals found for the query.
                            </p>
                        )}
                    </div>
                </Box>
                <Box className="flex-1 hidden lg:block py-4 pr-4 h-full">
                    <div className="h-full">
                        <MapComponent />
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Search;
