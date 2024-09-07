import React, { useState, ChangeEvent, FormEvent } from "react";

interface MedicationFormProps {
  addMedication: (medication: Medication) => void;
}

interface Medication {
  name: string;
  time: string;
}

const MedicationForm: React.FC<MedicationFormProps> = ({ addMedication }) => {
  const [medication, setMedication] = useState<Medication>({ name: "", time: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMedication((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (medication.name && medication.time) {
      addMedication(medication);
      setMedication({ name: "", time: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        name="name"
        value={medication.name}
        onChange={handleChange}
        className="p-2 border rounded"
        placeholder="Medicine Name"
        required
      />
      <input
        name="time"
        value={medication.time}
        onChange={handleChange}
        className="p-2 border rounded"
        placeholder="Time (e.g., Morning)"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Medication
      </button>
    </form>
  );
};

export default MedicationForm;
