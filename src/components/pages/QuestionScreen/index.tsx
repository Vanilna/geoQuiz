import React from 'react';
import { View } from 'react-native';

import client from '@gql/client';
import { GET_COUNTRIES } from '@gql/queries/getCountries';
import {
  getRandomCountry,
  useCreateQuestion,
} from '@src/utils/generateQuestion';

import WithBackground from '@templates/WithBackground';
import CustomButton from '@atoms/CustomButton';
import Question from '@atoms/Question';
import styles from './styles';

const answers = ['First', 'Second', 'Third', 'Forth'];

const QuestionScreen: React.FC = (): JSX.Element => {
  const { countries } = client.readQuery({ query: GET_COUNTRIES });
  const country = getRandomCountry(countries);
  const { question, loading, error } = useCreateQuestion(country);

  return (
    <WithBackground backgroundImage={require('@src/assets/img/map.jpg')}>
      {!loading && !error && (
        <>
          <Question question={question} />
          <View style={styles.answersContainer}>
            {answers.map((answer) => (
              <CustomButton
                label={answer}
                clickHandler={() => {}}
                key={answer}
              />
            ))}
          </View>
        </>
      )}

      {loading && <Question question="Loading..." />}

      {error && (
        <Question question="Something went wrong. Please try again later." />
      )}
    </WithBackground>
  );
};

export default QuestionScreen;
