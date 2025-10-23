import React from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { InlineTextLink } from "../molecules/InlineTextLink";

export const SignupForm = () => (
  <form className="bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-md mx-auto">
    <Heading level={2} className="text-2xl mb-6">Crie sua conta</Heading>

    <FormField id="name" label="Nome completo" placeholder="Fulano Sicrano da Silva" />
    <FormField id="email" label="E-mail" type="email" placeholder="exemplo@mail.com" />
    <FormField id="password" label="Senha" type="password" placeholder="Digite a senha" />
    <FormField id="confirm" label="Confirmar senha" type="password" placeholder="Repita a senha" />

    <Button type="submit" className="mt-4">Cadastrar</Button>

    <InlineTextLink text="Já tem conta?" linkText="Entrar" href="#"/>
  </form>
);
