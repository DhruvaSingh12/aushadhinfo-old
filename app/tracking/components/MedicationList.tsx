import React from "react";

interface Medication {
  name: string;
  time: string;
  taken: boolean;
}

interface MedicationListProps {
  medications: Medication[];
  toggleMedication: (index: number) => void;
}

const MedicationList: React.FC<MedicationListProps> = ({ medications, toggleMedication }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {medications.map((med, index) => (
        <div key={index} className="p-4 border rounded flex justify-between items-center">
          <span>{`${med.name} - ${med.time}`}</span>
          <input
            type="checkbox"
            checked={med.taken}
            onChange={() => toggleMedication(index)}
            className="form-checkbox"
          />
        </div>
      ))}
    </div>
  );
};

export default MedicationList;
