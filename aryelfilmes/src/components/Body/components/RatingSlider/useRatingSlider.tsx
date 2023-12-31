import { useEffect, useState } from 'react';

import { useFavoritesMoviesContext } from "../../../../shared/contexts/favoritesMoviesContext";
import { DataMoviesInterface } from "../../../../shared/interfaces/getMovies.interface";
import UseFamousSlider from '../FamousSlider/useFamousSlider';

function UseRatingSlider() {
  const [selectedRatingMovie, setSelectedRatingMovie] = useState<DataMoviesInterface>({} as DataMoviesInterface)
  const [isFavorite, setIsFavorite] = useState(false)

  const { SampleNextArrow } = UseFamousSlider()

  const { favsMovies } = useFavoritesMoviesContext()


  function handleAddFavoriteMovie(movie: DataMoviesInterface) {
    const movieExists = favsMovies.value.find((item) => item.id === movie.id)
    if (movieExists) return
    favsMovies.setValue([...favsMovies.value, movie])
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 8,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,

  };

  useEffect(() => {
    const movieExists = favsMovies.value.find((item) => item.id === selectedRatingMovie.id)
    if (movieExists) {
      setIsFavorite(true)
    } else {
      setIsFavorite(false)
    }

  }, [favsMovies.value, selectedRatingMovie])

  return {
    settings,
    selectedRatingMovie: { value: selectedRatingMovie, set: setSelectedRatingMovie },
    isFavorite,
    handleAddFavoriteMovie
  }
}

export { UseRatingSlider };

