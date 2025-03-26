import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import PowerSearch from './components/PowerSearch';

const client = new ApolloClient({
  uri: "https://power-grid-20fa5a2c3507.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Power Grid Dashboard ⚡</h2>
        <PowerSearch />
      </div>
    </ApolloProvider>
  );
}

export default App;
