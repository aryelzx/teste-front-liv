import { Aside } from "./components/Aside"
import { Main } from "./components/Main"
import { MoviesContextProvider } from "./shared/contexts/moviesContext"

function App() {
  return (

    <MoviesContextProvider>
      <Aside />
      <Main />
    </MoviesContextProvider>
  )
}

export default App
