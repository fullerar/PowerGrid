// src/components/PowerSearch.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SOURCES } from '../graphql/queries';
import LatestChart from './LatestChart';
import ZoneSelector from './ZoneSelector';


function PowerSearch({ zone, setZone }) {
  const [filter, setFilter] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_SOURCES, {
    variables: { name: filter.trim() || null, zone },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch({ name: filter.trim() || '', zone: zone });
  };

    return (
      <div style={{   padding: '1rem',
          maxWidth: '1000px',
          margin: '0 auto',
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
        {/* Top Row: Text on left, Chart on right */}
        <ZoneSelector
          selectedZone={zone}
          onChange={(newZone) => {
            setZone(newZone);
            refetch({ name: filter.trim() || null, zone: newZone });
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <h3>🔎 Search for an Energy Source</h3>
            <p>You can view specific power sources by name. Try searching for <i>wind</i>, <i>solar</i>, or <i>nuclear</i>.</p>
          </div>

          <div style={{ flex: 1, minWidth: '350px', minHeight: '400px' }}>
            <LatestChart data={data?.sources?.sources || []} />
          </div>
        </div>

        {/* Search bar */}
        <form onSubmit={handleSearch} style={{ marginTop: '2rem' }}>
            <input
              type="text"
              placeholder="e.g. wind, nuclear..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              style={{
                padding: '0.5rem',
                width: '250px',
                marginRight: '1rem',
                backgroundColor: '#2a2a2a',
                color: '#f0f0f0',
                border: '1px solid #555',
                borderRadius: '4px'
              }}
            />
          <button type="submit" style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#03DAC5',
              color: '#000',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Search
            </button>
        </form>

        {/* Data table */}
        {loading && <p>Loading...</p>}
        {error && <p>Error loading data 😢</p>}

        {loading && <p>Loading...</p>}
        {error && <p>Error loading data 😢</p>}

        {data && data.sources?.sources?.length > 0 ? (
          <>
            <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>
              ⚡ Total Output: {data.sources.totalPowerOutput.toFixed(2)} MW
            </p>
            <table style={{ marginTop: '1.5rem', width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', borderBottom: '1px solid #555', padding: '0.5rem 0' }}>Energy Source</th>
                  <th style={{ textAlign: 'left', borderBottom: '1px solid #555', padding: '0.5rem 0' }}>Power (MW)</th>
                </tr>
              </thead>
              <tbody>
                {data.sources.sources.map((source) => (
                  <tr key={source.name}>
                    <td style={{ padding: '0.5rem 0' }}>{source.name}</td>
                    <td>{source.power}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          !loading && (
            <div style={{ marginTop: '1rem', color: '#f39c12' }}>
              ⚠️ This zone may not be supported on your current ElectricityMap plan.
            </div>
          )
        )}
      </div>
    );
}

export default PowerSearch;
