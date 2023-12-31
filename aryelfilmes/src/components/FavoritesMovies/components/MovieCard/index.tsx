import { MdOutlineFavorite } from "react-icons/md";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "../../../../shared/components/ui/dialog";
import { Skeleton } from "../../../../shared/components/ui/skeleton";
import { DataMoviesInterface } from '../../../../shared/interfaces/getMovies.interface';
import UseFavoritesList from '../FavoritesList/useFavoritesList';

type MovieListProps = {
  movie: DataMoviesInterface
}
function MovieList({ movie }: MovieListProps) {
  const { selectedMovie, handleRemoveFavoriteMovie } = UseFavoritesList()

  return (
    <>
      <div key={movie.id} className="flex flex-col cursor-grab">
        <Dialog>
          <Card className="max-w-[230px]  h-[350px] relative border-none bg-[#141414] cursor-pointer ml-5">
            <CardContent
              className="w-full h-full bg-contain bg-center rounded-lg filter brightness-50 hover:brightness-100 
                    transition duration-500 ease-in-out flex justify-center items-center absolute hover:scale-105"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}>
              <div className="w-10 h-10 rounded-full bg-gray-900 items-center flex justify-center absolute top-3 right-3 border-white border-2">
                <p className="text-white font-mono font-bold text-sm">
                  {movie.vote_average.toFixed(1)}
                </p>
              </div>
              <DialogTrigger
                className="w-full h-full absolute"
                onClick={() => selectedMovie.set(movie)}
              >
              </DialogTrigger>
            </CardContent>
          </Card>
          <DialogContent className="w-full h-5/6 bg-[#141414] text-white rounded-2xl">
            <div>
              <DialogHeader>
                <div className="flex items-center justify-start gap-3">
                  <h1 className="text-2xl font-semibold flex justify-end">{selectedMovie.value.title}</h1>
                  <div className="w-10 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                    <p className="text-black font-mono font-semibold text-sm">
                      {selectedMovie.value.vote_average}
                    </p>
                  </div>
                </div>
              </DialogHeader>
              {selectedMovie.value.backdrop_path ? (
                <img
                  className="rounded-lg w-full h-52 object-cover object-center my-4"
                  src={`https://image.tmdb.org/t/p/w500/${selectedMovie.value.backdrop_path}`}
                  alt={selectedMovie.value.backdrop_path} />
              ) : (
                <Skeleton className="rounded-lg w-full h-52 object-cover object-center my-4" />
              )
              }
              <div className="flex flex-col overflow-auto">
                <div
                  className="w-64 flex gap-2 items-center border-2 border-gray-500 rounded p-1 cursor-pointer
                  hover:border-red-500 hover:text-red-500 transition duration-500 ease-in-out
                  "
                  onClick={() => handleRemoveFavoriteMovie(movie)}
                >
                  <p>REMOVER DOS FAVORITOS</p>
                  <MdOutlineFavorite size={30} />
                </div>
                <div className="overflow-auto h-48">
                  <h1 className="text-2xl mt-4">Sinopse:</h1>
                  <p className="text-base pt-2">{selectedMovie.value.overview}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

export { MovieList };

