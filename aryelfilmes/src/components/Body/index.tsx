import { useMoviesContext } from "../../shared/contexts/moviesContext"
import { FamousMoviesSlider } from "./components/FamousSlider"
import { RatingMoviesSlider } from "./components/RatingSlider"

function Body() {
  const { famousMovies, ratingMovies } = useMoviesContext()
  return (
    <div className="ml-[100px] h-[calc(100vh-40vh)]">
      <div className=" bg-[#141414] min-h-full">
        {famousMovies.value.results && (
          <div>
            <h3 className="text-[20px] px-[18px] py-[5px] text-white font-semibold">
              Filmes mais populares:
            </h3>
            <FamousMoviesSlider />
          </div>
        )}
        {ratingMovies.value.results && (
          <div>
            <h3 className="text-[20px] px-[18px] py-[10px] text-white font-semibold">
              Filmes mais bem avaliados:
            </h3>
            <RatingMoviesSlider />
          </div>
        )}
      </div>
    </div >
  )
}

export { Body }

