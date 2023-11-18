import { RouterProvider } from "react-router-dom"
import { router } from "./routes/main.routes"
import { MoviesContextProvider } from "./shared/contexts/moviesContext"
function App() {
  return (
    <>
      <MoviesContextProvider>
        <RouterProvider router={router} />
      </MoviesContextProvider>
    </>
  )
}

export default App
