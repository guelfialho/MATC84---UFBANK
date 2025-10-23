"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: "12px" }}>
      {label && (
        <label style={{ display: "block", marginBottom: "4px" }}>{label}</label>
      )}
      <input {...props} />
    </div>
  );
}
