import React from "react";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ level = 2, children, className = "" }: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return (
    <Tag className={`font-bold text-center text-violet-800 ${className}`}>
      {children}
    </Tag>
  );
};