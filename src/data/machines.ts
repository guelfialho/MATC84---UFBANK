export interface Machine {
  id: number;
  nome: string;
  modelo: string;
  dataCadastro: string
}

export const machines: Machine[] = [
  { id: 1, nome: "MAQUINA A", modelo: "Modelo do bom", dataCadastro: "2023-08-01" },
  { id: 2, nome: "Maquininha B", modelo: "Model Y", dataCadastro: "2023-09-15" },
  { id: 3, nome: "Maquininha C", modelo: "Model Z", dataCadastro: "2023-10-01" },
];
