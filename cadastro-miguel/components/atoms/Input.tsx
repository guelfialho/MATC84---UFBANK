"use client";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        {...props}
        className="border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
      />
    </div>
  );
}
