import React from 'react';

import {routes} from '../routes/config';

import {hasMovie} from '../helpers/props';

import {RootStackParamList} from '../models/navigation';

import {RouteProp, useTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack: React.FC = () => {
  const {colors} = useTheme();

  const onConfigTitle = (
    route: RouteProp<RootStackParamList, keyof RootStackParamList>,
  ): string => {
    if (route.name === 'Movie') {
      if (route.params && hasMovie(route.params)) {
        return route.params.movie.display_title;
      }
      return '';
    } else if (route.name === 'WebView') {
      return '';
    } else {
      return 'Movies';
    }
  };

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: {backgroundColor: colors.background},
      }}>
      {routes.map((route, i) => (
        <Stack.Screen
          key={i}
          component={route.component}
          name={route.name as keyof RootStackParamList}
          options={({route}) => ({title: onConfigTitle(route)})}
        />
      ))}
    </Stack.Navigator>
  );
};
