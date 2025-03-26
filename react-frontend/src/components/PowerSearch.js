// src/components/PowerSearch.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SOURCES } from '../graphql/queries';
import LatestChart from './LatestChart';

function PowerSearch() {
  const [filter, setFilter] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_SOURCES, {
    variables: { name: '' }, // default load all
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch({ name: filter.trim() || null });
  };

  return (
    <div>
      <h3>🔎 Search for an Energy Source</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g. wind, nuclear..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Error loading data 😢</p>}

        {data && data.sources.length > 0 ? (
          <>
            <LatestChart data={data.sources} />

            <table>
              <thead>
                <tr>
                  <th>Energy Source</th>
                  <th>Power (MW)</th>
                </tr>
              </thead>
              <tbody>
                {data.sources.map((source) => (
                  <tr key={source.name}>
                    <td>{source.name}</td>
                    <td>{source.power}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          !loading && <p>No results found.</p>
        )}
    </div>
  );
}

export default PowerSearch;
