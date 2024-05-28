import { Categories } from "./components/Categories"
import { Nav } from "./components/Nav"
import { Presentation } from "./components/Presentation"
import { Products } from "./components/Products"
import { MainProvider } from "./context/context"

function App() {
  return (
    <>
      <MainProvider>
        <Nav />
        <Presentation />
        <Categories />
        <Products />
      </MainProvider>
    </>
  )
}

export default App
