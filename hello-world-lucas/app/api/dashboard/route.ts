import { NextResponse } from 'next/server';

// Simula uma API que retorna dados do dashboard
export async function GET() {
  // Simula latência de rede
  await new Promise(resolve => setTimeout(resolve, 300));

  const data = {
    stats: [
      { id: 1, title: 'Total de Usuários', value: '10,523', change: '+12.5%', trend: 'up' },
      { id: 2, title: 'Vendas do Mês', value: 'R$ 45.2K', change: '+8.2%', trend: 'up' },
      { id: 3, title: 'Taxa de Conversão', value: '3.24%', change: '-2.1%', trend: 'down' },
      { id: 4, title: 'Tempo Médio', value: '4m 32s', change: '+0.5%', trend: 'up' },
    ],
    recentActivities: [
      { id: 1, user: 'João Silva', action: 'Completou cadastro', time: '2 min atrás' },
      { id: 2, user: 'Maria Santos', action: 'Realizou compra', time: '5 min atrás' },
      { id: 3, user: 'Pedro Costa', action: 'Atualizou perfil', time: '12 min atrás' },
      { id: 4, user: 'Ana Lima', action: 'Comentou post', time: '18 min atrás' },
      { id: 5, user: 'Carlos Oliveira', action: 'Compartilhou conteúdo', time: '25 min atrás' },
    ],
    chartData: Array.from({ length: 12 }, (_, i) => ({
      month: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'][i],
      value: Math.floor(Math.random() * 5000) + 2000,
    })),
  };

  return NextResponse.json(data);
}
