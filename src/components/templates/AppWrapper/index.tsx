import 'react-native-gesture-handler';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import client from '@gql/client';
import App from '@navigation/MainStack';

const AppWrapper: React.FC = (): JSX.Element => (
  <ApolloProvider client={client}>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </ApolloProvider>
);

export default AppWrapper;
