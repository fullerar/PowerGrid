import { gql } from '@apollo/client';

export const GET_SOURCES = gql`
  query GetSources($name: String, $zone: String!) {
    sources(name: $name, zone: $zone) {
      totalPowerOutput
      sources {
        name
        power
      }
    }
  }
`;


export const GET_HISTORICAL = gql`
  query GetHistorical($zone: String!) {
    historicalSources(zone: $zone) {
      datetime
      source
      power
    }
  }
`;
