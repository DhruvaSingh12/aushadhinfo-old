import Header from "@/components/Header";
import Box from "@/components/Box";
import News from "./components/News";

export const revalidate = 0;

export default async function Home() {
  return (
    <div className="h-full w-full overflow-hidden rounded-lg">
      <Box>
        <Header>
          <div className="mb-2 flex flex-col gap-y-3">
            <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
              Get the Latest News in Healthcare
            </h1>
          </div>
        </Header>
      </Box>
      <Box className="bg-white h-[calc(100%-75px)]">
        <div>
          <News />
        </div>
      </Box>
    </div>
  );
}
