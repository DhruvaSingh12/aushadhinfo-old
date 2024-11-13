import React, { useState } from "react";
import { Doctor } from "@/types";
import AppointmentModal from "./AppointmentModal"; 

interface DoctorsTableProps {
  doctors: Doctor[];
}

const DoctorsTable: React.FC<DoctorsTableProps> = ({ doctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleNameClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor); 
    setModalOpen(true); 
  };

  return (
    <div className="w-full h-full px-4 mx-auto">
      <div className="hidden md:block">
        <div className="flex bg-gradient-to-r rounded-full from-teal-500 to-blue-500 text-white">
          <div className="flex-1 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[2%]">#</div>
          <div className="flex-2 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">District</div>
          <div className="flex-3 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[18%]">Name</div>
          <div className="flex-4 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[15%]">Number</div>
          <div className="flex-5 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">EHRMS</div>
          <div className="flex-6 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[15%]">Qualifications</div>
          <div className="flex-7 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">Posting</div>
          <div className="flex-8 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">Facility Type</div>
          <div className="flex-9 py-3 px-6 text-sm font-semibold uppercase tracking-wider w-[10%]">Block</div>
        </div>
        {doctors.map((doctor, index) => (
          <div key={doctor.id} className="flex bg-white rounded-lg hover:bg-gray-200 transition-all duration-300">
            <div className="flex-1 py-4 px-6 text-base font-medium text-gray-900 w-[2%]">{index + 1}</div>
            <div className="flex-2 py-4 px-6 text-base text-gray-900 w-[10%]">{doctor.district}</div>
            <div
              className="flex-3 py-4 px-6 text-base text-blue-500 underline cursor-pointer w-[18%]"
              onClick={() => handleNameClick(doctor)} 
            >
              {doctor.name}
            </div>
            <div className="flex-4 py-4 px-6 text-base text-gray-900 w-[15%]">{doctor.number}</div>
            <div className="flex-5 py-4 px-6 text-base text-gray-900 w-[10%]">{doctor.ehrms}</div>
            <div className="flex-6 py-4 px-6 text-base text-gray-900 w-[15%]">{doctor.qualifications}</div>
            <div className="flex-7 py-4 px-6 text-base text-gray-900 w-[10%]">{doctor.posting}</div>
            <div className="flex-8 py-4 px-6 text-base text-gray-900 w-[10%]">{doctor.facility_type}</div>
            <div className="flex-9 py-4 px-6 text-base text-gray-900 w-[10%]">{doctor.block}</div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden grid gap-2 mt-4">
        {doctors.map((doctor, index) => (
          <div key={doctor.id} className="bg-white hover:bg-gray-200 transition-all duration-200 p-2 rounded-lg shadow-md hover:shadow-lg">
            <div className="flex justify-between items-center">
              <div className="text-s font-semibold text-gray-900">{index + 1}.</div>
              <div
                className="text-base font-semibold text-teal-600 underline cursor-pointer"
                onClick={() => handleNameClick(doctor)} 
              >
                {doctor.name}
              </div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">District</div>
              <div className="text-sm text-gray-800">{doctor.district}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">Number</div>
              <div className="text-sm text-gray-800">{doctor.number}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">EHRMS</div>
              <div className="text-sm text-gray-800">{doctor.ehrms}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">Qualifications</div>
              <div className="text-sm text-gray-800">{doctor.qualifications}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">Posting</div>
              <div className="text-sm text-gray-800">{doctor.posting}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">Facility Type</div>
              <div className="text-sm text-gray-800">{doctor.facility_type}</div>
            </div>
            <div className="mt-2">
              <div className="text-xs text-gray-500 uppercase">Block</div>
              <div className="text-sm text-gray-800">{doctor.block}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedDoctor && (
        <AppointmentModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          doctor={selectedDoctor}
        />
      )}
    </div>
  );
};

export default DoctorsTable;
