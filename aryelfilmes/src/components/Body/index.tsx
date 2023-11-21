import { useMoviesContext } from "../../shared/contexts/moviesContext"
import { FamousMoviesSlider } from "./components/FamousSlider/page/index"
import { RatingMoviesSlider } from "./components/RatingSlider/page/index"

function Body() {
  const { famousMovies, ratingMovies } = useMoviesContext()
  return (
    <div className="ml-[100px] h-[calc(100vh-35vh)] overflow-hidden">
      <div className=" bg-[#0c0c0c] min-h-full">
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

