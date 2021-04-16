import React, { useRef } from 'react';
import { PanResponder, View, Animated, Dimensions } from 'react-native';

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
import { Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const THRESHOLD = 0.25 * SCREEN_WIDTH;

const answers = ['First', 'Second', 'Third', 'Forth'];

const QuestionScreen: React.FC = (): JSX.Element => {
  const { countries } = client.readQuery({ query: GET_COUNTRIES });
  const country = getRandomCountry(countries);
  const { question, loading, error } = useCreateQuestion(country);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx >= THRESHOLD) {
          Animated.spring(pan, {
            toValue: { x: SCREEN_WIDTH * 10, y: 0 },
            useNativeDriver: true,
          }).start();
        } else if (gesture.dx <= -THRESHOLD) {
          Animated.spring(pan, {
            toValue: { x: -SCREEN_WIDTH * 10, y: 0 },
            useNativeDriver: true,
          }).start();
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const getCardStyle = () => {
    const rotate = pan.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-45deg', '0deg', '45deg'],
    });
    return {
      transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate }],
    };
  };

  return (
    <WithBackground backgroundImage={require('@src/assets/img/map.jpg')}>
      {!loading && !error && (
        <Animated.View style={getCardStyle()} {...panResponder.panHandlers}>
          <Card>
            <Card.Title>
              <Question question={question} />
            </Card.Title>
            <Card.Divider />
            <View style={styles.answersContainer}>
              {answers.map((answer) => (
                <CustomButton
                  label={answer}
                  clickHandler={() => {}}
                  key={answer}
                />
              ))}
            </View>
          </Card>
        </Animated.View>
      )}

      {loading && <Question question="Loading..." />}

      {error && (
        <Question question="Something went wrong. Please try again later." />
      )}
    </WithBackground>
  );
};

export default QuestionScreen;
