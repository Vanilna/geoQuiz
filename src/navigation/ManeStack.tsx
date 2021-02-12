import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '@pages/StartScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = (): JSX.Element => (
  <Stack.Navigator initialRouteName="StartScreen">
    <Stack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainStack;
