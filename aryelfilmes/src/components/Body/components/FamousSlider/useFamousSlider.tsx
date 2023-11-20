import { useEffect, useState } from 'react';
import { useFavoritesMoviesContext } from '../../../../shared/contexts/favoritesMoviesContext';
import { DataMoviesInterface } from '../../../../shared/interfaces/getMovies.interface';

function UseFamousSlider() {

  const { favsMovies } = useFavoritesMoviesContext()
  const [selectedMovie, setSelectedMovie] = useState<DataMoviesInterface>({} as DataMoviesInterface)
  const [isFavorite, setIsFavorite] = useState(false)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };

  function handleAddFavoriteMovie(movie: DataMoviesInterface) {
    const movieExists = favsMovies.value.find((item) => item.id === movie.id)
    if (movieExists) return

    favsMovies.setValue([...favsMovies.value, movie])
  }

  useEffect(() => {
    const movieExists = favsMovies.value.find((item) => item.id === selectedMovie.id)
    if (movieExists) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

  }, [favsMovies.value, selectedMovie.id])

  return {
    settings,
    selectedMovie: { value: selectedMovie, set: setSelectedMovie },
    handleAddFavoriteMovie,
    isFavorite
  }
}

export default UseFamousSlider