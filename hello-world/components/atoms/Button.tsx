"use client";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "w-full rounded-xl py-2.5 font-semibold transition duration-200";
  const styles =
    variant === "primary"
      ? "bg-violet-700 hover:bg-violet-800 text-white shadow-md"
      : "bg-gray-200 hover:bg-gray-300 text-gray-700";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
