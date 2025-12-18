"use client";

import { useState } from "react";
import { FormField } from "../molecules/FormField";
import { SelectField } from "../molecules/SelectField";
import { Button } from "../atoms/Button";
import { machines } from "../../data/machines";

export function MachineValuesForm() {
  const [form, setForm] = useState({
    machineId: "",
    percentualCobrado: "",
    percentualRepassado: "",
  });

  const selectedMachine = machines.find(
    (m) => m.id === Number(form.machineId)
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    // Máquina: apenas números
    if (name === "machineId" && !/^\d*$/.test(value)) return;

    // Percentuais: apenas números positivos
    if (
      (name === "percentualCobrado" || name === "percentualRepassado") &&
      !/^\d*$/.test(value)
    )
      return;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.machineId) {
      alert("Selecione uma máquina.");
      return;
    }

    alert("Valores cadastrados com sucesso!");
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectField
        label="Máquina"
        name="machineId"
        value={form.machineId}
        onChange={handleChange}
      >
        <option value="">Selecione</option>
        {machines.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nome} - {m.modelo}
          </option>
        ))}
      </SelectField>

      {selectedMachine && (
        <div
          style={{
            marginTop: "16px",
            padding: "12px",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <strong>Dados da Máquina</strong>
          <p>Nome: {selectedMachine.nome}</p>
          <p>Modelo: {selectedMachine.modelo}</p>
          <p>ID: {selectedMachine.id}</p>
          <p>Data de Cadastro: {selectedMachine.dataCadastro}</p>
        </div>
      )}

      <FormField
        label="% Cobrado"
        name="percentualCobrado"
        value={form.percentualCobrado}
        onChange={handleChange}
      />

      <FormField
        label="% Repassado"
        name="percentualRepassado"
        value={form.percentualRepassado}
        onChange={handleChange}
      />

      <Button text="Salvar Valores" />
    </form>
  );
}
