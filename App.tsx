import { useQuery } from '@apollo/client';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import TEST_QUERY from './src/graphQL/queries/test';

declare const global: { HermesInternal: null | {} };

const App = () => {
  const { data, loading, error } = useQuery(TEST_QUERY);

  if (loading || error) {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          {loading && <Text>Loading...</Text>}
          {error && <Text>error</Text>}
        </SafeAreaView>
      </>
    );
  }

  console.log(data);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>test</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
