"use client";

import { FormEvent } from "react";
import { FormField } from "../molecules/FormField";
import { SelectField } from "../molecules/SelectField";
import { Button } from "../atoms/Button";

export function RegisterMachineForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Máquina cadastrada com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Máquina de Pagamento</h2>

      {/* Dados da Empresa */}
      <h3>Dados da Empresa</h3>
      <FormField
        label="Nome da Empresa"
        name="empresa"
        placeholder="Digite o nome da empresa"
        required
      />
      <FormField
        label="CNPJ"
        name="cnpj"
        placeholder="00.000.000/0000-00"
        required
      />

      {/* Dados da Máquina */}
      <h3>Dados da Máquina</h3>
      <SelectField
        label="Modelo da Máquina"
        name="modelo"
        required
        options={[
          { value: "pos-basica", label: "POS Básica" },
          { value: "pos-wifi", label: "POS Wi-Fi" },
          { value: "pos-chip", label: "POS Chip + Wi-Fi" },
        ]}
      />

      <SelectField
        label="Tipo de Conexão"
        name="conexao"
        required
        options={[
          { value: "wifi", label: "Wi-Fi" },
          { value: "4g", label: "4G / Chip" },
        ]}
      />

      {/* Endereço */}
      <h3>Endereço de Entrega</h3>
      <FormField label="CEP" name="cep" required />
      <FormField label="Rua" name="rua" required />
      <FormField label="Número" name="numero" required />
      <FormField label="Complemento" name="complemento" />
      <FormField label="Cidade" name="cidade" required />
      <FormField label="Estado" name="estado" required />

      <Button type="submit">Cadastrar Máquina</Button>
    </form>
  );
}
