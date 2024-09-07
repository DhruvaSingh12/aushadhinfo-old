import React from 'react';

export default function CalorieResults({
  calorieBalance,
  recommendations,
}: {
  calorieBalance: number;
  recommendations: { diet: string[]; exercise: string[] };
}) {
  const status = calorieBalance > 0 ? 'surplus' : 'deficit';

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-blue-600">Calorie Balance:</h2>
      <p className={`mt-2 text-${status === 'surplus' ? 'red' : 'green'}-600`}>
        You are in a calorie {status}: <span className="font-bold">{Math.abs(calorieBalance)} calories</span>.
      </p>

      <div className="mt-4">
        <h3 className="text-md font-semibold">Recommended Changes to Your Diet:</h3>
        <ul className="list-disc ml-5 text-gray-700">
          {recommendations.diet.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>

        <h3 className="mt-4 text-md font-semibold">Suggested Physical Activities:</h3>
        <ul className="list-disc ml-5 text-gray-700">
          {recommendations.exercise.map((exercise, index) => (
            <li key={index}>{exercise}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
