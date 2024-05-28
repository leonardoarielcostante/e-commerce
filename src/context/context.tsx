import { ReactNode, createContext, useEffect, useState } from "react"
import useFetchProducts from "../customHooks/useFetchProducts"
import { Product } from "../model/Product"

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
}

export const MainContext = createContext<MainContextProps>({
  products: [],
  category: "",
  setCategory: () => {},
  search: "",
  setSearch: () => {},
})

export function MainProvider({ children }: MainProviderProps) {
  const [category, setCategory] = useState("all products")
  const [search, setSearch] = useState("")
  const products = useFetchProducts(search, category)

  useEffect(() => {
    setCategory(category)
    setSearch(search)
  }, [category, products, search])

  return (
    <MainContext.Provider
      value={{ products, category, setCategory, search, setSearch }}
    >
      {children}
    </MainContext.Provider>
  )
}
