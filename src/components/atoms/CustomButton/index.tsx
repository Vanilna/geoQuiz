import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

import styles from '@atoms/CustomButton/styles';

type CustomButtonProps = {
  label: string;
  clickHandler: () => void;
  secondary?: Boolean;
};

const isSecondary = (type: boolean) => (type ? styles.secondary : styles.main);

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  clickHandler,
  secondary,
}): JSX.Element => (
  <TouchableHighlight
    activeOpacity={0.6}
    underlayColor="rgba(0,0,0,0.7)"
    onPress={clickHandler}
    style={[styles.shared, isSecondary(!!secondary)]}>
    <Text style={styles.label}>{label}</Text>
  </TouchableHighlight>
);

export default CustomButton;
