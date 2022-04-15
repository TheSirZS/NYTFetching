import React from 'react';

import {Text, TextStyle, TouchableOpacity} from 'react-native';

import {styles} from '../../assets/styles';

type ButtonProps = {
  text: string;
  color?: string;
  onPress: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  color = 'rgba(14, 122, 254, 1.0)',
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container}}>
      <Text style={{...styles.text, color}}>{text}</Text>
    </TouchableOpacity>
  );
};
