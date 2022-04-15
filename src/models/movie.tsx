export interface ResponseNYTMovieReviews {
  status: string;
  num_results: number;
  results: Movie[];
}

export interface Movie {
  display_title: string;
  mpaa_rating: string;
  critics_pick: number;
  headline: string;
  summary_short: string;
  byline: string;
  publication_date: string;
  opening_date: string;
  date_updated: string;
  multimedia: Multimedia;
  link: Link;
}

export interface Link {
  type: string;
  url: string;
}

export interface Multimedia {
  type: string;
  src: string;
}
