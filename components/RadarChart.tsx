import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SkillItem } from '../types';

interface SkillsRadarProps {
  data: SkillItem[];
  darkMode: boolean;
}

const SkillsRadar: React.FC<SkillsRadarProps> = ({ data, darkMode }) => {
  // Transform 0-100 to full value for chart
  const chartData = data.map(d => ({
    subject: d.name,
    A: d.level,
    fullMark: 100,
  }));

  const strokeColor = darkMode ? '#5eead4' : '#14b8a6'; // Mint 300 vs Mint 500
  const fillColor = darkMode ? '#2dd4bf' : '#99f6e4';
  const textColor = darkMode ? '#e2e8f0' : '#334155';
  const gridColor = darkMode ? '#334155' : '#cbd5e1';

  return (
    <div className="w-full h-[350px] sm:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
          <PolarGrid stroke={gridColor} />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: textColor, fontSize: 12, fontWeight: 600 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skill Level"
            dataKey="A"
            stroke={strokeColor}
            strokeWidth={3}
            fill={fillColor}
            fillOpacity={0.4}
          />
          <Tooltip 
             contentStyle={{ 
               backgroundColor: darkMode ? '#1e293b' : '#ffffff',
               borderColor: strokeColor,
               borderRadius: '8px',
               color: textColor
             }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;