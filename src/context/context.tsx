import { ReactNode, createContext, useEffect, useState } from "react"
import useFetchProducts from "../customHooks/useFetchProducts"
import { Product } from "../model/Product"
import { CartItem } from "../model/CartItem"
import { CartService } from "../services/CartService"

interface MainProviderProps {
  children: ReactNode
  initialCategory?: string
}

interface MainContextProps {
  products: Product[]
  category: string
  setCategory: (category: string) => void
  search: string
  setSearch: (element: string) => void
  openModal: boolean
  setOpenModal: (status: boolean) => void
  selectedProduct: Product | null
  setSelectedProduct: (product: Product | null) => void
  openCart: boolean
  setOpenCart: (status: boolean) => void
  cartItems: CartItem[]
  setCartItems: (items: CartItem[]) => void
}

export const MainContext = createContext<MainContextProps>({
  products: [],
  category: "",
  setCategory: () => {},
  search: "",
  setSearch: () => {},
  openModal: false,
  setOpenModal: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  openCart: false,
  setOpenCart: () => {},
  cartItems: [],
  setCartItems: () => {},
})

export function MainProvider({ children }: MainProviderProps) {
  const [category, setCategory] = useState("all products")
  const [search, setSearch] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [openCart, setOpenCart] = useState(false)
  const products = useFetchProducts(search, category)

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCartItems = CartService.getCartItems()
    return savedCartItems.length > 0 ? savedCartItems : []
  })

  useEffect(() => {
    CartService.addItemsToLocal(cartItems)
  }, [cartItems])

  useEffect(() => {
    setCategory(category)
    setSearch(search)
  }, [category, products, search])

  useEffect(() => {
    setOpenCart(openCart)
  }, [openCart])

  return (
    <MainContext.Provider
      value={{
        products,
        category,
        setCategory,
        search,
        setSearch,
        openModal,
        setOpenModal,
        selectedProduct,
        setSelectedProduct,
        openCart,
        setOpenCart,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
