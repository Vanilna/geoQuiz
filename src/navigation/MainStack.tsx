import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '@pages/StartScreen';
import QuestionScreen from '@pages/QuestionScreen';

const Stack = createStackNavigator();

const MainStack: React.FC = (): JSX.Element => (
  <Stack.Navigator initialRouteName="StartScreen">
    <Stack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

export default MainStack;
