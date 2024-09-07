import React from "react";

interface Medication {
  id: number;
  name: string;
  taken: boolean;
}

interface NightBoxProps {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
}

const NightBox: React.FC<NightBoxProps> = ({ medications, setMedications }) => {
  const [newMedication, setNewMedication] = React.useState<string>("");

  const addMedication = () => {
    if (newMedication.trim()) {
      setMedications((prev) => [...prev, { id: Date.now(), name: newMedication, taken: false }]);
      setNewMedication("");
    }
  };

  const toggleMedication = (id: number) => {
    setMedications((prev) =>
      prev.map((med) => (med.id === id ? { ...med, taken: !med.taken } : med))
    );
  };

  const deleteMedication = (id: number) => {
    setMedications((prev) => prev.filter((med) => med.id !== id));
  };

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className="font-bold text-lg mb-4">Night Medications</h2>
      <input
        type="text"
        value={newMedication}
        onChange={(e) => setNewMedication(e.target.value)}
        className="p-2 border rounded w-full mb-2"
        placeholder="Add a new medication"
      />
      <button onClick={addMedication} className="bg-blue-500 text-white p-2 rounded mb-4 w-full">
        Add
      </button>
      <ul>
        {medications.map((med) => (
          <li key={med.id} className="flex justify-between items-center mb-2">
            <span>{med.name}</span>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={med.taken}
                onChange={() => toggleMedication(med.id)}
                className="mr-2"
              />
              <button onClick={() => deleteMedication(med.id)} className="text-red-500">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NightBox;
