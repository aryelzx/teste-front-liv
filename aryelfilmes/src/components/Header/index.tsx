import { IoIosHeart } from 'react-icons/io'
import { MdFavoriteBorder } from 'react-icons/md'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../../shared/components/ui/dialog'
import { Skeleton } from '../../shared/components/ui/skeleton'
import { useMoviesContext } from '../../shared/contexts/moviesContext'
import UseFavoritesList from '../FavoritesMovies/components/FavoritesList/useFavoritesList'
import UseHeader from './useHeader'
function Header() {
  const { famousMovies } = useMoviesContext()
  const { handleRemoveFavoriteMovie } = UseFavoritesList()
  const { handleAddFavoriteMovie, isFavorite } = UseHeader()

  return (
    <div className="ml-[100px] h-[calc(100vh-65vh)]">
      {famousMovies.value.results?.map(
        (movie) =>
          movie.title === 'A Freira 2' && (
            <Dialog key={movie.id}>
              <DialogTrigger className="w-full h-full">
                <div
                  key={movie.id}
                  className="w-full h-full bg-cover bg-center pl-[55px] text-white transition duration-500 ease-in-out"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <div className="w-fit">
                    <h1 className="text-[40px] font-bold pt-[50px] text-left">
                      {movie.title}
                    </h1>
                    <div className="h-[150px] w-fit overflow-auto">
                      <p className="text-[18px] w-[530px] font-semibold break-all text-left">
                        {movie.overview}
                      </p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="w-full h-5/6 bg-[#141414] text-white">
                <div>
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-semibold">{movie.title}</h1>
                      <div className="w-12 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                        <p className="text-black font-mono font-semibold text-sm">
                          {movie.vote_average}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  {movie.poster_path ? (
                    <img
                      className="rounded-lg w-full h-52 object-cover object-center my-4"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.backdrop_path}
                    />
                  ) : (
                    <Skeleton className="rounded-lg w-full h-52 object-cover object-center my-4" />
                  )}
                  <div className="flex flex-col overflow-auto">
                    <div
                      className=" flex items-center justify-center gap-2 w-60 border-[1px] border-gray-500 rounded p-1 cursor-pointer
                      hover:border-gray-400 transition duration-500 ease-in-out"
                      onClick={() => handleAddFavoriteMovie(movie)}
                    >
                      {isFavorite ? (
                        <div
                          className="flex w-full justify-center items-center gap-2"
                          onClick={() => handleRemoveFavoriteMovie(movie)}
                        >
                          <p className="text-red-500 text-sm">
                            REMOVER DOS FAVORITOS
                          </p>
                          <p className="text-red-500">
                            <IoIosHeart size={30} />
                          </p>
                        </div>
                      ) : (
                        <div className="flex w-full justify-center items-center gap-2">
                          <p className="text-green-500 text-sm">
                            ADICIONAR AOS FAVORITOS
                          </p>
                          <p>
                            <MdFavoriteBorder size={30} />
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="overflow-auto h-48">
                      <h1 className="text-2xl mt-4">Sinopse:</h1>
                      <p className="text-base pt-2">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )
      )}
    </div>
  )
}

export { Header }

