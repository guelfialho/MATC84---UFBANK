"use client";

import { RegisterForm } from "../organisms/RegisterForm";

export function CadastroTemplate() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <RegisterForm />
    </main>
  );
}
