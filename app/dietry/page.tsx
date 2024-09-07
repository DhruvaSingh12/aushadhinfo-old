'use client';

import { useState } from 'react';
import BMICalculator from './components/BMICalculator';
import AnimatedInfoCard from './components/AnimatedInfoCard';
import Header from '@/components/Header';
import CalorieManagement from './CalorieManagement';

export default function Home() {
  const [calories, setCalories] = useState<number | null>(null);
  const [caloriesToBurn, setCaloriesToBurn] = useState<number | null>(null);
  const [exercises, setExercises] = useState<string[]>([]);
  const [foodDiet, setFoodDiet] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (calories && calories > 0) {
      const caloriesToBurnValue = calculateCaloriesToBurn(calories);
      setCaloriesToBurn(caloriesToBurnValue);

      setExercises(await suggestExercises(caloriesToBurnValue));
      setFoodDiet(await suggestFoodDiet(caloriesToBurnValue));
    }
  };

  const calculateCaloriesToBurn = (calories: number): number => {
    return calories * 0.8;
  };

  const suggestExercises = async (calories: number): Promise<string[]> => {
    return calories > 500 ? [
      '45 minutes of running',
      '30 minutes of cycling',
      '30 minutes of HIIT',
    ] : [
      '30 minutes of running',
      '15 minutes of cycling',
      '20 minutes of strength training',
    ];
  };

  const suggestFoodDiet = async (calories: number): Promise<string[]> => {
    return calories > 500 ? [
      'Quinoa with grilled chicken',
      'Vegetable salad with nuts',
      'Avocado smoothie',
    ] : [
      'Vegetable salad',
      'Grilled chicken breast',
      'Fruits like apples and bananas',
    ];
  };

  return (
    <div className="bg-white rounded-lg h-full w-full overflow-y-auto overflow-x-hidden">
      <div className="w-full flex flex-col gap-y-2 bg-white h-full overflow-x-hidden">
        <Header>
          <div className="mb-2 flex flex-col gap-y-3">
            <h1 className="text-transparent bg-clip-text text-center text-black bg-gradient-to-r from-teal-500 to-blue-600 text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
              Dietary Plan and Calorie Management
            </h1>
            </div>
        </Header>

        <div className="flex flex-col gap-y-6 w-full h-full p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-500/35 p-6 rounded-lg shadow-lg">
              <CalorieManagement />
            </div>
            <div className="bg-neutral-500/35 p-6 rounded-lg shadow-lg">
              <BMICalculator />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <AnimatedInfoCard
              title="What is a Calorie?"
              content="Calories are units of energy you get from food and drink. Understanding how many calories you consume and burn is important for health management."
            />
            <AnimatedInfoCard
              title="Healthy Tips"
              content="Maintain a balanced diet and include fruits, vegetables, and lean proteins. Exercise regularly to stay healthy and fit."
            />
          </div>
        </div>
      </div>
    </div>
  );
}