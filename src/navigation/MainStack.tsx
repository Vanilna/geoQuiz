/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import StartScreen from '@pages/StartScreen';
import QuestionScreen from '@pages/QuestionScreen';
import { accent, dark } from '@src/constants/colors';
import { NavigationContainer } from '@react-navigation/native';
import Rules from '@pages/Rules';
import Learning from '@pages/Learning';

const Stack = createStackNavigator();

const MainStack: React.FC = (): JSX.Element => (
  <Stack.Navigator
    initialRouteName="StartScreen"
    screenOptions={{
      headerStyle: {
        backgroundColor: dark,
      },
      headerTitleStyle: {
        color: accent,
        textTransform: 'uppercase',
        alignSelf: 'center',
      },
      headerTintColor: accent,
    }}>
    <Stack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ title: 'GeoQuiz' }}
    />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="MainStack" component={MainStack} />
        <Drawer.Screen name="Rules" component={Rules} />
        <Drawer.Screen name="Learning" component={Learning} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
