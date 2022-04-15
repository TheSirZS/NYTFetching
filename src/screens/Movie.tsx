import React from 'react';

import {Text, View} from 'react-native';

import {styles} from '../../assets/styles';

import {Button} from '../components/Button';
import {Section} from '../components/Section';
import {Container} from '../components/Container';
import {FadeInImage} from '../components/FadeInImage';

import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MovieParamProps, RootStackParamList} from '../models/navigation';

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Movie'>;

type MovieProps = {
  navigation: NavigationProps;
  route: RouteProp<{params: MovieParamProps}, 'params'>;
};

type Content = {
  display_title: string;
  headline: string;
  byline: string;
  summary_short: string;
  publication_date: string;
  url: string;
  [key: string]: string;
};

export const Movie: React.FC<MovieProps> = ({route, navigation}) => {
  const {push} = navigation;
  const {movie} = route.params;

  const prefix = (key: string): string => {
    if (key === 'byline') {
      return 'By: ';
    } else if (key === 'publication_date') {
      return 'Release date: ';
    }
    return '';
  };

  const onCurrentStyle = (key: string) => {
    if (key === 'display_title') {
      return styles.headline;
    }
    return styles.text;
  };

  const onCreateContent = (): Content => {
    const {
      link,
      mpaa_rating,
      multimedia,
      opening_date,
      date_updated,
      critics_pick,
      ...rest
    } = movie;
    const {url} = link;
    return {...rest, url};
  };

  const onNavigate = (uri: string): void => push('WebView', {uri});

  return (
    <Container scrollEnabled>
      <FadeInImage style={styles.banner} source={{uri: movie.multimedia.src}} />
      <View style={styles.container}>
        {Object.keys(onCreateContent()).map((key, i) => (
          <Section
            key={i}
            divider={i !== Object.keys(onCreateContent()).length - 1}>
            {key === 'url' ? (
              <Button
                text={
                  'Read the New York Times review of ' +
                  onCreateContent()['display_title'] +
                  ' >>'
                }
                onPress={() => onNavigate(onCreateContent()['url'])}
              />
            ) : (
              <Text style={onCurrentStyle(key)}>
                {prefix(key) + onCreateContent()[key]}
              </Text>
            )}
          </Section>
        ))}
      </View>
    </Container>
  );
};
