import React from "react";

interface Medication {
  id: number;
  name: string;
  taken: boolean;
}

interface MorningBoxProps {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
}

const MorningBox: React.FC<MorningBoxProps> = ({ medications, setMedications }) => {
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
      <h2 className="text-xl font-semibold mb-4">Morning Medications</h2>
      <input
        type="text"
        value={newMedication}
        onChange={(e) => setNewMedication(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Add a new medication"
      />
      <button onClick={addMedication} className="bg-blue-500 text-white p-3 rounded-lg mb-4 w-full hover:bg-blue-600">
        Add
      </button>
      <ul className="space-y-2">
        {medications.map((med) => (
          <li key={med.id} className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
            <span className={`flex-1 ${med.taken ? 'line-through text-gray-400' : ''}`}>{med.name}</span>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={med.taken}
                onChange={() => toggleMedication(med.id)}
                className="form-checkbox"
              />
              <button onClick={() => deleteMedication(med.id)} className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MorningBox;
