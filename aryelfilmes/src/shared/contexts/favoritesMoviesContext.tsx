import { createContext, useContext, useState } from "react";
import { DataMoviesInterface } from "../interfaces/getMovies.interface";

type FavoritesMoviesContextProps = {
  favsMovies: {
    value: DataMoviesInterface[];
    setValue: (value: DataMoviesInterface[]) => void;
  },
};

const FavoritesMoviesContext = createContext<FavoritesMoviesContextProps>({} as FavoritesMoviesContextProps);

const FavoritesMoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [favsMoviesList, setFavsMoviesList] = useState<DataMoviesInterface[]>([]);

  const value: FavoritesMoviesContextProps = {
    favsMovies: {
      value: favsMoviesList,
      setValue: setFavsMoviesList,
    }
  };

  console.log(value.favsMovies.value)

  return (
    <FavoritesMoviesContext.Provider value={value}>
      {children}
    </FavoritesMoviesContext.Provider>
  );

}

const useFavoritesMoviesContext = () => {
  return useContext(FavoritesMoviesContext)
}

export { FavoritesMoviesContextProvider, useFavoritesMoviesContext };

