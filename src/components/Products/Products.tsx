import React, { useContext } from "react"
import { Card } from "../Card"
import { MainContext } from "../../context/context"
import { Product } from "../../model/Product"

export type ProductsProps = {
  //types...
}

const Products: React.FC<ProductsProps> = () => {
  const { products, category, setOpenModal, setSelectedProduct } =
    useContext(MainContext)

  function handleClick(product: Product | null) {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  return (
    <section
      id="products"
      className="w-full flex justify-center items-center pt-4"
    >
      <div className="w-10/12">
        <p className="capitalize xl:text-xl 2xl:text-2xl">{category}</p>
        <div className="grid grid-cols-2 justify-items-center pt-4 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((e) => (
            <Card
              key={e.id}
              image={e.image}
              title={e.title}
              price={e.price}
              setStatus={() => handleClick(e)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
