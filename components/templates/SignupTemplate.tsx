import { SignupForm } from "../organisms/SignupForm";

export const SignupTemplate = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
    <h1 className="text-2xl font-bold mb-6">Crie sua conta</h1>
    <SignupForm />
  </div>
);
