import { createContext, useContext, useEffect, useState } from "react";
import { DataMoviesInterface } from "../interfaces/getMovies.interface";
type FavoritesMoviesContextProps = {
  favsMovies: {
    value: DataMoviesInterface[];
    setValue: (value: DataMoviesInterface[]) => void;
  }
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

  function PutFavoritesMoviesOnLocalStorage() {
    const favsJSON = JSON.stringify(favsMoviesList)
    localStorage.setItem("@favs_movies", favsJSON)
  }

  function GetFavoritesMoviesOnLocalStorage() {
    const favsJSON = localStorage.getItem("@favs_movies")
    const favsMovies = favsJSON ? JSON.parse(favsJSON) : []
    setFavsMoviesList(favsMovies)
  }

  useEffect(() => {
    GetFavoritesMoviesOnLocalStorage()
  }, [setFavsMoviesList]);

  useEffect(() => {
    PutFavoritesMoviesOnLocalStorage()
  }, [favsMoviesList]);

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

