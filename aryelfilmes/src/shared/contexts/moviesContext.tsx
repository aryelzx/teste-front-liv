import { createContext, useContext, useEffect, useState } from "react";
import { GetMoviesOutputInterface } from "../../shared/interfaces/getMovies.interface";
import { useGetFamousMovies } from "../services/getFamousMovies/getFamousMovies.service";
import { useGetRatingMovies } from "../services/getRatedMovies/getRatingMovies.service";
import { useFavoritesMoviesContext } from "./favoritesMoviesContext";

type MoviesContextProps = {
  famousMovies: {
    value: GetMoviesOutputInterface;
    setValue: (value: GetMoviesOutputInterface) => void;
  },
  ratingMovies: {
    value: GetMoviesOutputInterface;
    setValue: (value: GetMoviesOutputInterface) => void;
  },
};

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [famousMovies, getFamousMovies] = useState<GetMoviesOutputInterface>({} as GetMoviesOutputInterface);
  const [ratingMovies, getRatingMovies] = useState<GetMoviesOutputInterface>({} as GetMoviesOutputInterface);
  const { favsMovies } = useFavoritesMoviesContext()
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const value: MoviesContextProps = {
    famousMovies: {
      value: famousMovies,
      setValue: getFamousMovies,
    },
    ratingMovies: {
      value: ratingMovies,
      setValue: getRatingMovies,
    },
  };

  const GetFamousMovies = async () => {
    try {
      const response = await useGetFamousMovies.execute()
      getFamousMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  const GetRatingMovies = async () => {
    try {
      const response = await useGetRatingMovies.execute()
      getRatingMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    GetFamousMovies()
  }, [famousMovies, favsMovies]);

  useEffect(() => {
    GetRatingMovies()
  }, [ratingMovies]);

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

