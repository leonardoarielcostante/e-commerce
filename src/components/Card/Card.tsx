import React from "react"

export type CardProps = {
  image: string
  title: string
  price: number
  setStatus: () => void
}

const Card: React.FC<CardProps> = ({ image, title, price, setStatus }) => {
  return (
    <div
      onClick={setStatus}
      className="w-40 border-2 rounded shadow p-2 cursor-pointer group xl:w-52 2xl:w-60"
    >
      <img
        className="w-full h-48 object-contain p-4 xl:h-60 2xl:h-72"
        src={image}
        alt="Product"
      />
      <div className="w-full text-start xl:text-lg 2xl:text-2xl">
        <h3 className="text-nowrap overflow-hidden text-ellipsis group-hover:text-blue-600">
          {title}
        </h3>
        <p className="font-semibold">$ {price}</p>
      </div>
    </div>
  )
}

export default Card
