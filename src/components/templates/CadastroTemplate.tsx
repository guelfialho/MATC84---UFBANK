import { MachineForm } from "../organism/MachineForm";

export function CadastroTemplate() {
  return (
    <main style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Cadastro de Máquina de Pagamento</h1>
      <MachineForm />
    </main>
  );
}
