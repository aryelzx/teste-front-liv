import { MdOutlineMovieFilter } from "react-icons/md";
import { PiHeartBreakFill } from "react-icons/pi";
import { useFavoritesMoviesContext } from "../../shared/contexts/favoritesMoviesContext";
import img from '../../shared/utils/images/profilee2.jpg';
import { Aside } from "../Aside";
import { FavoritesMoviesList } from "./components/FavoritesList";

function FavoriteMoviesList() {
  const { favsMovies } = useFavoritesMoviesContext()
  return (
    <div>
      <Aside />
      <div className="ml-[100px] h-[100vh] bg-[#141414] text-white">
        <header className="w-full h-2/6 border-b-2 rounded justify-center items-center flex flex-col gap-5">
          <div className="w-[100px] h-[100px] border-2 border-white rounded-full">
            <img className="rounded-full w-full h-full" src={img} alt="profile picture" />
          </div>
          <h1 className="text-3xl">Aryel Cordeiro Ramos Gonçalves</h1>
        </header>
        <main>
          <div className="flex m-5 text-2xl items-center gap-3 justify-between">
            <p className="flex items-center gap-3 ">
              Minha lista
              <MdOutlineMovieFilter size={30} />
            </p>
            <p>filtro</p>
          </div>
          <div>
            {favsMovies.value.length === 0 && (
              <div className="flex flex-col items-center justify-center opacity-70">
                <i className="text-3xl">Você ainda não tem filmes favoritos.</i>
                <span className="m-3 ">
                  <PiHeartBreakFill size={100} />
                </span>
              </div>
            )}
          </div>
          <div>
            <FavoritesMoviesList />
          </div>
        </main>
      </div >
    </div>
  )
}

export { FavoriteMoviesList };

