import storeLogo from "../../../public/images/logo.png"
import cross from "../../assets/cross.svg"
import React, { useContext } from "react"
import { CartProduct } from "../CartProduct"
import { MainContext } from "../../context/context"
import useShouldRender from "../../customHooks/useShouldRender"

export type CartProps = {
  // types...
}

const Cart: React.FC<CartProps> = () => {
  const { openCart, setOpenCart, cartItems } = useContext(MainContext)
  const shouldRender = useShouldRender()

  const total = cartItems.reduce(
    (accumulator, product) =>
      accumulator + product.item.price * product.quantity,
    0
  )

  if (!shouldRender) {
    return null
  }

  return (
    <div className="w-full flex justify-end fixed top-0 left-0 backdrop-blur border z-50">
      <div
        className={`w-[300px] xl:w-[350px] 2xl:w-[500px] bg-white h-screen shadow-lg shadow-black relative transform transition-transform duration-300 ease-in-out ${
          openCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpenCart(false)}
          className="absolute top-2 right-2"
        >
          <img width="15" src={cross} alt="Cross logo" />
        </button>
        <div className="border-b-2 border-slate-400 flex justify-center items-center">
          <img
            width="200"
            className="object-fill py-4"
            src={storeLogo}
            alt="Store logo"
          />
        </div>
        <div className="p-2 scroll overflow-y-auto h-[80%]">
          {cartItems.map((e, index) => (
            <CartProduct key={index} product={e.item} quantity={e.quantity} />
          ))}
        </div>
        <div className="border-t-2 border-slate-300 font-bold flex justify-center items-center text-2xl 2xl:text-4xl">
          <p className="pt-4">Total: ${total}</p>
        </div>
      </div>
    </div>
  )
}

export default Cart
