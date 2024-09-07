'use client';

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import MorningBox from "./components/MorningBox";
import AfternoonBox from "./components/AfternoonBox";
import EveningBox from "./components/EveningBox";
import NightBox from "./components/NightBox";
import ProgressGraph from "./components/ProgressGraph";
import Box from "@/components/Box";

interface Medication {
  id: number;
  name: string;
  taken: boolean;
}

const HomePage: React.FC = () => {
  const [morningMeds, setMorningMeds] = useState<Medication[]>([]);
  const [afternoonMeds, setAfternoonMeds] = useState<Medication[]>([]);
  const [eveningMeds, setEveningMeds] = useState<Medication[]>([]);
  const [nightMeds, setNightMeds] = useState<Medication[]>([]);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Indicate that the component is client-side
  }, []);

  const calculatePunctuality = (medications: Medication[]) => {
    if (medications.length === 0) return 0;
    const takenMeds = medications.filter((med) => med.taken).length;
    return (takenMeds / medications.length) * 100;
  };

  const punctualityData = [
    { time: "Morning", punctuality: calculatePunctuality(morningMeds) },
    { time: "Afternoon", punctuality: calculatePunctuality(afternoonMeds) },
    { time: "Evening", punctuality: calculatePunctuality(eveningMeds) },
    { time: "Night", punctuality: calculatePunctuality(nightMeds) },
  ];

  if (!isClient) {
    return null; // Render nothing during server-side rendering
  }

  return (
    <div className="bg-white rounded-lg h-full w-full overflow-y-auto overflow-x-hidden">
      {/* Header Section */}
      <Box>
        <Header>
          <div className="mb-2 flex flex-col gap-y-3">
            <h1 className="text-transparent bg-clip-text text-center bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
              Medication Tracker
            </h1>
          </div>
        </Header>
      </Box>

      {/* Main Content Section */}
      <Box className="flex flex-col bg-gray-200 md:flex-row gap-6 p-6">
        {/* Medication Boxes */}
        <div className="flex-1 md:w-2/3 lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <MorningBox medications={morningMeds} setMedications={setMorningMeds} />
            <AfternoonBox medications={afternoonMeds} setMedications={setAfternoonMeds} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EveningBox medications={eveningMeds} setMedications={setEveningMeds} />
            <NightBox medications={nightMeds} setMedications={setNightMeds} />
          </div>
        </div>
        
        {/* Progress Graph */}
        <div className="flex-1 md:w-1/3 lg:w-1/3">
          <ProgressGraph data={punctualityData} />
        </div>
      </Box>
    </div>
  );
};

export default HomePage;
