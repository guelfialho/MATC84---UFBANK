"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";

interface MachineFormProps {
  onSubmit?: (machine: { nome: string; modelo: string; serie: string; data: string }) => void;
  onCancel?: () => void;
}

export function MachineForm({ onSubmit, onCancel }: MachineFormProps) {
  const [form, setForm] = useState({
    nome: "",
    modelo: "",
    serie: "",
    data: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
      setForm({ nome: "", modelo: "", serie: "", data: "" });
    } else {
      alert("Máquina cadastrada com sucesso!");
      console.log(form);
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
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
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
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="flex gap-4">
        {onCancel && (
          <Button variant="secondary" className="flex-1" onClick={onCancel} type="button">
            Cancelar
          </Button>
        )}
        <Button variant="primary" className={onCancel ? "flex-1" : "w-full"} type="submit">
          Cadastrar
        </Button>
      </div>
    </form>
  );
}


