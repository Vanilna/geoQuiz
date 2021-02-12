import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from '@gql/client';
import TestComponent from '@atoms/Test';

const AppWrapper: React.FC = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TestComponent />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default AppWrapper;
