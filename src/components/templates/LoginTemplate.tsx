'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';
import { Checkbox } from '../atoms/Checkbox';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const LoginTemplate: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/machines');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/50 rounded-full mb-4 ring-2 ring-purple-500/50">
            <FontAwesomeIcon icon={faUniversity} className="text-2xl text-purple-400"/>
          </div>
          <Text variant="heading" className="mb-2">
            Bem-vindo de volta
          </Text>
          <Text variant="body" className="text-gray-400">
            Faça login na sua conta
          </Text>
        </div>

        <form className="space-y-4">
          <FormField 
            label="E-mail" 
            type="email"
            placeholder="email@gmail.com"
          />

          <FormField 
            label="Senha" 
            type="password"
            placeholder="Digite sua senha"
          />

          <div className="flex items-center justify-between">
            <Checkbox label="Lembrar-me" />
            <a href="#" className="text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors">
              Esqueceu a senha?
            </a>
          </div>

          <div className="pt-4">
            <Button variant="primary" className="w-full" onClick={() => router.push('/machines')}>
              Entrar
            </Button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <Text variant="caption">
            Não tem uma conta?{' '}
            <Link href="/cadastro" className="text-purple-400 font-semibold hover:text-purple-300 hover:underline transition-colors">
              Cadastrar-se
            </Link>
          </Text>
        </div>
      </div>
    </div>
  );
};
