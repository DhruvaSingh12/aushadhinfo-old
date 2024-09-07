import React from "react";

interface Medication {
  id: number;
  name: string;
  taken: boolean;
}

interface EveningBoxProps {
  medications: Medication[];
  setMedications: React.Dispatch<React.SetStateAction<Medication[]>>;
}

const EveningBox: React.FC<EveningBoxProps> = ({ medications, setMedications }) => {
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
    <div className="p-6 bg-white text-gray-800 border border-gray-200 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Evening Medications</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={newMedication}
          onChange={(e) => setNewMedication(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
          placeholder="Add a new medication"
        />
        <button onClick={addMedication} className="bg-blue-500 text-white p-3 rounded-lg ml-3 hover:bg-blue-600 transition duration-200 ease-in-out">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {medications.map((med) => (
          <li key={med.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm transition duration-200 ease-in-out hover:bg-gray-100">
            <span className={`flex-1 text-lg ${med.taken ? 'line-through text-gray-400' : ''}`}>{med.name}</span>
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={med.taken}
                onChange={() => toggleMedication(med.id)}
                className="form-checkbox text-blue-600"
              />
              <button onClick={() => deleteMedication(med.id)} className="text-red-500 hover:text-red-700 transition duration-200 ease-in-out">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EveningBox;
