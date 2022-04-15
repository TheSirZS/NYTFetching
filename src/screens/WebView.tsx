import React from 'react';

import {Container} from '../components/Container';

import {RouteProp} from '@react-navigation/native';

import {WebViewParamProps} from '../models/navigation';

import {WebView as Viewer} from 'react-native-webview';

type WebViewProps = {
  route: RouteProp<{params: WebViewParamProps}, 'params'>;
};

export const WebView: React.FC<WebViewProps> = ({route}) => {
  const {uri} = route.params;

  return (
    <Container>
      <Viewer source={{uri}} originWhitelist={['*']} />
    </Container>
  );
};
