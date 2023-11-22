interface GetMoviesOutputInterface {
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: number;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number
    }
  ]
}
interface GetUpComingMoviesOutputInterface {
  dates: {
    maximum: string,
    minimum: string
  },
  page: number;
  results: [
    {
      adult: boolean;
      backdrop_path: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: number;
      title: string;
      video: false;
      vote_average: number;
      vote_count: number
    }
  ]
}

interface DataMoviesInterface {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: number;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number
}

export type { DataMoviesInterface, GetMoviesOutputInterface, GetUpComingMoviesOutputInterface };

