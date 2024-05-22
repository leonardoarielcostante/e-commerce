"use client"
import React from "react"

export type CardProps = {
  image: string
  title: string
  price: number
}

const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <button className="w-56 border-2 rounded shadow p-1">
      <img className="w-full h-56 object-cover" src={image} alt="" />
      <div className="w-full text-start">
        <h3>{title}</h3>
        <p>{price}$</p>
      </div>
    </button>
  )
}

export default Card
