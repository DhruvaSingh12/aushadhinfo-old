'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiCategory, setBmiCategory] = useState<string | null>(null);
  const [healthMessage, setHealthMessage] = useState<string | null>(null);

  const handleBMICalculation = () => {
    if (height && weight) {
      const bmiValue = (weight / (height * height)) * 10000;
      const calculatedBmi = parseFloat(bmiValue.toFixed(2));
      setBmi(calculatedBmi);

      // Classify BMI and set health messages
      let category = '';
      let message = '';

      if (calculatedBmi < 18.5) {
        category = 'Underweight';
        message = 'You may want to consult a doctor for a proper diet plan to gain some healthy weight.';
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        category = 'Normal weight';
        message = 'Great! You have a healthy BMI. Continue maintaining a balanced diet and regular exercise.';
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        category = 'Overweight';
        message = 'You might want to incorporate regular exercise and a balanced diet to reduce your BMI.';
      } else {
        category = 'Obese';
        message = 'It is advisable to seek medical guidance and plan for a healthy weight loss strategy.';
      }

      setBmiCategory(category);
      setHealthMessage(message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">BMI Calculator</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
        <input
          type="number"
          value={height ?? ''}
          onChange={(e) => setHeight(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-full bg-neutral-500/35 text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
        <input
          type="number"
          value={weight ?? ''}
          onChange={(e) => setWeight(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-full bg-neutral-500/35 text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Age</label>
        <input
          type="number"
          value={age ?? ''}
          onChange={(e) => setAge(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-full bg-neutral-500/35 text-black"
        />
      </div>

      <button
        onClick={handleBMICalculation}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-4 text-center text-lg text-black">
          <p>
            Your BMI is: <span className="font-bold text-blue-600">{bmi}</span>
          </p>
          <p className="mt-2">
            You are classified as: <span className="font-bold text-blue-600">{bmiCategory}</span>
          </p>
          <p className="mt-2 text-gray-700">{healthMessage}</p>
        </div>
      )}
    </div>
  );
}
