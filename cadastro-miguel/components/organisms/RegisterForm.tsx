"use client";

import { FormEvent } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export function RegisterForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Cadastro realizado!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro de Usuário</h2>
      <FormField
        label="Nome completo"
        name="nome"
        placeholder="Digite seu nome"
        required
      />
      <FormField
        label="E-mail"
        name="email"
        type="email"
        placeholder="Digite seu e-mail"
        required
      />
      <FormField
        label="Senha"
        name="senha"
        type="password"
        placeholder="Crie uma senha"
        required
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
}
