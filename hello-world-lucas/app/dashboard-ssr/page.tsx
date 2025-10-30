import { DashboardStats } from '@/components/organisms/DashboardStats';
import { RecentActivities } from '@/components/organisms/RecentActivities';
import { ChartComponent } from '@/components/organisms/ChartComponent';
import { WebVitalsReporter } from '@/components/molecules/WebVitalsReporter';
import Link from 'next/link';

// Função para buscar dados no servidor
async function getDashboardData() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/dashboard`, {
    // Desabilita cache para sempre buscar dados atualizados
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch dashboard data');
  }

  return res.json();
}

export default async function DashboardSSRPage() {
  // Dados são buscados no servidor (React Server Component)
  const data = await getDashboardData();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard SSR</h1>
            <p className="text-gray-600 mt-1">React Server Components - Dados renderizados no servidor</p>
          </div>
          <div className="flex gap-2">
            <Link 
              href="/dashboard-ssr" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
            >
              SSR
            </Link>
            <Link 
              href="/dashboard-csr" 
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
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
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-bold text-blue-900 mb-2">ℹ️ Sobre esta abordagem (SSR)</h3>
          <ul className="text-sm text-blue-900 space-y-1">
            <li>✅ Dados são buscados no servidor antes do render</li>
            <li>✅ HTML completo é enviado ao cliente</li>
            <li>✅ Melhor SEO e tempo de First Contentful Paint</li>
            <li>✅ Menor JavaScript enviado ao cliente</li>
            <li>⚠️ TTFB (Time to First Byte) pode ser maior</li>
          </ul>
        </div>
      </div>

      <WebVitalsReporter dashboardType="SSR" />
    </div>
  );
}
