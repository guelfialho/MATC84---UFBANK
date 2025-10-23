"use client";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className = "", ...props }: InputProps) => (
  <input
    className={`w-full border border-violet-300 rounded-xl px-4 py-2 bg-white text-gray-900
                placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none ${className}`}
    {...props}
  />
);
