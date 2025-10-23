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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md mx-auto flex flex-col gap-4"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        Cadastro de Usuário
      </h2>

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
