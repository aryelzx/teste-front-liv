import { useState } from 'react'
import { useFavoritesMoviesContext } from '../../../../shared/contexts/favoritesMoviesContext'
import { DataMoviesInterface } from '../../../../shared/interfaces/getMovies.interface'

function UseFavoritesList() {
  const [selectedMovie, setSelectedMovie] = useState<DataMoviesInterface>({} as DataMoviesInterface)

  const { favsMovies } = useFavoritesMoviesContext()


  function handleRemoveFavoriteMovie(movie: DataMoviesInterface) {
    const newFavsMovies = favsMovies.value.filter((item) => item.id !== movie.id)
    favsMovies.setValue(newFavsMovies)
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  return {
    handleRemoveFavoriteMovie,
    settings,
    selectedMovie: { value: selectedMovie, set: setSelectedMovie }
  }
}

export default UseFavoritesList