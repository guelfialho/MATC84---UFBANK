'use client';

import { useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

interface WebVitalsReporterProps {
  dashboardType: 'SSR' | 'CSR';
}

export function WebVitalsReporter({ dashboardType }: WebVitalsReporterProps) {
  useEffect(() => {
    const sendToAnalytics = (metric: Metric) => {
      const body = JSON.stringify({
        dashboardType,
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      });

      // Log no console para análise
      console.log(`[${dashboardType}] ${metric.name}:`, {
        value: metric.value,
        rating: metric.rating,
      });

      // Aqui você pode enviar para um serviço de analytics
      // navigator.sendBeacon('/api/analytics', body);
    };

    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    onINP(sendToAnalytics);
  }, [dashboardType]);

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white text-xs p-3 rounded-lg shadow-lg">
      <div className="font-bold mb-1">Web Vitals: {dashboardType}</div>
      <div className="text-gray-300">Check Console for metrics</div>
    </div>
  );
}
