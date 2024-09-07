import React from 'react';

const MultiSelectField: React.FC<{
  name: string;
  label: string;
  options: string[];
  value: string[];
  onChange: (name: string, selectedValues: string[]) => void;
}> = ({ name, label, options, value, onChange }) => {
  
  const handleCheckboxChange = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(item => item !== option)
      : [...value, option];
    onChange(name, newValue);
  };

  return (
    <div>
      <label className="block text-lg font-semibold text-gray-900 mb-2">{label}</label>
      <div className="flex flex-wrap gap-4">
        {options.map(option => (
          <label
            key={option}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              value.includes(option)
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-200 text-blue-500"
            }`}
          >
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={value.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="hidden"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectField;
