import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_SOURCES } from '../graphql/queries';

function PowerList() {
  const { loading, error, data } = useQuery(GET_SOURCES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data 😢</p>;

  return (
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
  );
}

export default PowerList;
