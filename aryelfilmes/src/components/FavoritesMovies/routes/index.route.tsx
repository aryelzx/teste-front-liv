import { RouteObject } from 'react-router';
import { FavoriteMoviesList } from '../index';

const favouritesMoviesRoute: RouteObject[] = [{ path: '/favs', element: <FavoriteMoviesList /> }];

export { favouritesMoviesRoute };

