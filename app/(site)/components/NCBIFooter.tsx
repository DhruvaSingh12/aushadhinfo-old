import React from 'react';
import { Pill, Stethoscope, Hospital, Newspaper } from 'lucide-react';

const NCBIFooter: React.FC = () => {
  return (
    <footer className="text-sm">
      <div className="bg-blue-600 text-white py-2 px-4">
        <h2 className="text-center font-bold mb-2">AushadhInfo</h2>
        <div className="flex justify-center space-x-6 mb-4">
          <Pill size={20} />
          <Stethoscope size={20} />
          <Hospital size={20} />
          <Newspaper size={20} />
        </div>

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold mb-1">Care Beyond Medicine</h3>
            {/* You might want to add some content here */}
          </div>

          <div>
            <h3 className="font-bold mb-1">Aushadh Kendra</h3>
            <p>Find all the aushadh kendra</p>
            <p>near you with a single click.</p>
          </div>

          <div>
            <h3 className="font-bold mb-1">Live News Updates</h3>
            <p>Find Latest News</p>
            <p>Updates of the health sector</p>
          </div>

          <div>
            <h3 className="font-bold mb-1">AskMedPal</h3>
            <p>Dont know what to do?</p>
            <p>Ask our personalized bot for help!</p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-4 text-xs">
          <a href="#" className="hover:underline">Medical Check</a>
          <span>|</span>
          <a href="#" className="hover:underline">Live News</a>
          <span>|</span>
          <a href="#" className="hover:underline">Doctor Appointments</a>
          <span>|</span>
          <a href="#" className="hover:underline">Dietary Plans</a>
        </div>
      </div>
    </footer>
  );
};

export default NCBIFooter;
