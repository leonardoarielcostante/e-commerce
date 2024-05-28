"use client"
import React from "react"

export type CardProps = {
  image: string
  title: string
  price: number
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <button className="w-48 border-2 rounded shadow p-1">
      <img className="w-full h-56 object-contain p-4" src={image} alt="" />
      <div className="w-full text-start">
        <h3 className="text-nowrap overflow-hidden text-ellipsis">{title}</h3>
        <p className="font-semibold text-lg">{price}$</p>
      </div>
    </button>
  )
}

export default Card
