import { MachineForm } from "../organism/MachineForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../atoms/Text';

export function CadastroTemplate() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-8 md:p-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-900/50 rounded-full mb-4 ring-2 ring-purple-500/50">
            <FontAwesomeIcon icon={faCreditCard} className="text-2xl text-purple-400"/>
          </div>
          <Text variant="heading" className="mb-2">
            Cadastro de Máquina de Pagamento
          </Text>
          <Text variant="body" className="text-gray-400">
            Preencha os dados da máquina abaixo
          </Text>
        </div>
        <MachineForm />
      </div>
    </div>
  );
}
