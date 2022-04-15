import React, {useState} from 'react';

import {
  Animated,
  ImageErrorEventData,
  ImageStyle,
  ImageURISource,
  NativeSyntheticEvent,
  StyleProp,
  View,
} from 'react-native';

import {useAnimation} from '../hooks/useAnimation';

type FadeInImage = {
  style?: StyleProp<ImageStyle>;
  source:
    | number
    | Animated.Value
    | Animated.AnimatedInterpolation
    | Animated.WithAnimatedObject<ImageURISource>
    | Animated.WithAnimatedArray<ImageURISource>;
};

export const FadeInImage: React.FC<FadeInImage> = ({source, style = {}}) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    fadeIn(300, true);
    setIsLoading(false);
  };

  const onError = (_: NativeSyntheticEvent<ImageErrorEventData>) => {
    setIsLoading(false);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...(style as any),
      }}>
      {isLoading && <></>}
      <Animated.Image
        source={source}
        onError={onError}
        onLoad={finishLoading}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};
