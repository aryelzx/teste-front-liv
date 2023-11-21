import { useState } from 'react'
import { GrNext } from 'react-icons/gr'
import { useFavoritesMoviesContext } from '../../../../shared/contexts/favoritesMoviesContext'
import { DataMoviesInterface } from '../../../../shared/interfaces/getMovies.interface'

function UseFavoritesList() {
  const [selectedMovie, setSelectedMovie] = useState<DataMoviesInterface>(
    {} as DataMoviesInterface
  )
  const [filterValue, setFilterValue] = useState('')

  const { favsMovies } = useFavoritesMoviesContext()

  function handleRemoveFavoriteMovie(movie: DataMoviesInterface) {
    const newFavsMovies = favsMovies.value.filter(
      (item) => item.id !== movie.id
    )
    favsMovies.setValue(newFavsMovies)
  }

  function SampleNextArrow(props: any) {
    const { onClick } = props
    return (
      <p
        className="block text-white absolute top-32 right-1 cursor-pointer bg-zinc-700 rounded-full p-1 z-50 
        opacity-50 hover:bg-zinc-500"
        onClick={onClick}
      >
        <GrNext size={25} />
      </p>
    )
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
  }

  return {
    handleRemoveFavoriteMovie,
    settings,
    selectedMovie: { value: selectedMovie, set: setSelectedMovie },
    filterValue: { value: filterValue, set: setFilterValue },
  }
}

export default UseFavoritesList
