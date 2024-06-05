import React, { useContext } from "react"
import { MainContext } from "../../context/context"
import useFetchCategories from "../../customHooks/useFetchCategories"
import { Button } from "../Button"
import { Category } from "../../model/Category"

export type CategoriesProps = {
  // types...
}

const Categories: React.FC<CategoriesProps> = () => {
  const categories = useFetchCategories()
  const { setCategory, setSearch } = useContext(MainContext)

  function setData(e: Category) {
    setCategory(e.name)
    setSearch("")
  }

  return (
    <section className="w-full flex pt-4">
      <div className="w-full border-t-2 border-b-2 py-2">
        <div className="flex justify-evenly">
          {categories.map((e, index) => (
            <Button
              key={index}
              handleClick={() => setData(e)}
              svg={e.icon}
              categoryName={e.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
