import { useMoviesContext } from "../../shared/contexts/moviesContext"
function Header() {

  const { famousMovies } = useMoviesContext()

  return (
    <div className="ml-[100px] h-[calc(100vh-60vh)]">
      <div className="flex justify-center h-full w-full">
        {
          famousMovies.value.results && (
            <div
              className="w-full h-full bg-cover bg-center pl-[104px] text-white"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${famousMovies.value.results[18].backdrop_path})`,
                backgroundRepeat: 'no-repeat'
              }}>
              <h1 className="text-[40px] font-bold pt-[50px] ">
                {famousMovies.value.results[18].title}
              </h1>
              <div className="h-[150px] w-fit overflow-auto">
                <p className="text-[18px] w-[530px] font-semibold break-all">
                  {famousMovies.value.results[18].overview}
                </p>
              </div>
            </div>
          )
        }
      </div >
    </div >
  )
}

export { Header }

