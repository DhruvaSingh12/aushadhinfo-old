import React from 'react';

const TextareaField: React.FC<{
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}> = ({ name, label, value, onChange, placeholder }) => (
  <div>
    <label className="block text-lg font-semibold text-gray-900 mb-2">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-blue-500 rounded-full bg-gray-200 text-black focus:ring-2 focus:ring-blue-400"
      placeholder={placeholder}
    />
  </div>
);

export default TextareaField;
