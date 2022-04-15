import {Movie} from '../models/movie';

type ParamProps = {
  movie: Movie;
};

export const hasMovie = (obj: any): obj is ParamProps => {
  return obj && obj.hasOwnProperty('movie');
};
