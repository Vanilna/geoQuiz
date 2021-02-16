import { gql } from '@apollo/client';

const GET_COUNTRY_DETAILS = gql`
  query getCountryDetails($countryCode: ID!) {
    country(code: $countryCode) {
      name
      code
      capital
      languages {
        code
        name
      }
      emoji
      currency
      continent {
        code
        name
      }
    }
  }
`;

export default GET_COUNTRY_DETAILS;
