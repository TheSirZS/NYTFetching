import React from 'react';

import {View, StyleSheet} from 'react-native';

type SectionProps = {
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({children}) => {
  return <View style={styleItem.section}>{children}</View>;
};

const styleItem = StyleSheet.create({
  section: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
});
