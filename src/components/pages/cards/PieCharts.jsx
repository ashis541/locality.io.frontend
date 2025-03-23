import React from 'react';
import { PieChart as Pie, Pie as PieSection, Cell } from 'recharts';
import { CheckSquare } from 'lucide-react';

const PieChartCard = ({ title, value, color, description }) => {
  const data = [
    { value: value },
    { value: 100 - value }
  ];

  return (
    <div className="flex-1">
      <div className="bg-white rounded-lg shadow p-4 h-full">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 relative mb-2">
            <Pie width={96} height={96}>
              <PieSection
                data={data}
                dataKey="value"
                innerRadius={25}
                outerRadius={40}
                startAngle={90}
                endAngle={-270}
              >
                <Cell fill={color} />
                <Cell fill="#f0f0f0" />
              </PieSection>
            </Pie>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
              {value}%
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm font-medium">{title}</div>
          <div className="mt-2 text-xs text-gray-500 text-center">{description}</div>
        </div>
      </div>
    </div>
  );
};

const PieCharts = () => {
  const metrics = [
    { 
      title: 'Total Order', 
      value: 81, 
      color: '#ff7875',
      description: 'Compared to last month'
    },
    { 
      title: 'Customer Growth', 
      value: 22, 
      color: '#95de64',
      description: 'New customers this month'
    },
    { 
      title: 'Total Revenue', 
      value: 62, 
      color: '#69c0ff',
      description: 'Overall revenue increase'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
    {/* Header with checkbox */}
    <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
      <h2 className="text-lg font-semibold">Charts Overview</h2>
      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
          Chart
        </label>
        <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
          Show Value
        </label>
      </div>
    </div>
  
    {/* Charts container */}
    <div className="flex flex-wrap justify-center gap-6">
      {metrics.map((metric, index) => (
        <PieChartCard
          key={index}
          title={metric.title}
          value={metric.value}
          color={metric.color}
          description={metric.description}
        />
      ))}
    </div>
  </div>
  
  );
};

export default PieCharts;