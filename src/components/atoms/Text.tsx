import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body' | 'caption';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body',
  className = '' 
}) => {
  const variants = {
    heading: 'text-2xl font-bold text-white',
    subheading: 'text-xl font-semibold text-gray-200',
    body: 'text-base text-gray-300',
    caption: 'text-sm text-gray-400'
  };

  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};
