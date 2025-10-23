export const Label = ({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => (
  <label htmlFor={htmlFor} className="font-medium text-sm text-gray-700">
    {children}
  </label>
);
