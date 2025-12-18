import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  className?: string;
}

export const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder, 
  label,
  className = '' 
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${className}`}
      />
    </div>
  );
};
