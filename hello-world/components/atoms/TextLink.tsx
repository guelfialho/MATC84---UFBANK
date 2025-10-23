import React from "react";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const TextLink = ({ href, children, className = "" }: TextLinkProps) => (
  <a
    href={href}
    className={`text-violet-700 hover:underline font-medium ${className}`}
  >
    {children}
  </a>
);