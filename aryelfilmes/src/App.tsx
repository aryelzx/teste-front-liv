import { Aside } from "./components/Aside"
import { Main } from "./components/Main"

function App() {
  return (
    <div className="w-screen h-screen bg-[#141414] grid grid-cols-1">
      <Aside />
      <Main />
    </div>
  )
}

export default App
