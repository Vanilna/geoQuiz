import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from '@atoms/CustomButton/styles';

type CustomButtonProps = {
  label: string;
  clickHandler: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  clickHandler,
}): JSX.Element => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="rgba(0,0,0,0.7)"
    onPress={clickHandler}
    style={styles.button}>
    <Text style={styles.label}>{label}</Text>
  </TouchableHighlight>
);

export default CustomButton;
