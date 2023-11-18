import { useMoviesContext } from "../../shared/contexts/moviesContext"
function Header() {

  const { movies } = useMoviesContext()

  return (
    <div className="ml-[100px] h-[60vh]">
      <div className="flex justify-center h-full w-full">
        {
          movies.value.results && (
            <div
              className="w-full bg-cover bg-center flex flex-col font-mono text-white pl-[104px]"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.value.results[17].backdrop_path})`,
                backgroundRepeat: 'no-repeat'
              }}>
              <h1 className="text-[40px] font-semibold pt-[80px]">
                {movies.value.results[17].title}
              </h1>
              <p className="text-[20px] w-[530px]">
                {movies.value.results[17].overview}
              </p>
            </div>
          )
        }
      </div >
    </div >
  )
}

export { Header }

