import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';

import StartScreen from '@pages/StartScreen';
import QuestionScreen from '@pages/QuestionScreen';
import { accent, dark } from '@src/constants/colors';

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
      headerRight: () => <Icon name="up" color={accent} />,
    }}>
    <Stack.Screen
      name="StartScreen"
      component={StartScreen}
      options={{ title: 'GeoQuiz' }}
    />
    <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
  </Stack.Navigator>
);

export default MainStack;
