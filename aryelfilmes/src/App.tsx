import { Aside } from "./components/Aside"
import { Main } from "./components/Main"
import { MoviesContextProvider } from "./shared/contexts/moviesContext"

function App() {
  return (

    <MoviesContextProvider>
      <div className="min-w-screen min-h-screen bg-[#141414]">
        <Aside />
        <Main />
      </div>
    </MoviesContextProvider>
  )
}

export default App
