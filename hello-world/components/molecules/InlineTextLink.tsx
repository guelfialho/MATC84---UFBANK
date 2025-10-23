import React from "react";
import { TextLink } from "../atoms/TextLink";

type InlineTextLinkProps = {
  text: string;
  linkText: string;
  href: string;
};

export const InlineTextLink = ({ text, linkText, href }: InlineTextLinkProps) => (
  <p className="text-sm text-center text-gray-600 mt-4">
    {text} <TextLink href={href}>{linkText}</TextLink>
  </p>
);