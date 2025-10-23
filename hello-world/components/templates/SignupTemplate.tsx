import React from "react";
import { SignupForm } from "../organisms/SignupForm";
import { Heading } from "../atoms/Heading";

export const SignupTemplate = () => (
  <main className="min-h-screen bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-400 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <Heading level={1} className="text-4xl font-extrabold text-white mb-8 tracking-wide">UFBANK</Heading>
      <SignupForm />
    </div>
  </main>
);
