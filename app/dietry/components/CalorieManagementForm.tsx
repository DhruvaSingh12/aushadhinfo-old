import React, { useState } from 'react';

export default function CalorieManagementForm({
  onCalorieSubmit,
}: {
  onCalorieSubmit: (intake: number, goal: 'maintenance' | 'loss' | 'gain') => void;
}) {
  const [calories, setCalories] = useState<number | null>(null);
  const [goal, setGoal] = useState<'maintenance' | 'loss' | 'gain'>('maintenance');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (calories) {
      onCalorieSubmit(calories, goal);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="text-blue-600 text-xl font-bold pt-6">Enter Calories Consumed:</label>
      <input
        type="number"
        value={calories ?? ''}
        onChange={(e) => setCalories(Number(e.target.value))}
        className="p-2 border border-gray-300 rounded-full bg-neutral-500/35 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        placeholder="Enter calories"
      />

      <label className="text-blue-600 text-xl font-bold">Goal:</label>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value as 'maintenance' | 'loss' | 'gain')}
        className="p-2 border border-gray-300 rounded-full bg-neutral-500/35 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      >
        <option value="maintenance">Maintain Weight</option>
        <option value="loss">Lose Weight</option>
        <option value="gain">Gain Weight</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
      >
        Calculate Calorie Balance
      </button>
    </form>
  );
}
