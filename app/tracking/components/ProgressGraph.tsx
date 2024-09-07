import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

interface ProgressGraphProps {
  data: { time: string; punctuality: number }[];
}

const ProgressGraph: React.FC<ProgressGraphProps> = ({ data }) => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="font-bold text-lg mb-4 text-blue-600">Punctuality Graph</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="punctuality" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ProgressGraph;
