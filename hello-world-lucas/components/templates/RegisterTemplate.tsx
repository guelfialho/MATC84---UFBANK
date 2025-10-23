import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';
import { RegisterForm } from '../organisms/RegisterForm';

export const RegisterTemplate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-block p-3 bg-purple-900/50 rounded-full mb-4 ring-2 ring-purple-500/50">
            <FontAwesomeIcon icon={faUserPlus} className="w-8 h-8 text-purple-400"/>
          </div>
          <Text variant="heading" className="mb-2">
            Criar Nova Conta
          </Text>
          <Text variant="body" className="text-gray-400">
            Preencha seus dados abaixo
          </Text>
        </div>

        <RegisterForm/>

        <div className="mt-8 text-center">
          <Text variant="caption">
            Já tem uma conta?{' '}
            <a href="#" className="text-purple-400 font-semibold hover:text-purple-300 hover:underline transition-colors">
              Fazer login
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
};
