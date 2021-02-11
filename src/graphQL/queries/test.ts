import { gql } from '@apollo/client';

const TEST_QUERY = gql`
  query test {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default TEST_QUERY;
