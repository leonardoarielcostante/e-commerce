import React, { useContext } from "react"
import logo from "/images/logo.png"
import loupe from "../../assets/loupe.svg"
import cart from "../../assets/cart.svg"
import { MainContext } from "../../context/context"
import useFetchCategories from "../../customHooks/useFetchCategories"
import { Category } from "../../model/Category"

export type NavProps = {
  // types...
}

const Nav: React.FC<NavProps> = () => {
  const categories = useFetchCategories()
  const { setCategory, setSearch } = useContext(MainContext)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.inputSearch.value
    setCategory("all products")
    setSearch(input)
  }

  function setData(e: Category) {
    setCategory(e.name)
    setSearch("")
  }

  return (
    <nav className="w-full flex px-4 justify-center items-center border-b-2 h-24">
      <div className="w-10/12 flex justify-between items-center h-full">
        <ul className="flex items-center justify-center gap-4 font-semibold h-full">
          <li className="h-1/2 flex justify-center items-center rounded hover:bg-slate-200 transition-all ease-in-out">
            <button
              className="h-full px-2"
              onClick={() => setCategory("all products")}
            >
              Home
            </button>
          </li>
          <li className="h-1/2 px-2 rounded-t group flex justify-center items-center transition-all ease-in-out hover:bg-slate-200 cursor-pointer">
            <div className="relative z-50 flex justify-center items-center">
              <p>Categories</p>
              <div className="absolute top-8 text-nowrap bg-slate-200 rounded group-hover:block hidden">
                {categories.map((e, index) => (
                  <a
                    key={index}
                    href="#products"
                    onClick={() => setData(e)}
                    className="flex justify-between items-center w-40 px-2 py-1 hover:bg-slate-300 rounded"
                  >
                    <img width="15" src={e.icon} alt={e.icon} />
                    <p>{e.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </li>
          <li className="h-1/2 flex justify-center items-center rounded hover:bg-slate-200 transition-all ease-in-out">
            <button className="h-full px-2">Favorites</button>
          </li>
        </ul>
        <img width="120" src={logo} alt="Store logo" />
        <div className="flex justify-between items-center">
          <form onSubmit={handleSubmit} className="border-2 rounded p-1 mr-2">
            <input
              id="inputSearch"
              className=" outline-none mr-2 w-32"
              type="text"
              placeholder="Shirt, Hose, Clock..."
            />
            <button type="submit" className="px-1">
              <img width="12" src={loupe} alt="Loupe logo" />
            </button>
          </form>
          <button className="flex border-2 rounded-full pl-2 justify-between items-center w-28">
            <p>12.50$</p>
            <img
              width="28"
              className="bg-slate-300 p-1 rounded-full"
              src={cart}
              alt="Cart logo"
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
