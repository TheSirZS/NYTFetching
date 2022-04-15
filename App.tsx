import React from 'react';

import {theme} from './src/theme/config';

import {RootStack} from './src/navigation/RootStack';

import {MainProvider} from './src/contexts/MainContext';

import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

export const App = () => {
  return (
    <GlobalState>
      <NavigationContainer theme={theme}>
        <RootStack />
      </NavigationContainer>
    </GlobalState>
  );
};

const GlobalState = ({children}: {children: JSX.Element}) => (
  <SafeAreaProvider>
    <MainProvider>{children}</MainProvider>
  </SafeAreaProvider>
);
