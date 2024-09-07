import Header from "@/components/Header";
import BiotechWebsite from "./components/BiotechWebsite";
import NCBIFooter from "./components/NCBIFooter";

export const revalidate = 0;

export default async function Home() {
  return (
    <div>
    <div className=" bg-white
            rounded-lg
            h-full
            w-full
            overflow-y-auto
            overflow-x-hidden ">
      <div className="p-0">
        <Header className="top-0 left-0 w-full bg-white shadow-md z-10" children={undefined} />
        <script src="https://cdn.botpress.cloud/webchat/v2.1/inject.js"></script>
          <script src="https://mediafiles.botpress.cloud/068709b8-fee8-4963-b5c8-b1f0327fa310/webchat/v2.1/config.js"></script>
      </div>

      {/* Main Content */}
      <main className="flex flex-row gap-x-20 items-center p-10 text-left">
        <div className="max-w-2xl w-1/2 mb-10">
          <h1 className="text-7xl font-bold text-gray-900 mb-4">Care beyond medicine</h1>
          <p className="text-gray-600 mb-6">
          Discover personalized medicine recommendations, find the nearest stores and hospitals, stay updated with the latest health news, receive timely medication reminders, and get support from our health chatbot—all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700">Get Started</button>
            <button className="text-teal-600 px-6 py-2 border border-teal-600 rounded-md hover:bg-teal-50">Learn More</button>
          </div>
        </div>
        <img
          src="/images/home.png"
          alt="Doctor Illustration"
          className="w-1/2 rounded-full max-w-md"
        />
      </main>
    </div>
    <div >
      <BiotechWebsite/>
    </div>
    <div >
      <NCBIFooter/>
    </div>
    </div>
  );
}
