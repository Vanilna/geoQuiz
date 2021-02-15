import React from 'react';
import { View, Text } from 'react-native';

import WithBackground from '@templates/WithBackground';
import CustomButton from '@atoms/CustomButton';
import styles from './styles';

const answers = ['First', 'Second', 'Third', 'Forth'];

const QuestionScreen: React.FC = (): JSX.Element => {
  return (
    <WithBackground backgroundImage={require('@src/assets/img/map.jpg')}>
      <Text style={styles.question}>What is the capital of Argentina?</Text>
      <View style={styles.answersContainer}>
        {answers.map((answer) => (
          <CustomButton label={answer} clickHandler={() => {}} key={answer} />
        ))}
      </View>
    </WithBackground>
  );
};

export default QuestionScreen;
