interface ChartData {
  month: string;
  value: number;
}

interface ChartComponentProps {
  data: ChartData[];
}

export function ChartComponent({ data }: ChartComponentProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Estatísticas Mensais</h2>
      <div className="flex items-end justify-between gap-2 h-64">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1 gap-2">
              <div className="relative w-full bg-gray-100 rounded-t-lg overflow-hidden" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-blue-500 transition-all duration-300 hover:bg-blue-600"
                  style={{ height: `${height}%` }}
                  title={`${item.month}: ${item.value}`}
                />
              </div>
              <span className="text-xs text-gray-500">{item.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
