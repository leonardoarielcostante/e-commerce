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
  const { setCategory, setSearch, setOpenCart, cartItems } =
    useContext(MainContext)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.inputSearch.value
    setCategory("all products")
    setSearch(input)
    const goTo = document.getElementById("products")
    if (goTo) {
      goTo.scrollIntoView()
    }
  }

  const total = Math.round(
    cartItems.reduce(
      (accumulator, product) =>
        accumulator + product.item.price * product.quantity,
      0
    )
  )

  function setData(e: Category) {
    setCategory(e.name)
    setSearch("")
  }

  return (
    <nav className="w-full flex px-4 justify-center items-center border-b-2 h-24 text-xs lg:text-base 2xl:text-xl 2xl:h-36">
      <div className="flex items-center h-full sm:justify-between sm:w-10/12">
        <ul className="flex items-center justify-center font-semibold h-full">
          <li className="h-2/5 flex justify-center items-center rounded hover:bg-slate-100 transition-all ease-in-out">
            <button
              className="h-full px-2"
              onClick={() => setCategory("all products")}
            >
              Home
            </button>
          </li>
          <li className="h-2/5 px-2 rounded-t group flex justify-center items-center transition-all ease-in-out hover:bg-slate-100 cursor-pointer">
            <div className="relative z-50 flex justify-center items-center">
              <p>Categories</p>
              <div className="absolute top-6 text-nowrap bg-slate-100 rounded group-hover:block hidden sm:top-6 lg:top-7">
                {categories.map((e, index) => (
                  <a
                    key={index}
                    href="#products"
                    onClick={() => setData(e)}
                    className="flex justify-between items-center w-40 px-2 py-1 hover:bg-slate-300 rounded border-t sm:w-52 2xl:w-80"
                  >
                    <img className="w-4" src={e.icon} alt={e.icon} />
                    <p className="capitalize">{e.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </li>
        </ul>
        <img
          className="hidden sm:block w-32 lg:w-44 2xl:w-64"
          src={logo}
          alt="Store logo"
        />
        <div className="flex justify-between items-center">
          <form
            onSubmit={handleSubmit}
            className="border-2 rounded mr-2 p-1 lg:p-0 2xl:p-1"
          >
            <input
              id="inputSearch"
              className=" outline-none mr-2 w-20 sm:w-24 lg:w-36 2xl:w-56"
              type="text"
              placeholder="Shirt, Hose, Clock..."
            />
            <button type="submit" className="px-1">
              <img
                className="w-2 lg:w-3 2xl:w-5"
                src={loupe}
                alt="Loupe logo"
              />
            </button>
          </form>
          <button
            onClick={() => setOpenCart(true)}
            className="flex border-2 rounded-full pl-2 justify-between items-center"
          >
            <p className="px-1">${total}</p>
            <img
              className="w-6 bg-slate-200 p-1 rounded-full lg:w-7 2xl:w-10"
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
