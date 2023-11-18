import { useMoviesContext } from "../../shared/contexts/moviesContext"
import { MoviesSlider } from "./components/Slider"

function Body() {
  const { movies } = useMoviesContext()
  return (

    <div className="w-full ml-[100px] h-[calc(100vh-45vh)]">
      <div className="h-full bg-[#141414]">
        <h3 className="text-[20px] px-[18px] py-[10px] text-white font-semibold">
          Filmes mais populares:
        </h3>
        {
          movies.value.results && (
            <MoviesSlider />
          )
        }
      </div>
    </div >
  )
}

export { Body }

