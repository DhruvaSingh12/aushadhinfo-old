import React from 'react';

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: (e: React.FormEvent) => void; 
}) {
  return (
    <button
      type="submit" 
      className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 mt-4"
      onClick={onClick}  
    >
      {text}
    </button>
  );
}
