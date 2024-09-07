import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface ProgressGraphProps {
  data: { time: string; punctuality: number }[];
}

const ProgressGraph: React.FC<ProgressGraphProps> = ({ data }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-md">
      <h2 className="font-bold text-lg mb-4 text-blue-600">Punctuality Graph</h2>
      <div className="w-full overflow-x-auto">
        <BarChart width={600} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" tick={{ fill: '#4a5568' }} />
          <YAxis domain={[0, 100]} tick={{ fill: '#4a5568' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="punctuality" fill="#3182ce" barSize={40} />
        </BarChart>
      </div>
    </div>
  );
};

export default ProgressGraph;
