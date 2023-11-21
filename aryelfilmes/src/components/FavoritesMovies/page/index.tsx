import { useEffect } from "react";
import { MdOutlineMovieFilter } from "react-icons/md";
import { PiHeartBreakFill } from "react-icons/pi";
import { useFavoritesMoviesContext } from "../../../shared/contexts/favoritesMoviesContext";
import img from '../../../shared/utils/images/user_icon_149329.png';
import { Aside } from "../../Aside";
import { FavoritesMoviesList } from "../components/FavoritesList";
import { FilterFavoriteMovies } from "../components/Popover/index";
import { UseUserData } from "../useUserData";


function FavoriteMoviesList() {
  const { favsMovies } = useFavoritesMoviesContext()
  const { GetDataUser, userData } = UseUserData();

  useEffect(() => {
    GetDataUser()
  }, [])

  return (
    <div>
      <Aside />
      <div className="ml-[100px] h-[100vh] bg-[#0c0c0c] text-white">
        <header className="w-full h-2/6 border-b-2 rounded justify-center items-center flex flex-col gap-2">
          <div className="w-[100px] h-[100px] border-2 border-white rounded-full bg-cover"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${userData.avatar?.tmdb?.avatar_path ? userData.avatar?.tmdb?.avatar_path : img})`,
              backgroundRepeat: 'no-repeat'
            }}>
          </div>
          <i className="text-2xl text-gray-400">{userData.username ? userData.username : 'Sem username...'}</i>
          <i className="text-2xl text-gray-400">{userData.name ? userData.name : 'Sem nome de usuário...'}</i>
        </header>
        <main>
          <div className="flex m-5 text-2xl items-center gap-3 justify-between">
            <p className="flex items-center gap-3 ">
              Minha lista
              <MdOutlineMovieFilter size={30} />
            </p>
            <FilterFavoriteMovies />
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
          <FavoritesMoviesList />
        </main>
      </div >
    </div>
  )
}

export { FavoriteMoviesList };

