import React, { useContext } from "react"
import addCart from "../../assets/addCart.svg"
import cross from "../../assets/cross.svg"
import { MainContext } from "../../context/context"
import { CartItem } from "../../model/CartItem"

const Modal: React.FC = () => {
  const {
    openModal,
    setOpenModal,
    selectedProduct,
    setSelectedProduct,
    cartItems,
    setCartItems,
  } = useContext(MainContext)

  if (!openModal || !selectedProduct) {
    return null
  }

  const handleClose = () => {
    setOpenModal(false)
    setSelectedProduct(null)
  }

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const quantityInput = form.elements.namedItem(
      "quantity"
    ) as HTMLInputElement
    const quantity = Number(quantityInput.value)
    const existingItemIndex = cartItems.findIndex(
      (item) => item.item.id === selectedProduct.id
    )

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemIndex].quantity += quantity
      setCartItems(updatedCartItems)
    } else {
      const itemToAdd: CartItem = { item: selectedProduct, quantity }
      setCartItems([...cartItems, itemToAdd])
    }
    handleClose()
  }

  return (
    <div
      className="fixed flex top-0 left-0 w-full h-screen backdrop-blur justify-center items-center z-50 2xl:text-2xl"
      onClick={handleClose}
    >
      <div
        className="flex flex-col relative justify-center items-center bg-white border rounded p-2 shadow"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="flex rounded-full absolute top-2 right-2 font-bold"
          onClick={handleClose}
        >
          <img width="15" src={cross} alt="Cross icon" />
        </button>
        <img
          className="object-contain rounded w-32 xl:w-40 2xl:w-48"
          src={selectedProduct.image}
          alt={selectedProduct.title}
        />
        <div className="flex flex-col px-5 justify-evenly items-center">
          <h3 className="font-bold w-80 text-center">
            {selectedProduct.title}
          </h3>
          <p className="w-80 text-justify p-2 text-xs 2xl:text-sm">
            {selectedProduct.description}
          </p>
          <div className="text-lg font-bold flex w-full justify-evenly items-center 2xl:text-2xl">
            <p className="">Price: {selectedProduct.price}$</p>
            <form
              onSubmit={handleClick}
              className="flex justify-center items-center"
            >
              <input
                placeholder="1"
                min="1"
                max="99"
                type="number"
                name="quantity"
                required
                className="w-10 border-2 border-slate-400 mr-2 rounded px-1 2xl:w-12"
              />
              <button
                type="submit"
                className="rounded-full p-1.5 bg-slate-300 hover:bg-slate-400"
              >
                <img
                  className="w-5 2xl:w-7"
                  src={addCart}
                  alt="Add cart icon"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
