import { useEffect, useState } from "react"
import { Product } from "../model/Product"
import { DataService } from "../services/DataService"

export default function useSearchProducts(
  searchTerm: string,
  category?: string
) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const getData = new DataService()
      let data: Product[]

      if (category === "all products") {
        data = await getData.getProducts()
      } else {
        data = await getData.getProducts(category)
      }

      const filteredProducts = data.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setProducts(filteredProducts)
    }

    fetchData()
  }, [searchTerm, category])

  return products
}
