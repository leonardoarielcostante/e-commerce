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
      <img
        className="w-6 sm:w-8 lg:w-10 xl:w-12 2xl:w-16"
        src={svg}
        alt={svg}
      />
      <p className="text-xs capitalize pt-2 sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
        {categoryName}
      </p>
    </button>
  )
}

export default Button
