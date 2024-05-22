import React from "react"
import logo from "/images/logo.png"
import loupe from "../../assets/loupe.svg"
import cart from "../../assets/cart.svg"

export type NavProps = {
  // types...
}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="w-full flex p-4 justify-center items-center border-b-2">
      <div className="w-10/12 flex justify-between items-center">
        <ul className="flex gap-4 font-semibold">
          <li>
            <button>Home</button>
          </li>
          <li>Categories</li>
          <li>
            <button>Favorites</button>
          </li>
        </ul>
        <img width="120" src={logo} alt="Store logo" />
        <div className="flex justify-between items-center">
          <form className="border-2 rounded p-1 mr-2">
            <input
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
              className="bg-blue-300 p-1 rounded-full"
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
