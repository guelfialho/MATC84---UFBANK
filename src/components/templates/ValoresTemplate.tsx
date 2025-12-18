import { MachineValuesForm } from "../organism/MachineValuesForm";

export function ValoresTemplate() {
  return (
    <main style={{ maxWidth: 500, margin: "40px auto" }}>
      <h1>Cadastro de Valores da Máquina</h1>
      <MachineValuesForm />
    </main>
  );
}
