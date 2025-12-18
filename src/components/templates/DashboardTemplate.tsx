'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPlus, faSignOutAlt, faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Modal } from '../molecules/Modal';
import { MachineForm } from '../organism/MachineForm';

interface Machine {
  id: string;
  nome: string;
  modelo: string;
  serie: string;
  data: string;
}

export const DashboardTemplate: React.FC = () => {
  const [machines, setMachines] = useState<Machine[]>(() => {
    if (typeof window !== 'undefined') {
      const storedMachines = localStorage.getItem('machines');
      if (storedMachines) {
        return JSON.parse(storedMachines);
      }
    }
    return [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (machines.length > 0 || localStorage.getItem('machines')) {
      localStorage.setItem('machines', JSON.stringify(machines));
    }
  }, [machines]);

  const handleAddMachine = (machine: { nome: string; modelo: string; serie: string; data: string }) => {
    const newMachine: Machine = {
      id: Date.now().toString(),
      ...machine
    };
    setMachines([...machines, newMachine]);
    setIsModalOpen(false);
  };

  const handleDeleteMachine = (id: string) => {
    setMachines(machines.filter(m => m.id !== id));
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('ufbank_auth');
    } catch (e) {
      // ignore
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/50 rounded-full ring-2 ring-purple-500/50">
                <FontAwesomeIcon icon={faCreditCard} className="text-2xl text-purple-400"/>
              </div>
              <div>
                <Text variant="heading">Dashboard de Máquinas</Text>
                <Text variant="body" className="text-gray-400">
                  Gerencie suas máquinas de pagamento
                </Text>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="primary" 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPlus} />
                Nova Máquina
              </Button>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faSignOutAlt} />
                Sair
              </Button>
            </div>
          </div>
        </div>

        {machines.length === 0 ? (
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-12 text-center">
            <FontAwesomeIcon icon={faCreditCard} className="text-6xl text-gray-600 mb-4" />
            <Text variant="subheading" className="mb-2">Nenhuma máquina cadastrada</Text>
            <Text variant="body" className="text-gray-400 mb-6">
              Comece adicionando sua primeira máquina de pagamento
            </Text>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Adicionar Primeira Máquina
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machines.map((machine) => (
              <div 
                key={machine.id}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon icon={faCashRegister} className="text-xl text-purple-400" />
                    </div>
                    <div>
                      <Text variant="subheading" className="text-lg">{machine.nome}</Text>
                      <Text variant="caption" className="text-gray-500">{machine.modelo}</Text>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <Text variant="caption" className="text-gray-500">Série:</Text>
                    <Text variant="caption" className="text-gray-300">{machine.serie}</Text>
                  </div>
                  <div className="flex justify-between">
                    <Text variant="caption" className="text-gray-500">Data:</Text>
                    <Text variant="caption" className="text-gray-300">
                      {new Date(machine.data).toLocaleDateString('pt-BR')}
                    </Text>
                  </div>
                </div>

                <button
                  onClick={() => handleDeleteMachine(machine.id)}
                  className="w-full px-4 py-2 bg-red-900/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-900/40 transition-all text-sm font-semibold"
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Nova Máquina"
      >
        <MachineForm 
          onSubmit={handleAddMachine}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};
