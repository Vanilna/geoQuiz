import WithBackground from '@templates/WithBackground';
import React from 'react';
import { Text } from 'react-native';

const Rules = () => (
  <WithBackground backgroundImage={require('@src/assets/img/world.jpg')}>
    <Text>Rules</Text>
  </WithBackground>
);

export default Rules;
