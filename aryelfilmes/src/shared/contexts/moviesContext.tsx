import { createContext, useContext, useEffect, useState } from "react";
import { GetMoviesOutputInterface, GetUpComingMoviesOutputInterface } from "../../shared/interfaces/getMovies.interface";
import { useGetFamousMovies } from "../services/getFamousMovies/getFamousMovies.service";
import { useGetRatingMovies } from "../services/getRatedMovies/getRatingMovies.service";
import { useGetUpComingMovies } from "../services/getUpComingMovies/getUpComingMovies.service";

type MoviesContextProps = {
  famousMovies: {
    value: GetMoviesOutputInterface;
    setValue: (value: GetMoviesOutputInterface) => void;
  },
  ratingMovies: {
    value: GetMoviesOutputInterface;
    setValue: (value: GetMoviesOutputInterface) => void;
  },
  upComingMovies: {
    value: GetUpComingMoviesOutputInterface;
    setValue: (value: GetUpComingMoviesOutputInterface) => void;
  },
};

const MoviesContext = createContext<MoviesContextProps>({} as MoviesContextProps);

const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [famousMovies, getFamousMovies] = useState<GetMoviesOutputInterface>({} as GetMoviesOutputInterface);
  const [ratingMovies, getRatingMovies] = useState<GetMoviesOutputInterface>({} as GetMoviesOutputInterface);
  const [upComingMovies, getUpComingMovies] = useState<GetUpComingMoviesOutputInterface>({} as GetUpComingMoviesOutputInterface);

  const value: MoviesContextProps = {
    famousMovies: {
      value: famousMovies,
      setValue: getFamousMovies,
    },
    ratingMovies: {
      value: ratingMovies,
      setValue: getRatingMovies,
    },
    upComingMovies: {
      value: upComingMovies,
      setValue: getUpComingMovies,
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

  const GetUpComingMovies = async () => {
    try {
      const response = await useGetUpComingMovies.execute()
      getUpComingMovies(response)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    GetFamousMovies()
  }, []);

  useEffect(() => {
    GetRatingMovies()
  }, []);

  useEffect(() => {
    GetUpComingMovies()
  }, []);

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

