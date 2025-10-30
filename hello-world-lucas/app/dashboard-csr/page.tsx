'use client';

import { useState, useEffect } from 'react';
import { DashboardStats } from '@/components/organisms/DashboardStats';
import { RecentActivities } from '@/components/organisms/RecentActivities';
import { ChartComponent } from '@/components/organisms/ChartComponent';
import { WebVitalsReporter } from '@/components/molecules/WebVitalsReporter';
import Link from 'next/link';

interface DashboardData {
  stats: Array<{
    id: number;
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
  }>;
  recentActivities: Array<{
    id: number;
    user: string;
    action: string;
    time: string;
  }>;
  chartData: Array<{
    month: string;
    value: number;
  }>;
}

export default function DashboardCSRPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dados são buscados no cliente após o componente montar
    fetch('/api/dashboard')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando dados...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-xl font-bold">Erro ao carregar dados</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard CSR</h1>
            <p className="text-gray-600 mt-1">Client-Side Rendering - Dados carregados no cliente</p>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/dashboard-ssr" 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
            >
              SSR
            </Link>
            <Link 
              href="/dashboard-csr" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
            >
              CSR
            </Link>
            <Link 
              href="/" 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
            >
              Home
            </Link>
          </div>
        </div>

        {/* Stats */}
        <DashboardStats stats={data.stats} />

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartComponent data={data.chartData} />
          <RecentActivities activities={data.recentActivities} />
        </div>

        {/* Informações técnicas */}
        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-bold text-orange-900 mb-2">ℹ️ Sobre esta abordagem (CSR)</h3>
          <ul className="text-sm text-orange-900 space-y-1">
            <li>✅ TTFB (Time to First Byte) mais rápido</li>
            <li>✅ Página inicial carrega rapidamente</li>
            <li>✅ Melhor para aplicações interativas</li>
            <li>⚠️ Maior JavaScript enviado ao cliente</li>
            <li>⚠️ Conteúdo aparece após carregamento de dados</li>
            <li>⚠️ SEO pode ser comprometido</li>
          </ul>
        </div>
      </div>

      <WebVitalsReporter dashboardType="CSR" />
    </div>
  );
}
