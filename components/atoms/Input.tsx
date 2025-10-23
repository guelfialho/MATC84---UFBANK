import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input: React.FC<InputProps> = ({ error, ...props }) => (
  <div className="flex flex-col gap-1">
    <input
      {...props}
      className={`border rounded p-2 focus:outline-none focus:ring-2 ${
        error ? "border-red-500 ring-red-200" : "border-gray-300 ring-blue-200"
      }`}
    />
    {error && <span className="text-sm text-red-500">{error}</span>}
  </div>
);
