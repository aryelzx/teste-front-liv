import { useState } from "react";
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
import { DataMoviesInterface } from "../../../../shared/interfaces/getMovies.interface";

function FamousMoviesSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  const { famousMovies } = useMoviesContext()

  const [selectedMovie, setSelectedMovie] = useState<DataMoviesInterface>({} as DataMoviesInterface)

  return (
    <Slider {...settings}>
      {famousMovies.value.results.map((movie) => {
        return (
          <div className="flex flex-col">
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
                    onClick={() => setSelectedMovie(movie)}
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
                      <h1 className="text-2xl font-semibold">{selectedMovie.title}</h1>
                      <div className="w-12 h-10 rounded-full bg-gray-300 items-center flex justify-center">
                        <p className="text-black font-mono font-semibold text-sm">
                          {selectedMovie.vote_average}
                        </p>
                      </div>
                    </div>
                  </DialogHeader>
                  { //TODO adicionar loading para imagem
                    <img
                      className="rounded-lg w-full h-52 object-cover object-center my-4"
                      src={`https://image.tmdb.org/t/p/w500/${selectedMovie.backdrop_path}`}
                      alt={selectedMovie.backdrop_path} />
                  }
                  <div className="flex flex-col overflow-auto">
                    <div
                      className="w-64 flex gap-2 items-center border-2 border-gray-500 rounded p-1 cursor-pointer"
                      onClick={() => console.log(movie)}
                    >
                      <p>ADICIONAR AOS FAVORITOS</p>
                      <MdFavoriteBorder size={30} />
                    </div>
                    <div className="overflow-auto h-48">
                      <h1 className="text-2xl mt-4">Sinopse:</h1>
                      <p className="text-base pt-2">{selectedMovie.overview}</p>
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

