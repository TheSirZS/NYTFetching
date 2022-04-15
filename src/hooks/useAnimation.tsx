import {useRef} from 'react';

import {Animated, Easing} from 'react-native';

type UseAnimationData = {
  opacity: Animated.Value;
  fadeIn: (duration?: number, useNativeDriver?: boolean) => void;
  fadeOut: (duration?: number, useNativeDriver?: boolean) => void;
};

export const useAnimation = (): UseAnimationData => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fadeIn = (
    duration: number = 300,
    useNativeDriver: boolean = false,
  ): void => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      easing: Easing.ease,
      useNativeDriver: useNativeDriver,
    }).start();
  };

  const fadeOut = (
    duration: number = 300,
    useNativeDriver: boolean = false,
  ): void => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: duration,
      easing: Easing.ease,
      useNativeDriver: useNativeDriver,
    }).start();
  };

  return {
    opacity,
    fadeIn,
    fadeOut,
  };
};
