"use client";

import { useState } from "react";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";

export function MachineForm() {
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
    alert("Máquina cadastrada com sucesso!");
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Nome da Máquina</label>
        <input
          name="nome"
          type="text"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Modelo</label>
        <input
          name="modelo"
          type="text"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Número de Série</label>
        <input
          name="serie"
          type="number"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Data de Aquisição</label>
        <input
          name="data"
          type="date"
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
        />
      </div>

      <Button variant="primary" className="w-full">
        Cadastrar
      </Button>
    </form>
  );
}


