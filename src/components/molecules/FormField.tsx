import React from 'react';
import { Input } from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  name?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type,
  placeholder,
  helperText,
  error,
  name,
  value,
  onChange
}) => {
  return (
    <div className="w-full">
      <Input
        label={label}
        type={type}
        placeholder={placeholder}
        className={error ? 'border-red-500' : ''}
        name={name}
        value={value}
        onChange={onChange}
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
