import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from '@gql/client';
import StartScreen from '@pages/StartScreen';

const AppWrapper: React.FC = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <StartScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default AppWrapper;
