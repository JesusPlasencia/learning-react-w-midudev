import React from 'react'
import Filters from '../Filters'
import './Header.css'

const Header = () => {
  return (
    <header>
      <h1 className='title'>Shopping Cart 🛒</h1>
      <Filters />
    </header>
  )
}

export default Header
