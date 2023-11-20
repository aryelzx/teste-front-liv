import { MdOutlineFavorite } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger
} from "../../../../shared/components/ui/dialog";
import { useFavoritesMoviesContext } from "../../../../shared/contexts/favoritesMoviesContext";
import UseFavoritesList from "./useFavoritesList";

function FavoritesMoviesList() {

  const { favsMovies } = useFavoritesMoviesContext()
  const { handleRemoveFavoriteMovie, settings, selectedMovie } = UseFavoritesList()

  return (
    <Slider {...settings}>
      {favsMovies.value.map((movie) => {
        return (
          <div key={movie.id} className="flex flex-col cursor-grab">
            <Dialog>
              <Card className="max-w-[379px] h-[350px] relative border-none bg-[#141414] cursor-pointer ml-5">
                <CardContent
                  className="w-full h-full bg-contain bg-center rounded-lg filter brightness-50 hover:brightness-100 
                  transition duration-500 ease-in-out flex justify-center items-center absolute"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat'
                  }}>
                  <DialogTrigger
                    className="w-full h-full absolute"
                    onClick={() => selectedMovie.set(movie)}
                  >
                  </DialogTrigger>
                </CardContent>
              </Card>
              <DialogContent className="w-full h-5/6 bg-[#141414] text-white">
                <div>
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-semibold">{selectedMovie.value.title}</h1>
                      <div className="w-12 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                        <p className="text-black font-mono font-semibold text-sm">
                          {selectedMovie.value.vote_average}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  { //TODO adicionar loading para imagem
                    <img
                      className="rounded-lg w-full h-52 object-cover object-center my-4"
                      src={`https://image.tmdb.org/t/p/w500/${selectedMovie.value.backdrop_path}`}
                      alt={selectedMovie.value.backdrop_path} />
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
        )
      })
      }
    </Slider >
  );
}

export { FavoritesMoviesList };

