import React, {createContext, useEffect, useState} from 'react';

import {configAPI} from '../api/config';

import {Movie, ResponseNYTMovieReviews} from '../models/movie';

const key = 'bJ6yMn3x7CreavBPKtzUquA3W7Z40pAD';

interface MainContextState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
}

const initialState: MainContextState = {
  error: '',
  loading: false,
  movies: [],
};

type MainContextProps = {
  state: MainContextState;
};

export const MainContext = createContext({} as MainContextProps);

export const MainProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const [state, setState] = useState<MainContextState>(initialState);

  useEffect(() => {
    onFetchReviews();
  }, []);

  const onFetchReviews = async (): Promise<void> => {
    try {
      setState(prev => ({...prev, loading: true}));
      const response = await configAPI.get<ResponseNYTMovieReviews>(
        '/reviews/all.json?api-key=' + key,
      );
      const {data} = response;
      const {results: movies} = data;
      setState(prev => ({...prev, loading: false, movies}));
    } catch (e) {
      console.log(e);
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Could not fetching reviews',
      }));
    }
  };

  return (
    <MainContext.Provider value={{state}}>{children}</MainContext.Provider>
  );
};
