import React, { useState } from 'react';
import CalorieManagementForm from './components/CalorieManagementForm';
import CalorieResults from './components/CalorieResults';


export default function CalorieManagement() {
  const [calorieBalance, setCalorieBalance] = useState<number | null>(null);
  const [recommendations, setRecommendations] = useState<{ diet: string[]; exercise: string[] }>({
    diet: [],
    exercise: [],
  });

  const handleCalorieSubmit = (calories: number, goal: 'maintenance' | 'loss' | 'gain') => {
    let balance = 0;
    const maintenanceCalories = 2000; // Can be dynamic based on user data

    if (goal === 'maintenance') {
      balance = calories - maintenanceCalories;
    } else if (goal === 'loss') {
      balance = calories - (maintenanceCalories - 500);
    } else {
      balance = calories - (maintenanceCalories + 500);
    }

    setCalorieBalance(balance);
    setRecommendations(generateRecommendations(balance, goal));
  };

  const generateRecommendations = (balance: number, goal: 'maintenance' | 'loss' | 'gain') => {
    const diet = balance < 0 ? ['Increase protein intake', 'Eat more whole grains'] : ['Reduce sugar', 'Cut back on carbs'];
    const exercise = balance < 0 ? ['Weight training', 'Strength exercises'] : ['Cardio exercises', 'Jogging'];

    return { diet, exercise };
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-blue-600 mb-6">Calorie Management</h1>
      <CalorieManagementForm onCalorieSubmit={handleCalorieSubmit} />
      {calorieBalance !== null && (
        <CalorieResults calorieBalance={calorieBalance} recommendations={recommendations} />
      )}
    </div>
  );
}
