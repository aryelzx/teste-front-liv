import { IoIosHeart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../shared/components/ui/dialog";
import { Skeleton } from "../../../../shared/components/ui/skeleton";
import { useMoviesContext } from "../../../../shared/contexts/moviesContext";
import UseFavoritesList from "../../../FavoritesMovies/components/FavoritesList/useFavoritesList";
import { UseRatingSlider } from "./useRatingSlider";

function RatingMoviesSlider() {
  const { handleRemoveFavoriteMovie } = UseFavoritesList()
  const { ratingMovies } = useMoviesContext()
  const { handleAddFavoriteMovie, isFavorite, selectedRatingMovie, settings } = UseRatingSlider()

  return (
    <Slider {...settings}>
      {ratingMovies.value.results.map((movie) => {
        return (
          <div key={movie.id} className="flex flex-col  cursor-grab">
            <Dialog>
              <Card className="desktop:max-w-[400px] max-w-[279px] desktop:h-[200px] h-[150px] relative border-none bg-[#141414] cursor-pointer ml-5">
                <CardContent
                  className="w-full h-full desktop:bg-content bg-cover bg-center rounded-lg filter brightness-50 
                  hover:brightness-100 transition duration-500 ease-in-out flex justify-center items-center
                   absolute hover:scale-105 hover:rounded-lg"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}>
                  <div className="w-10 h-10 rounded-full bg-black items-center flex justify-center absolute top-4 left-3 border-white border-2">
                    <p className="text-white font-mono font-semibold text-sm">
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                  <DialogTrigger
                    className="w-full h-full absolute"
                    onClick={() => selectedRatingMovie.set(movie)}
                  >
                    <div className="relative bottom-0 w-full h-full flex items-end text-center justify-center ">
                      <h1 className="text-[15px] border-[1px] bg-[#333333] rounded-full font-semibold text-white px-2">
                        {movie.title}
                      </h1>
                    </div>
                  </DialogTrigger>
                </CardContent>
              </Card>
              <DialogContent className="w-full desktop:h-fit h-5/6 bg-[#141414] text-white">
                <div>
                  <DialogHeader>
                    <div className="flex items-center gap-3">
                      <h1 className="text-2xl font-semibold">{selectedRatingMovie.value.title}</h1>
                      <div className="w-12 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                        <p className="text-black font-mono font-semibold text-sm">
                          {selectedRatingMovie.value.vote_average}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  {selectedRatingMovie.value.backdrop_path ? (
                    <img
                      className="rounded-lg w-full h-52 object-cover object-center my-4"
                      src={`https://image.tmdb.org/t/p/w500/${selectedRatingMovie.value.backdrop_path}`}
                      alt={selectedRatingMovie.value.backdrop_path} />
                  ) : (
                    <Skeleton className="rounded-lg w-full h-52 object-cover object-center my-4" />
                  )
                  }
                  <div className="flex flex-col">
                    <div
                      className="flex items-center justify-center gap-2 w-72 border-[1px] border-gray-500 rounded p-1 cursor-pointer
                      hover:border-gray-300 transition duration-500 ease-in-out"
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
                      <p className="text-base pt-2">{selectedRatingMovie.value.overview}</p>
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

export { RatingMoviesSlider };

