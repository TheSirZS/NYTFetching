import {Movie} from './movie';

export type RootStackParamList = {
  Home: undefined;
  Movie: MovieParamProps;
  WebView: WebViewParamProps;
};

export type MovieParamProps = {
  movie: Movie;
};

export type WebViewParamProps = {
  uri: string;
};

type Params = {
  movie: Movie;
};
