 'use client';

import React, { useEffect, useState } from 'react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import { useRouter } from 'next/navigation';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
};

const STORAGE_KEY = 'ufbank_users';

function getStoredUsers(): User[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as User[];
  } catch {
    return [];
  }
}

function setStoredUsers(users: User[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Ensure admin user exists
  useEffect(() => {
    try {
      const users = getStoredUsers();
      const exists = users.some(u => u.email === 'admin@teste.com');
      if (!exists) {
        users.push({ firstName: 'Admin', lastName: 'Teste', email: 'admin@teste.com', phone: '', password: 'admin' });
        setStoredUsers(users);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError('Preencha todos os campos obrigatórios.');
      return;
    }
    if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    const users = getStoredUsers();
    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      setError('Já existe uma conta com este e-mail.');
      return;
    }

    const newUser: User = { firstName, lastName, email, phone, password };
    users.push(newUser);
    setStoredUsers(users);
    setSuccess('Conta criada com sucesso! Redirecionando para login...');
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Nome"
          placeholder="Digite seu nome"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormField
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <FormField
        label="E-mail"
        type="email"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormField
        label="Telefone"
        type="tel"
        placeholder="(00) 00000-0000"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <FormField
        label="Senha"
        type="password"
        placeholder="Crie uma senha"
        helperText="Mínimo de 8 caracteres"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <FormField
        label="Confirmar Senha"
        type="password"
        placeholder="Digite a senha novamente"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {success && <p className="text-green-400 text-sm">{success}</p>}

      <div className="pt-4">
        <Button variant="primary" className="w-full" onClick={() => handleSubmit()}>
          Criar Conta
        </Button>
      </div>
    </form>
  );
};
