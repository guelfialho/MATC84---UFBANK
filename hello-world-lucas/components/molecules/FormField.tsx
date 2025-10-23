import React from 'react';
import { Input } from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  type, 
  placeholder,
  helperText,
  error
}) => {
  return (
    <div className="w-full">
      <Input 
        label={label} 
        type={type} 
        placeholder={placeholder}
        className={error ? 'border-red-500' : ''}
      />
      {helperText && !error && (
        <p className="mt-1 text-xs text-gray-500">{helperText}</p>
      )}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};
