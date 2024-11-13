import Header from "@/components/Header";
import BiotechWebsite from "./components/BiotechWebsite";
import NCBIFooter from "./components/NCBIFooter";
import Box from "@/components/Box";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  return (
    <div className="bg-white
            rounded-lg
            h-full
            w-full
            overflow-y-auto
            overflow-x-hidden ">
      {/* Main Wrapper */}
      <div className="w-full
                flex
                flex-col
                gap-y-2
                bg-white
                h-full
                overflow-x-hidden">
        <Box>
        
                    <Header>
                        <div className="mb-2 flex flex-col gap-y-3">
                        <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
                            AushadhInfo
                        </h1>
          
                        </div>
                    </Header>
                </Box>

        {/* Main Content Section */}
        <Box className="flex flex-col md:flex-row justify-between items-center p-10">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Care beyond medicine</h1>
            <p className="text-gray-600 mb-6">
              Discover personalized medicine recommendations, find the nearest stores and hospitals, stay updated with the latest health news, receive timely medication reminders, and get support from our health chatbot—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/account">
              <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">Get Started</button>
              </Link>
              {/* <button className="text-teal-600 px-6 py-2 border border-teal-600 rounded-md hover:bg-teal-50">Learn More</button> */}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/home.png"
              alt="Doctor Illustration"
              className="max-w-xs md:max-w-md rounded-full"
            />
          </div>
        </Box>

        {/* BiotechWebsite Section */}
        <Box>
          <BiotechWebsite />
        </Box>

        {/* Footer Section */}
        <Box>
          <NCBIFooter />
        </Box>

        <div className="hidden">
          <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js" defer></script>
          <script src="https://mediafiles.botpress.cloud/068709b8-fee8-4963-b5c8-b1f0327fa310/webchat/v2.1/config.js" defer></script>
        </div>
      </div>
    </div>
  );
}
