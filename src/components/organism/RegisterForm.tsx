import React from 'react';
import { FormField } from '../molecules/FormField';
import { Button } from '../atoms/Button';

export const RegisterForm: React.FC = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField 
          label="Nome" 
          placeholder="Digite seu nome"
        />
        <FormField 
          label="Sobrenome" 
          placeholder="Digite seu sobrenome"
        />
      </div>

      <FormField 
        label="E-mail" 
        type="email"
        placeholder="email@gmail.com"
      />

      <FormField 
        label="Telefone" 
        type="tel"
        placeholder="(00) 00000-0000"
      />

      <FormField 
        label="Senha" 
        type="password"
        placeholder="Crie uma senha"
        helperText="Mínimo de 8 caracteres"
      />

      <FormField 
        label="Confirmar Senha" 
        type="password"
        placeholder="Digite a senha novamente"
      />

      <div className="pt-4">
        <Button variant="primary" className="w-full">
          Criar Conta
        </Button>
      </div>
    </form>
  );
};
