import { gql } from '@apollo/client';

export const GET_SOURCES = gql`
  query GetSources($name: String) {
    sources(name: $name) {
      name
      power
    }
  }
`;

export const GET_HISTORICAL = gql`
  query {
    historicalSources {
      datetime
      source
      power
    }
  }
`;