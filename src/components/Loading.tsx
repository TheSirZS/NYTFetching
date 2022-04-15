import React from 'react';

import {ActivityIndicator} from 'react-native';

import {Container} from './Container';

import {styles} from '../../assets/styles';

export const Loading: React.FC = () => (
  <Container style={styles.center}>
    <ActivityIndicator size="large" />
  </Container>
);
