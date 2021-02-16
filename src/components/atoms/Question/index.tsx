import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

type QuestionProps = {
  question?: string;
};

const Question: React.FC<QuestionProps> = ({ question }): JSX.Element => {
  return <Text style={styles.question}>{question}</Text>;
};

export default Question;
