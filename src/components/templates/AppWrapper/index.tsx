import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import client from '@gql/client';
import MainStack from '@navigation/MainStack';

const AppWrapper: React.FC = (): JSX.Element => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </ApolloProvider>
);

export default AppWrapper;
