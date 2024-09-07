import React, { useState } from "react";
import { Doctor } from "@/types";
import AppointmentModal from "./AppointmentModal"; // Assuming this is the modal component you've created

interface DoctorsTableProps {
  doctors: Doctor[];
}

const DoctorsTable: React.FC<DoctorsTableProps> = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNameClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor); // Set the selected doctor to pass to the modal
    setModalOpen(true); // Open the modal
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-black bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">District</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Number</th>
            <th className="px-4 py-2 border-b">EHRMS</th>
            <th className="px-4 py-2 border-b">Qualifications</th>
            <th className="px-4 py-2 border-b">Posting</th>
            <th className="px-4 py-2 border-b">Facility Type</th>
            <th className="px-4 py-2 border-b">Block</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{doctor.id}</td>
              <td className="px-4 py-2 border-b">{doctor.district}</td>
              <td
                className="px-4 py-2 border-b text-blue-500 cursor-pointer underline"
                onClick={() => handleNameClick(doctor)} // Trigger modal on name click
              >
                {doctor.name}
              </td>
              <td className="px-4 py-2 border-b">{doctor.number}</td>
              <td className="px-4 py-2 border-b">{doctor.ehrms}</td>
              <td className="px-4 py-2 border-b">{doctor.qualifications}</td>
              <td className="px-4 py-2 border-b">{doctor.posting}</td>
              <td className="px-4 py-2 border-b">{doctor.facility_type}</td>
              <td className="px-4 py-2 border-b">{doctor.block}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedDoctor && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          doctor={selectedDoctor} // Pass the selected doctor to the modal
        />
      )}
    </div>
  );
};

export default DoctorsTable;
