"use client";
import React, { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

export const SignupForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simples validação
    const newErrors: { [k: string]: string } = {};
    if (!form.name) newErrors.name = "Nome obrigatório";
    if (!form.email) newErrors.email = "E-mail obrigatório";
    if (!form.password) newErrors.password = "Senha obrigatória";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      alert(`Usuário cadastrado: ${form.name}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm mx-auto">
      <FormField
        label="Nome"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />
      <FormField
        label="E-mail"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        label="Senha"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
