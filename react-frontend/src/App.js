import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import PowerSearch from './components/PowerSearch';
import HistoricalChart from './components/HistoricalChart';

const client = new ApolloClient({
  uri: "https://power-grid-20fa5a2c3507.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div style={{
        backgroundColor: '#121212',
        color: '#f0f0f0',
        minHeight: '100vh',
        padding: '2rem',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{
              marginBottom: '2rem',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: '600'
            }}>
              ⚡ Power Grid Dashboard
            </h2>
        <PowerSearch />
        <HistoricalChart />
      </div>
    </ApolloProvider>
  );
}

export default App;
