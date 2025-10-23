"use client";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition w-full font-semibold"
    >
      {children}
    </button>
  );
}
