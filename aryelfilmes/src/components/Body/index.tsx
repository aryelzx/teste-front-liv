import { useMoviesContext } from "../../shared/contexts/moviesContext"

function Body() {
  const { movies } = useMoviesContext()
  return (

    <div className="ml-[100px] h-[calc(100vh-45vh)]">
      <div className="h-full bg-[#141414]">
        <h3 className="text-[32px] pt-[36px] pl-[48px] text-white">Filmes mais populares:</h3>
        {
          movies.value.results && (
            <div>
              Carrosel here
            </div>
          )
        }
      </div>
    </div >
  )
}

export { Body }

