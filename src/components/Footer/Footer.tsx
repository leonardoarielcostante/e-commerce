"use client"
import React from "react"

export type FooterProps = {
  // types...
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-24 w-full mt-6 text-white">
      <div className="flex flex-col justify-center items-center h-full bg-black">
        <a
          href="https://leonardoarielcostante.github.io/"
          target="_blank"
          rel="noreferrer"
          className="px-2 py-1 font-bold border rounded-xl hover:bg-white hover:text-black transition-all ease-in-out"
        >
          Contact us
        </a>
        <p>Professional e-commerce 2024.</p>
      </div>
    </footer>
  )
}

export default Footer
