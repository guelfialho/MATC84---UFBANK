import { RegistrationForm } from "@/components/organisms/RegistrationForm";

export default function CadastroPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Cadastro</h2>
        <RegistrationForm />
      </div>
    </div>
  );
}
