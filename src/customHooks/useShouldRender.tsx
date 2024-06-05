import { useContext, useEffect, useState } from "react"
import { MainContext } from "../context/context"

export default function useShouldRender() {
  const { openCart } = useContext(MainContext)
  const [shouldRender, setShouldRender] = useState(openCart)

  useEffect(() => {
    let timer: number
    if (!openCart) {
      timer = setTimeout(() => {
        setShouldRender(false)
      }, 300)
    } else {
      setShouldRender(true)
    }

    return () => clearTimeout(timer)
  }, [openCart])

  return shouldRender
}
