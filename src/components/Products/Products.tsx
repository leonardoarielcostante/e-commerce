import React from "react"
import { Card } from "../Card"
import image from "../../../public/images/presentation.png"

export type ProductsProps = {
  // types...
}

const Products: React.FC<ProductsProps> = () => {
  return (
    <section className="w-full flex justify-center items-center pt-4">
      <div className="w-10/12">
        <p className="text-xl pl-10">All products</p>
        <div className="grid grid-cols-3 justify-items-center pt-4">
          <Card image={image} title="Pepito" price={20} />
          <Card image={image} title="Pepito" price={20} />
          <Card image={image} title="Pepito" price={20} />
        </div>
      </div>
    </section>
  )
}

export default Products
