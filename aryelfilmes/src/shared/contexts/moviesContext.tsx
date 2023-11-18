import { createContext, useContext, useEffect, useState } from "react";
import { GetMoviesOutputDto } from "../services/getMovies/getMovies.dto";
import { useGetUserData } from "../services/getMovies/getMovies.service";

type MoviesContextProps = {
  movies: {
    value: GetMoviesOutputDto;
    setValue: (value: GetMoviesOutputDto) => void;
  };
};

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<GetMoviesOutputDto>({} as GetMoviesOutputDto);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await useGetUserData.execute()
      setMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  const value: MoviesContextProps = {
    movies: {
      value: movies,
      setValue: setMovies,
    },
  };

  useEffect(() => {
    getMovies()
  }, [movies]);

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );

}

const useMoviesContext = () => {
  return useContext(MoviesContext)
}

export { MoviesContextProvider, useMoviesContext };

