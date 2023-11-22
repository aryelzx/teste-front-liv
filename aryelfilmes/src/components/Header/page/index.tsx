import Slider from 'react-slick'
import { useMoviesContext } from '../../../shared/contexts/moviesContext'
import UseHeader from '../useHeader'
function Header() {
  const { upComingMovies } = useMoviesContext()
  const { settings } = UseHeader()

  return (
    <div className="ml-[100px] h-[calc(100vh-65vh)] bg-black">
      <Slider {...settings}>
        {upComingMovies.value.results?.map(
          (movie) => (
            <div className="w-full" key={movie.id}>
              <div
                key={movie.id}
                className="w-full bg-contain pl-[45px] text-white transition duration-500 ease-in-out h-[230px]"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="w-[680px] ml-8 flex flex-col">
                  <h1 className="h-[50px] text-[35px] mt-6 font-bold text-left">
                    {movie.title}
                  </h1>
                  <div className="h-[150px] w-fit overflow-auto">
                    <p className="text-[15px] w-[530px] mt-1 font-semibold break-all text-left">
                      {movie.overview ? movie.overview : 'Sem descrição'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        )
        }
      </Slider >
    </div >
  )
}

export { Header }

