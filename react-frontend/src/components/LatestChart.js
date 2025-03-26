import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

function LatestChart({ data }) {
  if (!data || data.length === 0) return <p>No data available for chart.</p>;

  return (
    <div style={{
          backgroundColor: '#1f1f1f',
          padding: '1rem',
          borderRadius: '8px',
          marginTop: '2rem',
          height: '400px'
        }}>
      <h4>⚡ Energy Mix (Latest)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 80, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" label={{ value: 'MW', position: 'insideBottomRight', offset: -5 }} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="power" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LatestChart;
