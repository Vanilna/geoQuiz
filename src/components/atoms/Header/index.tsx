import React from 'react';
import { Text } from 'react-native';

import styles from '@atoms/Header/styles';

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }): JSX.Element => (
  <Text style={styles.header}>{title}</Text>
);

export default Header;
