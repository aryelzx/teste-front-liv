import { useEffect, useState } from 'react'
import { GrNext } from 'react-icons/gr'
import { useFavoritesMoviesContext } from '../../../../shared/contexts/favoritesMoviesContext'
import { DataMoviesInterface } from '../../../../shared/interfaces/getMovies.interface'

function UseFamousSlider() {
  const { favsMovies } = useFavoritesMoviesContext()
  const [selectedMovie, setSelectedMovie] = useState<DataMoviesInterface>(
    {} as DataMoviesInterface
  )
  const [isFavorite, setIsFavorite] = useState(false)

  function SampleNextArrow(props: any) {
    const { onClick } = props
    return (
      <p
        className="block text-white absolute top-20 right-1 cursor-pointer bg-zinc-700 rounded-full p-1 opacity-50 hover:bg-zinc-500"
        onClick={onClick}
      >
        <GrNext size={25} />
      </p>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
  }

  function handleAddFavoriteMovie(movie: DataMoviesInterface) {
    const movieExists = favsMovies.value.find((item) => item.id === movie.id)
    if (movieExists) return

    favsMovies.setValue([...favsMovies.value, movie])
  }

  useEffect(() => {
    const movieExists = favsMovies.value.find(
      (item) => item.id === selectedMovie.id
    )
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
    isFavorite,
    SampleNextArrow,
  }
}

export default UseFamousSlider
