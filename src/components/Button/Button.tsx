"use client"
import React from "react"

export type ButtonProps = {
  handleClick: () => void
  svg: string
  categoryName: string
}

const Button: React.FC<ButtonProps> = ({ handleClick, svg, categoryName }) => {
  return (
    <button
      onClick={handleClick}
      className="flex flex-col p-1 rounded justify-center items-center transition-all ease-in-out hover:transform hover:scale-105"
    >
      <img width="50" src={svg} alt={svg} />
      <p className="capitalize pt-2">{categoryName}</p>
    </button>
  )
}

export default Button
