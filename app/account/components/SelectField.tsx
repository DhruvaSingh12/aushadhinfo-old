import React from 'react';

const SelectField: React.FC<{
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}> = ({ name, label, value, onChange, options }) => (
  <div>
    <label className="block text-lg font-semibold text-gray-900 mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-blue-500 rounded-full bg-gray-200 text-black focus:ring-2 focus:ring-blue-400"
    >
      <option value="" disabled>Select an option</option>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectField;
