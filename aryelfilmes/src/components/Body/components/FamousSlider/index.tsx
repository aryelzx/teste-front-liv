import { IoIosHeart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
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
import { useMoviesContext } from "../../../../shared/contexts/moviesContext";
import UseFavoritesList from "../../../FavouriteMovies/components/FavoritesList/useFavoritesList";
import UseFamousSlider from "./useFamousSlider";

function FamousMoviesSlider() {
  const { famousMovies } = useMoviesContext()
  const { handleRemoveFavoriteMovie } = UseFavoritesList()
  const { handleAddFavoriteMovie, selectedMovie, settings, isFavorite } = UseFamousSlider()

  return (
    <Slider {...settings}>
      {famousMovies.value.results.map((movie) => {
        return (
          <div key={movie.id} className="flex flex-col cursor-grab">
            <Dialog>
              <Card className="max-w-[279px] h-[150px] relative border-none bg-[#141414] cursor-pointer ml-5">
                <CardContent
                  className="w-full h-full bg-cover bg-center rounded-lg filter brightness-50 hover:brightness-100 
                  transition duration-500 ease-in-out flex justify-center items-center absolute"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat'
                  }}>
                  <DialogTrigger
                    className="w-full h-full absolute"
                    onClick={() => selectedMovie.set(movie)}
                  >
                    <div className="relative bottom-0 w-full h-full flex items-end text-center justify-center">
                      <h1 className="text-[15px] font-semibold text-white px-2">{movie.title}</h1>
                    </div>
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
                      className=" flex items-center justify-center gap-2 w-60 border-[1px] border-gray-500 rounded p-1 cursor-pointer
                      hover:border-gray-400 transition duration-500 ease-in-out"
                      onClick={() => handleAddFavoriteMovie(movie)}
                    >
                      {
                        isFavorite ? (
                          <div className="flex w-full justify-center items-center gap-2"
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
                        )
                      }

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

export { FamousMoviesSlider };

