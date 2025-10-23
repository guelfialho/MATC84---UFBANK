import React from "react";
import { SignupForm } from "../organisms/SignupForm";

export const SignupTemplate = () => (
  <main className="min-h-screen bg-gradient-to-br from-violet-900 via-violet-800 to-indigo-400 flex items-center justify-center">
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 tracking-wide">
        UFBANK
      </h1>
      <SignupForm />
    </div>
  </main>
);
