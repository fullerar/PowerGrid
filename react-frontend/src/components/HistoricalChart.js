// src/components/HistoricalChart.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HISTORICAL } from '../graphql/queries';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Helper to format the raw GraphQL data
function formatHistoricalData(rawData) {
  const grouped = {};

  rawData.forEach(({ datetime, source, power }) => {
    if (!grouped[datetime]) grouped[datetime] = { datetime };
    grouped[datetime][source] = power;
  });

  return Object.values(grouped);
}

function HistoricalChart({ zone }) {
  const { loading, error, data } = useQuery(GET_HISTORICAL, {
    variables: { zone }
  });

  // Handle unsupported zones *after* the hook
  if (zone !== "US-MIDA-PJM") {
    return (
      <div style={{
        marginTop: '2rem',
        color: '#f39c12',
        backgroundColor: '#1e1e1e',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        ⚠️ Historical data for this zone is not available on your current ElectricityMap plan.
      </div>
    );
  }

  if (loading) return <p>Loading historical data...</p>;
  if (error) return <p>Error loading historical data.</p>;

  const formattedData = formatHistoricalData(data.historicalSources);
  const allSources = Array.from(
    new Set(data.historicalSources.map(item => item.source))
  );

  return (
    <div style={{
      backgroundColor: '#1f1f1f',
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '2rem',
      height: '400px'
    }}>
      <h4>📈 Power Trends Over Last 24 Hours</h4>
      <ResponsiveContainer>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          {allSources.map(source => (
            <Line
              key={source}
              type="monotone"
              dataKey={source}
              stroke={"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0')}
              dot={false}
            />
          ))}
        </Line
