import { useEffect, useState } from "react"
import { DataService } from "../services/DataService"
import smartphone from "../../src/assets/smartphone.svg"
import diamond from "../../src/assets/diamond.svg"
import shirt from "../../src/assets/shirt.svg"
import dress from "../../src/assets/dress.svg"
import { Category } from "../model/Category"

export default function useFetchCategories() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const FetchData = async () => {
      const getData = new DataService()
      const data = await getData.getCategories()

      const caregoriesWithDetails = data.map((category) => {
        let icon = ""
        switch (category) {
          case "men's clothing":
            icon = shirt
            break
          case "women's clothing":
            icon = dress
            break
          case "electronics":
            icon = smartphone
            break
          case "jewelery":
            icon = diamond
            break
          default:
            icon = ""
        }
        return {
          name: category,
          icon: icon,
        }
      })

      setCategories(caregoriesWithDetails)
    }

    FetchData()
  }, [])

  return categories
}
