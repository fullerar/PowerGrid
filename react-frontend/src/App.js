import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import PowerSearch from './components/PowerSearch';
import HistoricalChart from './components/HistoricalChart';

const client = new ApolloClient({
  uri: 'https://power-grid-20fa5a2c3507.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [zone, setZone] = useState('US-MIDA-PJM');

  return (
    <ApolloProvider client={client}>
      <div
        style={{
          backgroundColor: '#121212',
          color: '#f0f0f0',
          minHeight: '100vh',
          padding: '2rem',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: '600' }}>⚡ Power Grid Dashboard</h2>
        </div>

        <PowerSearch zone={zone} setZone={setZone} />
        <HistoricalChart zone={zone} />
      </div>
    </ApolloProvider>
  );
}

export default App;
