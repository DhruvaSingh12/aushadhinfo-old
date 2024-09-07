import Header from "@/components/Header";
import Box from "@/components/Box";
import getMedicineByQuery from "@/actions/getMedicineByQuery";
import SearchInput from "./components/SearchInput";
import SearchContent from "./components/SearchContent";
import getKendraByQuery from "@/actions/getKendraByQuery";
import MapComponent from "./components/MapComponent";

interface SearchProps {
    searchParams: {
        query?: string;
    }
};

export const revalidate = 0;

const Search = async ({ searchParams }: SearchProps) => {
    const { query } = searchParams;
    const kendras = await getKendraByQuery(query || "");

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
                            Search Nearest Jan Aushadhi Kendra
                        </h1>
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
                        <SearchContent kendras={kendras} />
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
