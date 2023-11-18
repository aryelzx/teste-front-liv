import { useMoviesContext } from "../../shared/contexts/moviesContext"
function Header() {

  const { movies } = useMoviesContext()

  return (
    <div className="ml-[100px] h-[calc(100vh-60vh)]">
      <div className="flex justify-center h-full w-full">
        {
          movies.value.results && (
            <div
              className="w-full h-full bg-cover bg-center pl-[104px] text-white"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.value.results[17].backdrop_path})`,
                backgroundRepeat: 'no-repeat'
              }}>
              <h1 className="text-[40px] font-bold pt-[50px] ">
                {movies.value.results[17].title}
              </h1>
              <div className="h-[150px] w-fit overflow-auto">
                <p className="text-[18px] w-[530px] font-semibold break-all">
                  {movies.value.results[17].overview}
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

