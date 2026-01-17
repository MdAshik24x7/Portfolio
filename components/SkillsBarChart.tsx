import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Rectangle
} from 'recharts';
import { SkillItem } from '../types';

interface SkillsBarChartProps {
  data: SkillItem[];
  darkMode: boolean;
}

const SkillsBarChart: React.FC<SkillsBarChartProps> = ({ data, darkMode }) => {
  const textColor = darkMode ? '#cbd5e1' : '#475569'; // slate-300 : slate-600
  const gridColor = darkMode ? '#334155' : '#e2e8f0'; // slate-700 : slate-200
  const tooltipBg = darkMode ? '#1e293b' : '#ffffff';
  
  const getLevelInfo = (level: number) => {
    if (level >= 90) return { text: 'Master', color: darkMode ? '#2dd4bf' : '#0d9488' }; // Mint
    if (level >= 75) return { text: 'Expert', color: darkMode ? '#60a5fa' : '#2563eb' }; // Blue
    if (level >= 60) return { text: 'Advanced', color: darkMode ? '#818cf8' : '#4f46e5' }; // Indigo
    if (level >= 40) return { text: 'Intermediate', color: darkMode ? '#fbbf24' : '#d97706' }; // Amber
    return { text: 'Beginner', color: darkMode ? '#f87171' : '#dc2626' }; // Red
  };

  // Sort data for better visualization and inject level info
  const sortedData = [...data].sort((a, b) => b.level - a.level).map(item => ({
    ...item,
    ...getLevelInfo(item.level)
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div 
          className="p-3 border rounded-lg shadow-lg"
          style={{ 
            backgroundColor: tooltipBg, 
            borderColor: dataPoint.color,
            color: darkMode ? '#f1f5f9' : '#0f172a' 
          }}
        >
          <p className="font-bold mb-1">{label}</p>
          <div className="flex items-center gap-2 text-sm">
             <span>Proficiency:</span>
             <span className="font-mono font-semibold" style={{ color: dataPoint.color }}>
               {payload[0].value}%
             </span>
             <span 
               className="text-xs px-2 py-0.5 rounded-full text-white"
               style={{ backgroundColor: dataPoint.color }}
             >
               {dataPoint.text}
             </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[220px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sortedData}
          layout="vertical"
          margin={{ top: 0, right: 80, left: 30, bottom: 0 }}
          barCategoryGap={4}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} horizontal={true} vertical={false} opacity={0.3} />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={90}
            tick={{ fill: textColor, fontSize: 12, fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            orientation="right"
            yAxisId="right"
            dataKey="name"
            type="category"
            width={90}
            tick={({ x, y, payload }) => {
                const item = sortedData.find(d => d.name === payload.value);
                if (!item) return null;
                return (
                    <text x={x} y={y} dy={4} textAnchor="start" fill={item.color} fontSize={10} fontWeight={600}>
                        {item.text} ({item.level}%)
                    </text>
                );
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ fill: darkMode ? '#334155' : '#f1f5f9', opacity: 0.1 }} 
          />
          <Bar 
            dataKey="level" 
            radius={[0, 3, 3, 0]} 
            barSize={12}
            animationDuration={1500}
            animationBegin={300} // Delay for better entrance
            activeBar={(props: any) => {
              const { x, y, width, height } = props;
              const item = sortedData.find(d => d.level === props.payload.level);
              return (
                <Rectangle
                  x={x}
                  y={y - 1}
                  width={width}
                  height={height + 2}
                  fill={item ? item.color : (darkMode ? '#5eead4' : '#0d9488')}
                  radius={[0, 3, 3, 0]}
                  className="filter drop-shadow-sm transition-all duration-200"
                />
              );
            }}
          >
            {sortedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsBarChart;