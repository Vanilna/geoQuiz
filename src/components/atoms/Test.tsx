import React from 'react';
import { useTestQuery } from '@gql/queries/test.generated';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const TestComponent: React.FC = (): JSX.Element => {
  const { data, loading, error } = useTestQuery();
  console.log(data);
  return loading || error ? (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {loading && <Text>Loading...</Text>}
        {error && <Text>error</Text>}
      </SafeAreaView>
    </>
  ) : (
    <Text>test</Text>
  );
};

export default TestComponent;
