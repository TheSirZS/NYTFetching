import React from 'react';

import {ScrollView, StyleProp, View, ViewStyle} from 'react-native';

import {styles} from '../../assets/styles';

type ContainerProps = {
  scrollEnabled?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  style = undefined,
  scrollEnabled = false,
}) => {
  if (scrollEnabled) {
    return (
      <ScrollView
        contentContainerStyle={{
          ...styles.containerScroll,
          paddingTop: 0,
        }}
        style={{
          ...styles.container,
          ...(style as ViewStyle),
        }}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        ...styles.container,
        ...(style as ViewStyle),
      }}>
      {children}
    </View>
  );
};
