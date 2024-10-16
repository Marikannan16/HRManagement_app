import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = ({ title, pieData, COLORS }) => {
  return (
    <div>
      <div
        className="bg-white rounded-lg border shadow-lg p-3 -mt-20"
        style={{ height: '240px', width: '350px', marginLeft: '16rem' }} >
        <h5>Compliance status</h5>
        <ResponsiveContainer width="100%" height={200} >
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={70}
              dataKey="value"
              isAnimationActive={false} >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Piechart;
