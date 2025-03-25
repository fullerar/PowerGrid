import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
import PowerList from './components/PowerList';

const client = new ApolloClient({
  // uri: "http://localhost:5000/graphql", // or your Heroku URL
  uri: "https://power-grid-20fa5a2c3507.herokuapp.com/",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Power Grid Dashboard ⚡</h2>
        <PowerList />
      </div>
    </ApolloProvider>
  );
}

export default App;
