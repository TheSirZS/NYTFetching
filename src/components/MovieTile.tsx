import React from 'react';

import {TouchableOpacity, StyleSheet, View, Text} from 'react-native';

import {FadeInImage} from './FadeInImage';

import {styles} from '../../assets/styles';

import {Movie} from '../models/movie';
import {RootStackParamList} from '../models/navigation';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';

type MovieTileProps = {
  movie: Movie;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export const MovieTile: React.FC<MovieTileProps> = ({movie}) => {
  const {push} = useNavigation<NavigationProps>();

  const onNavigate = (): void => push('Movie', {movie});

  return (
    <TouchableOpacity
      onPress={onNavigate}
      style={{...styles.container, ...styleItem.container}}>
      <FadeInImage
        style={styleItem.image}
        source={{uri: movie.multimedia.src}}
      />
      <View style={{...styles.column, ...styleItem.split}}>
        <Text numberOfLines={2} style={{...styles.headline, fontSize: 16}}>
          {movie.display_title}
        </Text>
        <Text numberOfLines={2} style={{...styles.caption, ...styles.vertical}}>
          {movie.headline}
        </Text>
        <View style={styleItem.bottom}>
          <Text>{'Release date: ' + movie.publication_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styleItem = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingRight: 16,
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  split: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
