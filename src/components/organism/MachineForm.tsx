"use client";

import { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export function MachineForm() {
  const [form, setForm] = useState({
    nome: "",
    modelo: "",
    serie: "",
    data: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Máquina cadastrada com sucesso!");
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Nome da Máquina" name="nome" onChange={handleChange} />
      <FormField label="Modelo" name="modelo" onChange={handleChange} />
      <FormField
        label="Número de Série"
        name="serie"
        type="number"
        onChange={handleChange}
      />
      <FormField
        label="Data de Aquisição"
        name="data"
        type="date"
        onChange={handleChange}
      />

      <Button text="Cadastrar" />
    </form>
  );
}


