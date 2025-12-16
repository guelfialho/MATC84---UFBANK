"use client";

import { FormEvent } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export function RegisterMachineValuesForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Valores da máquina cadastrados com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Valores da Máquina</h2>

      <FormField
        label="ID da Máquina"
        name="machineId"
        placeholder="Ex: 12345"
        required
      />

      <FormField
        label="Taxa Débito (%)"
        name="taxaDebito"
        type="number"
        placeholder="Ex: 1.99"
        required
      />

      <FormField
        label="Taxa Crédito à Vista (%)"
        name="taxaCreditoVista"
        type="number"
        placeholder="Ex: 3.10"
        required
      />

      <FormField
        label="Taxa Crédito Parcelado (%)"
        name="taxaCreditoParcelado"
        type="number"
        placeholder="Ex: 4.50"
        required
      />

      <FormField
        label="Número Máximo de Parcelas"
        name="maxParcelas"
        type="number"
        placeholder="Ex: 12"
        required
      />

      <FormField
        label="Prazo de Recebimento (dias)"
        name="prazoRecebimento"
        type="number"
        placeholder="Ex: 30"
        required
      />

      <Button type="submit">Salvar Valores</Button>
    </form>
  );
}
