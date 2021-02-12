import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import background from '@src/assets/img/world.jpg';
import Header from '@atoms/Header';
import CustomButton from '@atoms/CustomButton';
import { LEVELS } from '@src/constants/index';
import styles from './styles';

const StartScreen = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={background} style={styles.backgroundImage}>
      <Header title="Test your Geo Knowlage" />
      {LEVELS.map((level) => (
        <CustomButton label={level} clickHandler={() => {}} key={level} />
      ))}
      <CustomButton label="Rules" clickHandler={() => {}} secondary />
    </ImageBackground>
  </SafeAreaView>
);

export default StartScreen;
