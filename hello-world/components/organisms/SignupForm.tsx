import React from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export const SignupForm = () => (
  <form className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto">
    <h2 className="text-2xl font-bold text-center mb-6 text-violet-800">
      Crie sua conta UFBANK
    </h2>

    <FormField id="name" label="Nome completo" placeholder="Fulano Sicrano da Silva" />
    <FormField id="email" label="E-mail" type="email" placeholder="exemplo@mail.com" />
    <FormField id="password" label="Senha" type="password" placeholder="Digite a senha" />
    <FormField id="confirm" label="Confirmar senha" type="password" placeholder="Repita a senha" />

    <Button type="submit" className="mt-4">Cadastrar</Button>

    <p className="text-sm text-center text-gray-600 mt-4">
      Já tem conta?{" "}
      <a href="#" className="text-violet-700 hover:underline font-medium">
        Entrar
      </a>
    </p>
  </form>
);
