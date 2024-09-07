'use client';
'use client';
import React, { useState } from "react";
import MorningBox from "./components/MorningBox";
import AfternoonBox from "./components/AfternoonBox";
import EveningBox from "./components/EveningBox";
import NightBox from "./components/NightBox";
import ProgressGraph from "./components/ProgressGraph";

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

  return (
    <div className="container mx-auto p-6 bg-blue-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Medication Tracker</h1>
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 md:w-2/3 lg:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-blue-600">
            <MorningBox medications={morningMeds} setMedications={setMorningMeds} />
            <AfternoonBox medications={afternoonMeds} setMedications={setAfternoonMeds} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-600">
            <EveningBox medications={eveningMeds} setMedications={setEveningMeds} />
            <NightBox medications={nightMeds} setMedications={setNightMeds} />
          </div>
        </div>
        <div className="flex-1 md:w-1/3 lg:w-1/3">
          <ProgressGraph data={punctualityData} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
