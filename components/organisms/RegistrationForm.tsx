"use client";
import { useState } from "react";
import { FormField } from "../molecules/FormField";
import { Button } from "../atoms/Button";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.username) newErrors.username = "Escolha um nome de usuário";
    if (!formData.email) newErrors.email = "Forneça um email";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.password) newErrors.password = "Escolha uma senha";
    else if (formData.password.length < 6)
      newErrors.password = "Senha deve ter pelo menos 6 caracteres";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Senhas não coincidem";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log(formData);
    alert("Cadastro realizado!");
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        id="username"
        name="username"
        label="Usuário"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
      />
      <FormField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormField
        id="password"
        name="password"
        label="Senha"
        type="password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="mb-6">
        <FormField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirmar Senha"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
      </div>
      <Button type="submit">Cadastrar</Button>
    </form>
  );
};
