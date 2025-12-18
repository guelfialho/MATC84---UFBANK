'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faPlus, faSignOutAlt, faCashRegister, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Modal } from '../molecules/Modal';
import { MachineForm } from '../organism/MachineForm';
import MachineFeeForm, { MachineFees } from '../organism/MachineFeeForm';

interface Machine {
  id: string;
  nome: string;
  modelo: string;
  serie: string;
  data: string;
  fees?: MachineFees;
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
  const [editingMachine, setEditingMachine] = useState<Machine | null>(null);
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);
  const [feeEditingMachine, setFeeEditingMachine] = useState<Machine | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('machines', JSON.stringify(machines));
    }
  }, [machines]);

  const handleAddMachine = (machine: { nome: string; modelo: string; serie: string; data: string }) => {
    if (editingMachine) {
      setMachines(machines.map(m => 
        m.id === editingMachine.id ? { ...m, ...machine } : m
      ));
      setEditingMachine(null);
    } else {
      const newMachine: Machine = {
        id: Date.now().toString(),
        ...machine,
        fees: undefined,
      };
      setMachines(prev => [...prev, newMachine]);
      setFeeEditingMachine(newMachine);
      setIsFeeModalOpen(true);
    }
    setIsModalOpen(false);
  };

  const handleDeleteMachine = (id: string) => {
    setMachines(machines.filter(m => m.id !== id));
  };

  const handleEditMachine = (machine: Machine) => {
    setEditingMachine(machine);
    setIsModalOpen(true);
  };

  const handleOpenFeeModal = (machine: Machine) => {
    setFeeEditingMachine(machine);
    setIsFeeModalOpen(true);
  };

  const handleSaveFees = (machineId: string, fees: MachineFees) => {
    setMachines(prev => prev.map(m => m.id === machineId ? { ...m, fees } : m));
    setFeeEditingMachine(null);
    setIsFeeModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingMachine(null);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('ufbank_auth');
    } catch {
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
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
                      {machine.data ? machine.data.split('-').reverse().join('/') : ''}
                    </Text>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditMachine(machine)}
                    className="flex-1 px-4 py-2 bg-blue-900/20 border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-all text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                    Editar
                  </button>
                  <button
                    onClick={() => handleOpenFeeModal(machine)}
                    className="px-3 py-2 bg-yellow-900/20 border border-yellow-500/50 text-yellow-300 rounded-lg hover:bg-yellow-900/40 transition-all text-sm font-semibold"
                  >
                    Alterar Taxas
                  </button>
                  <button
                    onClick={() => handleDeleteMachine(machine.id)}
                    className="flex-1 px-4 py-2 bg-red-900/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-900/40 transition-all text-sm font-semibold"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title={editingMachine ? "Editar Máquina" : "Nova Máquina"}
      >
        <MachineForm 
          onSubmit={handleAddMachine}
          onCancel={handleCloseModal}
          initialValues={editingMachine ? {
            nome: editingMachine.nome,
            modelo: editingMachine.modelo,
            serie: editingMachine.serie,
            data: editingMachine.data
          } : undefined}
          isEditing={!!editingMachine}
        />
      </Modal>

      <Modal
        isOpen={isFeeModalOpen}
        onClose={() => { setIsFeeModalOpen(false); setFeeEditingMachine(null); }}
        title={feeEditingMachine ? `Taxas - ${feeEditingMachine.nome}` : 'Editar Taxas'}
      >
        {feeEditingMachine && (
          <MachineFeeForm
            machineId={feeEditingMachine.id}
            initial={feeEditingMachine.fees}
            onSave={handleSaveFees}
            onClose={() => { setIsFeeModalOpen(false); setFeeEditingMachine(null); }}
          />
        )}
      </Modal>
    </div>
  );
};
