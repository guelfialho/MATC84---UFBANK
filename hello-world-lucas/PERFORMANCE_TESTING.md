# Guia de Comparação de Performance: SSR vs CSR

## 📋 Visão Geral

Este projeto permite comparar duas abordagens de renderização:

1. **SSR (Server-Side Rendering)** - `/dashboard-ssr`
   - Usa React Server Components
   - Dados são buscados e renderizados no servidor
   - HTML completo enviado ao cliente

2. **CSR (Client-Side Rendering)** - `/dashboard-csr`
   - Usa `'use client'` directive
   - Dados são buscados após o componente montar
   - Loading state e fetch no navegador

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build
npm start
```

Acesse: `http://localhost:3000`

## 📊 Ferramentas de Medição

### 1. Web Vitals (Integrado)

As métricas são automaticamente capturadas e exibidas no console:

- **LCP** (Largest Contentful Paint) - Bom: < 2.5s
- **FCP** (First Contentful Paint) - Bom: < 1.8s
- **CLS** (Cumulative Layout Shift) - Bom: < 0.1
- **INP** (Interaction to Next Paint) - Bom: < 200ms
- **TTFB** (Time to First Byte) - Bom: < 800ms

**Como usar:**
1. Abra DevTools (F12)
2. Vá para a aba Console
3. Navegue entre `/dashboard-ssr` e `/dashboard-csr`
4. Compare as métricas logadas

### 2. Chrome DevTools - Performance

**Passos:**
1. Abra DevTools (F12) → Performance
2. Clique no botão Record (●)
3. Recarregue a página (Ctrl+R)
4. Clique em Stop
5. Analise:
   - Tempo de parsing de JavaScript
   - Tempo de rendering
   - Tempo de pintura
   - Bloqueios na thread principal

**O que observar:**
- SSR: Mais tempo no servidor, menos JavaScript no cliente
- CSR: Menos tempo inicial, mas mais trabalho após carregamento

### 3. Chrome DevTools - Lighthouse

**Passos:**
1. Abra DevTools (F12) → Lighthouse
2. Selecione:
   - ✅ Performance
   - ✅ Desktop ou Mobile
   - ✅ Modo anônimo recomendado
3. Clique em "Analyze page load"
4. Compare os scores

**Métricas principais:**
- Performance Score (0-100)
- First Contentful Paint
- Largest Contentful Paint
- Time to Interactive (TTI)
- Total Blocking Time (TBT)
- Cumulative Layout Shift

### 4. Chrome DevTools - Network

**Como usar:**
1. Abra DevTools → Network
2. Limpe (🚫) e recarregue
3. Compare:

**SSR:**
- HTML inicial maior (dados já incluídos)
- Menos JavaScript transferido
- Primeiro byte pode ser mais lento

**CSR:**
- HTML inicial menor
- Mais JavaScript
- Requisição adicional para `/api/dashboard`
- Primeiro byte mais rápido

### 5. WebPageTest (Externo)

**URL:** https://www.webpagetest.org/

**Passos:**
1. Cole a URL do seu dashboard (use ngrok/tunnel se local)
2. Selecione localização e dispositivo
3. Configure:
   - Connection: Cable, 3G, 4G
   - Browser: Chrome
   - Runs: 3 (para média)
4. Compare resultados

**Métricas:**
- Start Render
- First Contentful Paint
- Speed Index
- Time to Interactive
- Total Bytes
- JavaScript Bytes

## 📈 Métricas Esperadas

### Dashboard SSR
| Métrica | Valor Esperado | Observação |
|---------|---------------|------------|
| TTFB | 300-800ms | Maior devido ao processamento no servidor |
| FCP | 800-1500ms | Rápido - HTML já vem com conteúdo |
| LCP | 1000-2000ms | Bom - conteúdo principal já renderizado |
| TTI | 1500-2500ms | Menos JavaScript para processar |
| JS Size | 150-250KB | Menor - Server Components não vão ao cliente |

### Dashboard CSR
| Métrica | Valor Esperado | Observação |
|---------|---------------|------------|
| TTFB | 50-200ms | Muito rápido - HTML básico |
| FCP | 500-1000ms | Rápido - shell da página |
| LCP | 1500-3000ms | Mais lento - aguarda dados da API |
| TTI | 2000-4000ms | Mais JavaScript para processar |
| JS Size | 250-400KB | Maior - todo código React no cliente |

## 🔍 Cenários de Teste

### Teste 1: Rede Rápida
- Desabilite throttling
- Compare tempo total até conteúdo visível

### Teste 2: Rede Lenta (Slow 3G)
1. DevTools → Network → Throttling → Slow 3G
2. Observe impacto em cada abordagem
3. SSR deve ter vantagem aqui

### Teste 3: Cache
1. Primeira visita (sem cache)
2. Segunda visita (com cache)
3. Compare diferenças

### Teste 4: JavaScript Desabilitado
1. DevTools → Settings → Debugger → Disable JavaScript
2. SSR: Funciona (conteúdo estático)
3. CSR: Não funciona (tela em branco)

## 📝 Checklist de Comparação

- [ ] Abrir ambos os dashboards em abas anônimas
- [ ] Limpar cache e recarregar
- [ ] Verificar métricas Web Vitals no console
- [ ] Executar Lighthouse em ambos
- [ ] Comparar tamanho de JavaScript (Network tab)
- [ ] Testar com throttling (Slow 3G)
- [ ] Capturar screenshots do Performance timeline
- [ ] Documentar diferenças observadas

## 🎯 Resultados Esperados

### SSR Vence em:
- ✅ SEO (conteúdo já renderizado)
- ✅ First Contentful Paint
- ✅ Menor JavaScript no cliente
- ✅ Funciona sem JavaScript habilitado
- ✅ Melhor em conexões lentas

### CSR Vence em:
- ✅ Time to First Byte
- ✅ Navegação inicial mais rápida
- ✅ Melhor para aplicações altamente interativas
- ✅ Servidor menos carregado
- ✅ Caching mais simples

## 🛠️ Troubleshooting

### Métricas não aparecem no console
- Recarregue a página
- Verifique se está em modo desenvolvimento
- Abra o console antes de navegar

### Lighthouse falha
- Feche outras abas
- Use modo anônimo
- Desabilite extensões

### API não responde
- Verifique se o servidor está rodando
- Confirme a porta (padrão: 3000)
- Para SSR, configure `NEXT_PUBLIC_BASE_URL` se necessário

## 📚 Recursos Adicionais

- [Web Vitals](https://web.dev/vitals/)
- [Next.js Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/)
- [WebPageTest Documentation](https://docs.webpagetest.org/)

## 🤝 Contribuindo

Para adicionar novos testes ou métricas:

1. Componentes estão em `/components`
2. API mock em `/app/api/dashboard/route.ts`
3. Páginas em `/app/dashboard-ssr` e `/app/dashboard-csr`
4. Web Vitals em `/components/molecules/WebVitalsReporter.tsx`
