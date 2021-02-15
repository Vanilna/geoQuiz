import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import WithBackground from '@templates/WithBackground';
import Header from '@atoms/Header';
import CustomButton from '@atoms/CustomButton';
import { LEVELS } from '@src/constants/index';

const StartScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation();

  return (
    <WithBackground backgroundImage={require('@src/assets/img/world.jpg')}>
      <Header title="Test your Geo Knowledge" />
      <View>
        {LEVELS.map((level) => (
          <CustomButton
            label={level}
            clickHandler={() => navigation.navigate('QuestionScreen')}
            key={level}
          />
        ))}
      </View>
      <CustomButton label="Rules" clickHandler={() => {}} secondary />
    </WithBackground>
  );
};

export default StartScreen;
