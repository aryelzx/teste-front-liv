import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Card, CardContent } from "../../../../shared/components/ui/card";
import { useMoviesContext } from "../../../../shared/contexts/moviesContext";


function MoviesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    //TODO
    // fade: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // pauseOnHover: true,
  };
  const { movies } = useMoviesContext()
  return (
    <Slider {...settings}>
      {movies.value.results.map((movie) => {
        return (
          <Card className="max-w-[279px] h-[150px] relative border-none bg-[#141414] cursor-pointer ml-5">
            <CardContent
              className="w-full h-full relative bg-cover bg-center rounded-lg filter brightness-50 hover:brightness-100 transition duration-500 ease-in-out"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                backgroundRepeat: 'no-repeat'
              }}>
              <div className="absolute bottom-0 w-full h-[50px] flex justify-center items-center text-center">
                <h1 className="text-[15px] font-semibold text-white">{movie.title}</h1>
              </div>
            </CardContent>
          </Card>
        )
      })
      }
    </Slider >
  );
}

export { MoviesSlider };

