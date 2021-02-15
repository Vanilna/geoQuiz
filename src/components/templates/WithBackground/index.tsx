import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';

import styles from './styles';

type WithBackgroundProps = {
  backgroundImage: ImageSourcePropType;
};

const WithBackground: React.FC<WithBackgroundProps> = ({
  children,
  backgroundImage,
}): JSX.Element => (
  <SafeAreaView style={styles.container}>
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  </SafeAreaView>
);

export default WithBackground;
