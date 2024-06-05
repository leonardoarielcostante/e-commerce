import { Cart } from "./components/Cart"
import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
import { Modal } from "./components/Modal"
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
        <Modal />
        <Cart />
        <Footer />
      </MainProvider>
    </>
  )
}

export default App
