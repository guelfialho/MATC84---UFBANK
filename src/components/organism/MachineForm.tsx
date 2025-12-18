"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";

interface MachineFormProps {
  onSubmit?: (machine: { nome: string; modelo: string; serie: string; data: string }) => void;
  onCancel?: () => void;
  initialValues?: { nome: string; modelo: string; serie: string; data: string };
  isEditing?: boolean;
}

export function MachineForm({ onSubmit, onCancel, initialValues, isEditing }: MachineFormProps) {
  const [form, setForm] = useState(
    initialValues || {
      nome: "",
      modelo: "",
      serie: "",
      data: "",
    }
  );

  const [error, setError] = useState<string | null>(null);
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayStr = `${yyyy}-${mm}-${dd}`;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.data) {
      setError('Preencha a data de aquisição.');
      return;
    }
    const selected = new Date(form.data);
    const today = new Date();
    selected.setHours(0,0,0,0);
    today.setHours(0,0,0,0);
    if (selected > today) {
      setError('A data de aquisição não pode ser no futuro.');
      return;
    }

    if (onSubmit) {
      onSubmit(form);
      setForm({ nome: "", modelo: "", serie: "", data: "" });
      setError(null);
    } else {
      alert("Máquina cadastrada com sucesso!");
      console.log(form);
      setError(null);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Nome da Máquina</label>
        <input
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Modelo</label>
        <input
          name="modelo"
          type="text"
          value={form.modelo}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Número de Série</label>
        <input
          name="serie"
          type="number"
          value={form.serie}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Data de Aquisição</label>
        <input
          name="data"
          type="date"
          value={form.data}
          onChange={handleChange}
          required
          max={todayStr}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>

      <div className="flex gap-4">
        {onCancel && (
          <Button variant="secondary" className="flex-1" onClick={onCancel} type="button">
            Cancelar
          </Button>
        )}
        <Button variant="primary" className={onCancel ? "flex-1" : "w-full"} type="submit">
          {isEditing ? "Salvar" : "Cadastrar"}
        </Button>
      </div>
    </form>
  );
}


