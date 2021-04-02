import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
// import { NavigationContainer } from '@react-navigation/native';
import client from '@gql/client';
// import MainStack from '@navigation/MainStack';
import App from '@navigation/MainStack';

const AppWrapper: React.FC = (): JSX.Element => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default AppWrapper;
