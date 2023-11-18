import { createContext, useContext, useEffect, useState } from "react";
import { GetMoviesOutputInterface } from "../../shared/interfaces/getMovies.interface";
import { useGetFamousMovies } from "../services/getFamousMovies/getFamousMovies.service";

type MoviesContextProps = {
  movies: {
    value: GetMoviesOutputInterface;
    setValue: (value: GetMoviesOutputInterface) => void;
  };
};

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [famousMovies, getFamousMovies] = useState<GetMoviesOutputInterface>({} as GetMoviesOutputInterface);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const response = await useGetFamousMovies.execute()
      getFamousMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  const value: MoviesContextProps = {
    movies: {
      value: famousMovies,
      setValue: getFamousMovies,
    },
  };

  useEffect(() => {
    getMovies()
  }, [famousMovies]);

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

