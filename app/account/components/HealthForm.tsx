"use client";

import React, { useState } from 'react';
import InputField from './InputField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';
import MultiSelectField from './MultiSelectField';

interface FormState {
  name: string;
  age: string;
  gender: string;
  symptoms: string;
  mood: string;
  allergies: string[];
}

const HealthForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    age: '',
    gender: '',
    symptoms: '',
    mood: '',
    allergies: [],
  });

  // Handle input change for input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle change for textarea fields
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle change for select fields
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle multi-select change
  const handleMultiSelectChange = (name: string, selectedValues: string[]) => {
    setFormState(prevState => ({ ...prevState, [name]: selectedValues }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        name="name"
        label="Name"
        value={formState.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <InputField
        name="age"
        label="Age"
        value={formState.age}
        onChange={handleInputChange}
        placeholder="Enter your age"
      />
      <SelectField
        name="gender"
        label="Gender"
        value={formState.gender}
        onChange={handleSelectChange}
        options={['Male', 'Female', 'Other']}
      />
      <TextareaField
        name="symptoms"
        label="Symptoms"
        value={formState.symptoms}
        onChange={handleTextareaChange}
        placeholder="Describe your symptoms"
      />
      <SelectField
        name="mood"
        label="Mood"
        value={formState.mood}
        onChange={handleSelectChange}
        options={['Happy', 'Sad', 'Neutral']}
      />
      <MultiSelectField
        name="allergies"
        label="Allergies"
        options={['Pollen', 'Dust', 'Nuts', 'Shellfish']}
        value={formState.allergies}
        onChange={handleMultiSelectChange}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default HealthForm;
