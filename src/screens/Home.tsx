import React, {useContext} from 'react';

import {FlatList} from 'react-native';

import {styles} from '../../assets/styles';

import {Error} from '../components/Error';
import {Loading} from '../components/Loading';
import {Container} from '../components/Container';
import {MovieTile} from '../components/MovieTile';
import {Separator} from '../components/Separator';

import {MainContext} from '../contexts/MainContext';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Home: React.FC = () => {
  const {
    state: {error, loading, movies},
  } = useContext(MainContext);
  const {bottom} = useSafeAreaInsets();

  if (loading) return <Loading />;

  if (error) return <Error error={error} />;

  return (
    <Container>
      <FlatList
        data={movies}
        style={styles.container}
        contentContainerStyle={{
          paddingBottom: bottom,
          ...styles.containerScroll,
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({item}) => <MovieTile movie={item} />}
      />
    </Container>
  );
};
