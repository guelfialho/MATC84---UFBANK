import React from 'react';

interface CheckboxProps {
  label: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        className="w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 cursor-pointer"
      />
      <label className="ml-2 text-sm text-gray-300 cursor-pointer">
        {label}
      </label>
    </div>
  );
};
