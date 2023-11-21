import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { useFavoritesMoviesContext } from "../../../../shared/contexts/favoritesMoviesContext";
import { MovieList } from "../MovieCard";
import UseFavoritesList from "./useFavoritesList";

function FavoritesMoviesList() {
  const { settings } = UseFavoritesList()
  const { favsMovies, filterValue, searchFilter } = useFavoritesMoviesContext()

  const moviesListDesc = favsMovies.value.slice().sort(function (a, b) { return b.vote_average - a.vote_average }) //desc
  const moviesListAsc = favsMovies.value.slice().sort(function (a, b) { return a.vote_average - b.vote_average }) //asc
  const moviesListRecent = favsMovies.value.slice().reverse() //recent
  const moviesListSearch = favsMovies.value.filter((movie) => movie.title.toLowerCase().includes(searchFilter.value.toLowerCase()))

  console.log(moviesListSearch)
  return (
    <>
      <Slider {...settings}>
        {
          filterValue?.value === "0" ? (
            favsMovies.value.map((movie) => (
              <MovieList key={movie.id} movie={movie} />
            ))
          ) :
            filterValue?.value === "1" ? (
              moviesListDesc.map((movie) => (
                <MovieList key={movie.id} movie={movie} />
              ))
            ) : filterValue?.value === "2" ? (
              moviesListAsc.map((movie) => (
                <MovieList key={movie.id} movie={movie} />
              ))
            ) : filterValue?.value === "3" ? (
              moviesListRecent.map((movie) => (
                <MovieList key={movie.id} movie={movie} /> //✔
              ))
            ) :
              searchFilter.value !== "" ? (
                moviesListSearch.map((movie) => (
                  <MovieList key={movie.id} movie={movie} />
                ))
              ) : favsMovies?.value && (
                favsMovies.value.map((movie) => (
                  <MovieList key={movie.id} movie={movie} />
                ))
              )
        }
        {

        }
      </Slider >
    </>
  );
}

export { FavoritesMoviesList };

