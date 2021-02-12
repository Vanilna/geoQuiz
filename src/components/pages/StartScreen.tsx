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

const StartScreen = () => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={background} style={styles.backgroundImage}>
      <Header />
      <TouchableOpacity>
        <Text>rules</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>15 questions</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>20 questions</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>30 questions</Text>
      </TouchableOpacity>
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
