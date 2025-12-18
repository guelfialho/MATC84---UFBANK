"use client";

import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';

export const LoggedTemplate: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    try {
      localStorage.removeItem('ufbank_auth');
    } catch {
      // ignore
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12 text-center">
        <Text variant="heading" className="mb-4">Logado com sucesso!</Text>
        <Text variant="body" className="text-gray-400 mb-6">Você está autenticado.</Text>
        <Button variant="outline" onClick={handleLogout} className="mx-auto flex items-center gap-2">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Sair
        </Button>
      </div>
    </div>
  );
};
