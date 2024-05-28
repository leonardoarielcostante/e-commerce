import React, { useContext } from "react"
import { Card } from "../Card"
import { MainContext } from "../../context/context"

export type ProductsProps = {
  //types...
}

const Products: React.FC<ProductsProps> = () => {
  const { products, category } = useContext(MainContext)

  return (
    <section
      id="products"
      className="w-full flex justify-center items-center pt-4"
    >
      <div className="w-10/12">
        <p className="text-xl pl-10 capitalize">{category}</p>
        <div className="grid grid-cols-4 justify-items-center pt-4 gap-4">
          {products.map((e) => (
            <Card key={e.id} image={e.image} title={e.title} price={e.price} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
