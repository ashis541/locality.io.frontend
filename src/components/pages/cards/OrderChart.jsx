import React from 'react';
import { Download } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const OrderChart = () => {
  const data = [
    { name: 'Sunday', orders: 300 },
    { name: 'Monday', orders: 350 },
    { name: 'Tuesday', orders: 400 },
    { name: 'Wednesday', orders: 456 },
    { name: 'Thursday', orders: 380 },
    { name: 'Friday', orders: 420 },
    { name: 'Saturday', orders: 450 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded-lg border">
          <p className="text-sm font-semibold">{payload[0].value} Orders</p>
          <p className="text-xs text-gray-500">{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Chart Order</h2>
          <p className="text-sm text-gray-500">Track your weekly orders</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50">
          <Download size={16} />
          Save Report
        </button>
      </div>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {/* Define Darker Blue Gradient */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity={0.7} />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />

            {/* Area with Darker Blue Gradient */}
            <Area type="monotone" dataKey="orders" stroke="none" fill="url(#areaGradient)" />

            {/* Darker Blue Line */}
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ fill: '#2563eb', stroke: '#2563eb', strokeWidth: 2, r: 4 }}
              activeDot={{ fill: '#2563eb', stroke: 'white', strokeWidth: 2, r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderChart;
