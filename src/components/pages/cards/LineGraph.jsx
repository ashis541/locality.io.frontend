import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', line1: 40, line2: 45 },
  { month: 'Feb', line1: 35, line2: 50 },
  { month: 'Mar', line1: 45, line2: 40 },
  { month: 'Apr', line1: 30, line2: 60 },
  { month: 'May', line1: 45, line2: 35 },
  { month: 'Jun', line1: 35, line2: 40 },
  { month: 'Jul', line1: 25, line2: 50 },
  { month: 'Aug', line1: 10, line2: 25 },
  { month: 'Sept', line1: 35, line2: 40 },
  { month: 'Oct', line1: 15, line2: 10 },
  { month: 'Nov', line1: 48, line2: 80 },
  { month: 'Dec', line1: 47, line2: 90 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-lg rounded-lg border">
        <p className="text-sm font-semibold mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p 
            key={index} 
            className="text-xs"
            style={{ color: entry.stroke }}
          >
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const LineGraph = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Performance Overview</h2>
        <p className="text-sm text-gray-500">Monthly comparison of key metrics</p>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF9B9B" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#FF9B9B" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#B8B5FF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#B8B5FF" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
              stroke="#E5E5E5"
            />
            
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dy={10}
              label={{ 
                value: 'Months', 
                position: 'bottom',
                offset: 0,
                style: { fontSize: 12, fill: '#666' }
              }}
            />
            
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dx={-10}
              label={{ 
                value: 'Values', 
                angle: -90, 
                position: 'insideLeft',
                style: { fontSize: 12, fill: '#666' }
              }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Legend 
              verticalAlign="top" 
              height={36}
              formatter={(value) => (
                <span className="text-sm text-gray-600">
                  {value === 'line1' ? 'Revenue' : 'Users'}
                </span>
              )}
            />
            
            <Area
              type="monotone"
              dataKey="line1"
              name="Revenue"
              stroke="#FF9B9B"
              strokeWidth={2}
              fill="url(#gradient1)"
              fillOpacity={1}
              dot={{ fill: '#FF9B9B', strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            
            <Area
              type="monotone"
              dataKey="line2"
              name="Users"
              stroke="#B8B5FF"
              strokeWidth={2}
              fill="url(#gradient2)"
              fillOpacity={1}
              dot={{ fill: '#B8B5FF', strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;