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
import { Button } from 'react-native';
import { DrawerNavigationOptions } from '@react-navigation/drawer/lib/typescript/src/types';

const Stack = createStackNavigator();

const MainStack: React.FC = (): JSX.Element => (
  <Stack.Navigator initialRouteName="StartScreen" screenOptions={header}>
    <Stack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ title: 'GeoQuiz' }}
    />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

const header = ({ navigation }): DrawerNavigationOptions => ({
  headerShown: true,
  headerStyle: {
    backgroundColor: dark,
  },
  headerTitleStyle: {
    color: accent,
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
  headerTintColor: accent,
  headerRight: () => (
    <Button
      title="drawer"
      onPress={() => {
        navigation.toggleDrawer();
      }}
    />
  ),
  headerLeft: () => null,
});

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Geoquiz" component={MainStack} />
        <Drawer.Screen name="Rules" component={Rules} options={header} />
        <Drawer.Screen name="Learning" component={Learning} options={header} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
