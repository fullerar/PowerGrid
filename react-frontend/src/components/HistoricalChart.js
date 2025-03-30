import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HISTORICAL } from '../graphql/queries';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// Utility to group data by timestamp
function formatHistoricalData(rawData) {
  const grouped = {};

  rawData.forEach(({ datetime, source, power }) => {
    if (!grouped[datetime]) {
      grouped[datetime] = { datetime };
    }
    grouped[datetime][source] = power;
  });

  return Object.values(grouped).sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
}

function HistoricalChart({ zone }) {
  if (zone !== 'US-MIDA-PJM') {
    return (
      <div
        style={{
          marginTop: '2rem',
          color: '#f39c12',
          backgroundColor: '#1e1e1e',
          padding: '1rem',
          borderRadius: '8px',
        }}
      >
        ⚠️ Historical data for this zone is not available on your current ElectricityMap plan.
      </div>
    );
  }
  const { loading, error, data } = useQuery(GET_HISTORICAL, { variables: { zone } });

  if (loading) return <p>Loading historical data...</p>;
  if (error) return <p>Error loading historical data.</p>;

  const formattedData = formatHistoricalData(data.historicalSources);

  // Get list of all unique energy sources (for dynamic lines)
  const allSources = Array.from(new Set(data.historicalSources.map((item) => item.source)));

  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        padding: '1rem',
        borderRadius: '8px',
        marginTop: '2rem',
        height: '400px',
      }}
    >
      <h4>📈 Power Trends Over Last 24 Hours</h4>
      <ResponsiveContainer>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          {allSources.map((source) => (
            <Line
              key={source}
              type="monotone"
              dataKey={source}
              stroke={'#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')}
              dot={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HistoricalChart;
