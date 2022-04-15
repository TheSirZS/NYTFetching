import React from 'react';

import {View} from 'react-native';

import {styles} from '../../assets/styles';

type DividerProps = {
  color?: string;
};

export const Divider: React.FC<DividerProps> = ({
  color = 'rgba(0, 0, 0, 1.0',
}) => (
  <View
    style={{
      height: 2,
      flexDirection: 'row',
      backgroundColor: color,
      ...styles.container,
    }}
  />
);
