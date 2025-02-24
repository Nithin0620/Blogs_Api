import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="py-4 border-b bg-white shadow-sm fixed top-0 inset-x-0 z-10">
      <NavLink to="/">
        <h1 className="font-bold text-3xl uppercase text-center text-gray-800">
        My Blogs
      </h1>
      </NavLink>
    </header>
  )
}

export default Header;
