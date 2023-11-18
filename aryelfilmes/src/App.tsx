import { RouterProvider } from "react-router-dom"
import { router } from "./routes/main.routes"
import { FavoritesMoviesContextProvider } from "./shared/contexts/favoritesMoviesContext"
import { MoviesContextProvider } from "./shared/contexts/moviesContext"
function App() {
  return (
    <>
      <MoviesContextProvider>
        <FavoritesMoviesContextProvider>
          <RouterProvider router={router} />
        </FavoritesMoviesContextProvider>
      </MoviesContextProvider>
    </>
  )
}

export default App
