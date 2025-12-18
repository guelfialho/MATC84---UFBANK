import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className = '',
  onClick
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105';
  
  const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/20',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 shadow-md',
    outline: 'border-2 border-purple-600 text-purple-400 hover:bg-purple-900/30'
  };

  return (
    <button type="button" onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
