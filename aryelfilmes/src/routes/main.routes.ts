import { createBrowserRouter } from "react-router-dom";
import { favouritesMoviesRoute } from "../components/FavoritesMovies/routes/index.route";
import { defaultRoute } from "../components/Main/router/index.route";


const router = createBrowserRouter([
  ...favouritesMoviesRoute,
  ...defaultRoute

]);

export { router };

