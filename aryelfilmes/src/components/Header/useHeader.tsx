import { useEffect, useState } from 'react';
import { useFavoritesMoviesContext } from '../../shared/contexts/favoritesMoviesContext';
import { DataMoviesInterface } from '../../shared/interfaces/getMovies.interface';


function UseHeader() {

  const { favsMovies } = useFavoritesMoviesContext()
  const [isFavorite, setIsFavorite] = useState(false)

  function handleAddFavoriteMovie(movie: DataMoviesInterface) {
    const movieExists = favsMovies.value.find((item) => item.id === movie.id)
    if (movieExists) return

    favsMovies.setValue([...favsMovies.value, movie])
  }

  useEffect(() => {
    const movieExists = favsMovies.value.find((item) => item.id === 968051)
    if (movieExists) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

  }, [favsMovies.value])

  return {
    handleAddFavoriteMovie,
    isFavorite
  }
}

export default UseHeader