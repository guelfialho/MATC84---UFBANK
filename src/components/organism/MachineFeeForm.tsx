"use client";

import React, { useState } from "react";

const PRESET = {
  pix: 3,
  debit: 5,
  credit: 10,
} as const;

type PaymentKey = keyof typeof PRESET;

export type FeeConfig = {
  total: number;
  customer: number;
  user: number;
};

export type MachineFees = {
  pix: FeeConfig;
  debit: FeeConfig;
  credit: FeeConfig;
};

interface Props {
  machineId: string;
  initial?: MachineFees;
  onSave: (machineId: string, fees: MachineFees) => void;
  onClose: () => void;
}

function defaultFees(): MachineFees {
  return {
    pix: { total: PRESET.pix, customer: 0, user: PRESET.pix },
    debit: { total: PRESET.debit, customer: 0, user: PRESET.debit },
    credit: { total: PRESET.credit, customer: 0, user: PRESET.credit },
  };
}

export const MachineFeeForm: React.FC<Props> = ({ machineId, initial, onSave, onClose }) => {
  const [fees, setFees] = useState<MachineFees>(initial ?? defaultFees());
  const [simValue, setSimValue] = useState<number | "">("");
  const [simType, setSimType] = useState<PaymentKey>("credit");
  const [simResult, setSimResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  function setCustomerShare(key: PaymentKey, customer: number | string) {
    const total = fees[key].total;
    let cust = Number(customer) || 0;
    if (cust < 0) cust = 0;
    if (cust > total) cust = total;
    // round to one decimal place
    cust = Math.round(cust * 10) / 10;
    const user = Math.round((total - cust) * 10) / 10;
    setFees({ ...fees, [key]: { total, customer: cust, user } });
    setError(null);
  }

  function handleSave() {
    // validate
    for (const k of Object.keys(fees) as PaymentKey[]) {
      const f = fees[k];
      if (f.customer < 0 || f.user < 0 || Math.abs(f.customer + f.user - f.total) > 0.0001) {
        setError('As parcelas devem somar a taxa total para todos os meios de pagamento.');
        return;
      }
    }
    onSave(machineId, fees);
    onClose();
  }

  function simulate() {
    const value = Number(simValue);
    if (!value || value <= 0) {
      setError('Insira um valor de compra válido para simular.');
      return;
    }
    const fee = fees[simType];
    const feeTotalAmount = +(value * (fee.total / 100));
    const customerFeeAmount = +(value * (fee.customer / 100));
    const userFeeAmount = +(value * (fee.user / 100));
    const customerPays = +(value + customerFeeAmount);
    const youPay = +userFeeAmount;
    const profitTotal = +(customerPays - youPay);
    setSimResult({ value, feeTotalAmount, customerFeeAmount, userFeeAmount, customerPays, youPay, profitTotal });
    setError(null);
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-400">Edite como a taxa do banco será dividida entre o cliente e você. A soma das parcelas deve ser igual à taxa total pré-definida.</p>

      {(Object.keys(PRESET) as PaymentKey[]).map((k) => (
        <div key={k} className="bg-gray-900 border border-gray-700 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-sm text-gray-300 font-semibold">{k === 'pix' ? 'PIX' : k === 'debit' ? 'Débito' : 'Crédito'}</p>
              <p className="text-xs text-yellow-300 font-bold">Taxa fixa: {fees[k].total}%</p>
            </div>
            <div className="w-48">
              <label className="text-xs text-gray-400">Cliente (%)</label>
              <input
                type="number"
                step="0.1"
                inputMode="decimal"
                min={0}
                max={fees[k].total}
                value={fees[k].customer}
                onChange={(e) => setCustomerShare(k, e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
              <p className="text-xs text-gray-500 mt-1">Você: {fees[k].user}%</p>
            </div>
          </div>
        </div>
      ))}

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="pt-4 flex gap-3">
        <button onClick={onClose} className="flex-1 px-4 py-2 bg-gray-700 rounded-lg text-gray-200">Cancelar</button>
        <button onClick={handleSave} className="flex-1 px-4 py-2 bg-purple-600 rounded-lg text-white">Salvar Taxas</button>
      </div>

      <hr className="border-gray-700 my-4" />

      <div>
        <p className="text-sm text-gray-300 font-semibold mb-2">Simulação de Compra</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input type="number" placeholder="Valor (ex: 100)" value={simValue} onChange={(e) => setSimValue(e.target.value === '' ? '' : Number(e.target.value))} className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white" />
          <select value={simType} onChange={(e) => setSimType(e.target.value as PaymentKey)} className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white">
            <option value="credit">Crédito</option>
            <option value="debit">Débito</option>
            <option value="pix">PIX</option>
          </select>
          <button onClick={simulate} className="px-4 py-2 bg-emerald-600 rounded-lg text-white">Simular</button>
        </div>

        {simResult && (
          <div className="mt-4 bg-gray-900 border border-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">Valor original: R$ {simResult.value.toFixed(2)}</p>
            <p className="text-sm text-gray-300">Taxa total ({fees[simType].total}%): R$ {simResult.feeTotalAmount.toFixed(2)}</p>
            <p className="text-sm text-gray-300">Parcela do cliente ({fees[simType].customer}%): R$ {simResult.customerFeeAmount.toFixed(2)}</p>
            <p className="text-sm text-gray-300">Parcela sua ({fees[simType].user}%): R$ {simResult.userFeeAmount.toFixed(2)}</p>
            <p className="text-sm text-green-400 font-semibold">Cliente paga no final: R$ {simResult.customerPays.toFixed(2)}</p>
            <p className="text-sm text-yellow-300">Quanto você paga: R$ {simResult.youPay.toFixed(2)}</p>
            <p className="text-sm text-emerald-300 font-semibold">Lucro total: R$ {simResult.profitTotal.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineFeeForm;
