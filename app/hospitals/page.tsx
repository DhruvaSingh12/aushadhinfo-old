import Header from "@/components/Header";
import Box from "@/components/Box";
import SearchContent from "./components/SearchContent";
import getHospitalsByQuery from "@/actions/getHospitalsByQuery";

interface SearchProps {
    searchParams: {
        query?: string;
    };
}

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const { query } = searchParams;
    const hospitals = await getHospitalsByQuery(query || "");

    return (
        <div className="
            bg-white
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        ">
            <div className="
                w-full
                flex
                flex-col
                gap-y-2
                bg-white
                h-full
            ">
                <Box>
                    <Header>
                        <div className="mb-2 flex flex-col gap-y-3">
                        <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
                            Search Your Nearest Hospital
                        </h1>
                        </div>
                    </Header>
                </Box>
                <Box className="overflow-y-auto flex-1 h-full">
                    <div className="mt-4 mb-4 w-full">
                        {hospitals && hospitals.length > 0 ? (
                            <SearchContent hospitals={hospitals} />
                        ) : (
                            <p className="text-center text-gray-500">
                                No hospitals found for the query.
                            </p>
                        )}
                    </div>
                </Box>
            </div>
        </div>
    );
};

export default Search;
