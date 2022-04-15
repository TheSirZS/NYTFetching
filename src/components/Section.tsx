import React from 'react';

import {View, StyleSheet} from 'react-native';

type SectionProps = {
  divider?: boolean;
  children: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  children,
  divider = false,
}) => {
  return (
    <View style={{...styleItem.section, ...(divider && styleItem.divider)}}>
      {children}
    </View>
  );
};

const styleItem = StyleSheet.create({
  section: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
  },
});
