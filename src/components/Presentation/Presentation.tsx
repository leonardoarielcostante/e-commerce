import React from "react"
import image from "/images/presentation.png"

export type PresentationProps = {
  // types...
}

const Presentation: React.FC<PresentationProps> = () => {
  return (
    <section className="w-full flex justify-center items-center pt-4 object-cover">
      <div className="w-10/12 bg-black rounded-lg relative">
        <img
          className="rounded-lg w-full h-[500px] object-cover opacity-35"
          src={image}
          alt="Presentation image"
        />
        <div className="flex flex-col absolute justify-center items-center text-white top-0 left-0 w-full h-full">
          <p className="text-4xl pb-4">Find the best products in our store.</p>
          <a
            href="#products"
            className="p-2 font-bold border rounded-xl hover:bg-white hover:text-black transition-all ease-in-out"
          >
            Go to store
          </a>
        </div>
      </div>
    </section>
  )
}

export default Presentation
