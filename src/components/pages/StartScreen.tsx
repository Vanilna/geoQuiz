import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import background from '@src/assets/img/world.jpg';
import Header from '@atoms/Header';
import CustomButton from '@atoms/CustomButton';

const StartScreen = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={background} style={styles.backgroundImage}>
      <Header title="Test your Geo Knowlage" />
      <TouchableOpacity>
        <Text>rules</Text>
      </TouchableOpacity>
      <CustomButton label="15 questions" clickHandler={() => {}} />
      <CustomButton label="20 questions" clickHandler={() => {}} />
      <CustomButton label="30 questions" clickHandler={() => {}} />
    </ImageBackground>
  </SafeAreaView>
);

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
