import React from "react"
import diamond from "../../../src/assets/diamond.svg"
import shirt from "../../../src/assets/shirt.svg"
import dress from "../../../src/assets/dress.svg"
import smartphone from "../../../src/assets/smartphone.svg"

export type CategoriesProps = {
  // types...
}

const Categories: React.FC<CategoriesProps> = () => {
  return (
    <section className="w-full flex justify-center items-center text-xl pt-4">
      <div className="w-10/12 border-t-2 border-b-2 p-4">
        <ul className="w-full justify-between flex">
          <button className="flex flex-col justify-center items-center">
            <img width="50" src={shirt} alt="" />
            <li>Men</li>
          </button>
          <button className="flex flex-col justify-center items-center">
            <img width="50" src={dress} alt="" />
            <li>Woman</li>
          </button>
          <button className="flex flex-col justify-center items-center">
            <img width="50" src={smartphone} alt="" />
            <li>Tecnology</li>
          </button>
          <button className="flex flex-col justify-center items-center">
            <img width="50" src={diamond} alt="" />
            <li>Jewelry</li>
          </button>
        </ul>
      </div>
    </section>
  )
}

export default Categories
