import { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../../../../shared/components/ui/dialog";
import { useFavoritesMoviesContext } from "../../../../shared/contexts/favoritesMoviesContext";
import { useMoviesContext } from "../../../../shared/contexts/moviesContext";
import { DataMoviesInterface } from "../../../../shared/interfaces/getMovies.interface";

function RatingMoviesSlider() {
  const [selectedRatingMovie, setSelectedRatingMovie] = useState<DataMoviesInterface>({} as DataMoviesInterface)

  const { favsMovies } = useFavoritesMoviesContext()
  const { ratingMovies } = useMoviesContext()

  function handleAddFavoriteMovie(movie: DataMoviesInterface) {
    const movieExists = favsMovies.value.find((item) => item.id === movie.id)
    if (movieExists) return
    favsMovies.setValue([...favsMovies.value, movie])
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    fade: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <Slider {...settings}>
      {ratingMovies.value.results.map((movie) => {
        return (
          <div key={movie.id} className="flex flex-col  cursor-grab">
            <Dialog>
              <Card className="max-w-[279px] h-[150px] relative border-none bg-[#141414] cursor-pointer ml-5">
                <CardContent
                  className="w-full h-full bg-cover bg-center rounded-lg filter brightness-50 
                  hover:brightness-100 transition duration-500 ease-in-out flex justify-center items-center absolute"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat'
                  }}>
                  <DialogTrigger
                    className="w-full h-full absolute"
                    onClick={() => setSelectedRatingMovie(movie)}
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
                      <h1 className="text-2xl font-semibold">{selectedRatingMovie.title}</h1>
                      <div className="w-12 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                        <p className="text-black font-mono font-semibold text-sm">
                          {selectedRatingMovie.vote_average}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  { //TODO adicionar loading para imagem
                    <img
                      className="rounded-lg w-full h-52 object-cover object-center my-4"
                      src={`https://image.tmdb.org/t/p/w500/${selectedRatingMovie.backdrop_path}`}
                      alt={selectedRatingMovie.backdrop_path} />
                  }
                  <div className="flex flex-col overflow-auto">
                    <div
                      className="w-64 flex gap-2 items-center border-2 border-gray-500 rounded p-1 cursor-pointer"
                      onClick={() => handleAddFavoriteMovie(movie)}
                    >
                      <p>ADICIONAR AOS FAVORITOS</p>
                      <MdFavoriteBorder size={30} />
                    </div>
                    <div className="overflow-auto h-48">
                      <h1 className="text-2xl mt-4">Sinopse:</h1>
                      <p className="text-base pt-2">{selectedRatingMovie.overview}</p>
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

