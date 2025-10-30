import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
          Comparação de Performance: SSR vs CSR
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Teste e compare as diferentes abordagens de renderização
        </p>

        {/* Cards de Dashboards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Link href="/dashboard-ssr" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-500">
              <div className="text-4xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Dashboard SSR</h2>
              <p className="text-gray-600 mb-4">
                React Server Components - Dados renderizados no servidor antes do envio ao cliente
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Melhor SEO</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Menos JavaScript no cliente</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">FCP mais rápido</span>
                </div>
              </div>
              <div className="mt-6 text-blue-600 group-hover:text-blue-700 font-medium">
                Testar SSR →
              </div>
            </div>
          </Link>

          <Link href="/dashboard-csr" className="group">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500">
              <div className="text-4xl mb-4">⚡</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Dashboard CSR</h2>
              <p className="text-gray-600 mb-4">
                Client-Side Rendering - Dados carregados dinamicamente no navegador
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">TTFB mais rápido</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Melhor para interatividade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-600">✓</span>
                  <span className="text-gray-700">Carga inicial menor</span>
                </div>
              </div>
              <div className="mt-6 text-orange-600 group-hover:text-orange-700 font-medium">
                Testar CSR →
              </div>
            </div>
          </Link>
        </div>

        {/* Guia de Medição */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Como Medir a Performance</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">1. Web Vitals (Console)</h3>
              <p className="text-gray-600 mb-2">
                Abra o DevTools (F12) e veja as métricas no console:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li><strong>LCP</strong> - Largest Contentful Paint (bom: &lt;2.5s)</li>
                <li><strong>FCP</strong> - First Contentful Paint (bom: &lt;1.8s)</li>
                <li><strong>CLS</strong> - Cumulative Layout Shift (bom: &lt;0.1)</li>
                <li><strong>INP</strong> - Interaction to Next Paint (bom: &lt;200ms)</li>
                <li><strong>TTFB</strong> - Time to First Byte (bom: &lt;800ms)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">2. Chrome DevTools</h3>
              <p className="text-gray-600 mb-2">Performance Panel:</p>
              <ol className="list-decimal list-inside text-gray-600 space-y-1 ml-4">
                <li>Abra DevTools → Performance</li>
                <li>Clique em Record (●) e recarregue a página</li>
                <li>Pare a gravação e analise o timeline</li>
                <li>Compare tempo de parsing de JS, rendering, etc.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">3. Lighthouse</h3>
              <p className="text-gray-600 mb-2">
                DevTools → Lighthouse → Generate Report
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Performance Score (0-100)</li>
                <li>First Contentful Paint</li>
                <li>Time to Interactive</li>
                <li>Total Blocking Time</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">4. Network Tab</h3>
              <p className="text-gray-600 mb-2">Compare a carga de JavaScript:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                <li>Tamanho total de JS transferido</li>
                <li>Número de requisições</li>
                <li>Tempo até primeira requisição completar</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-bold text-yellow-900 mb-2">💡 Dica</h4>
              <p className="text-yellow-800 text-sm">
                Teste em modo anônimo e com cache limpo para resultados mais precisos. 
                Use throttling de rede (Slow 3G) para simular conexões mais lentas.
              </p>
            </div>
          </div>
        </div>

        {/* Link para RegisterTemplate original */}
        <div className="mt-8 text-center">
          <Link 
            href="/register" 
            className="text-blue-600 hover:text-blue-700 underline"
          >
            Ver página de registro original
          </Link>
        </div>
      </div>
    </div>
  );
}