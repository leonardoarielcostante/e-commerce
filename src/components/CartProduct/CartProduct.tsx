import cross from "../../assets/cross.svg"
import React, { useContext } from "react"
import { Product } from "../../model/Product"
import { MainContext } from "../../context/context"

export type CartProductProps = {
  product: Product
  quantity: number
}

const CartProduct: React.FC<CartProductProps> = ({ product, quantity }) => {
  const { cartItems, setCartItems } = useContext(MainContext)

  function handleClick() {
    const updatedCartItems = cartItems.filter(
      (item) => item.item.id !== product.id
    )
    setCartItems(updatedCartItems)
  }

  return (
    <div className="flex justify-center items-center relative p-2 shadow shadow-slate-500 rounded my-2">
      <button onClick={() => handleClick()} className="absolute top-2 right-2">
        <img width="12" src={cross} alt="Cross logo" />
      </button>
      <img
        className="object-fill w-14 2xl:w-20"
        src={product.image}
        alt="Product image"
      />
      <div className="flex flex-col justify-start items-start w-full pl-2">
        <p className="text-xs xl:text-sm 2xl:text-base">{product.title}</p>
        <p className="font-bold 2xl:text-base">${product.price}</p>
      </div>
      <div className="pr-6 font-bold">
        <p>x{quantity}</p>
      </div>
    </div>
  )
}

export default CartProduct
