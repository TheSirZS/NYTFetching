import React from 'react';

import {Text} from 'react-native';

import {Container} from './Container';

import {styles} from '../../assets/styles';

type ErrorProps = {
  error: string;
};

export const Error: React.FC<ErrorProps> = ({error}) => (
  <Container style={styles.center}>
    <Text style={styles.headline}>{error}</Text>
  </Container>
);
