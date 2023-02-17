import React from 'react'
import { useCart } from '../../hooks/useCart'
// import { useFilters } from '../../hooks/useFilters'
import './Footer.css'

const Footer = () => {
  // const { filters } = useFilters()
  const { cart } = useCart()
  const newCart = cart.map(item => {
    const { id, title, quantity } = item
    return {
      id, title, quantity
    }
  })
  return (
    <footer className='footer'>
      {JSON.stringify(newCart, 2, null)}
      {/* <h4>Prueba técnica de React ⚛️ － <span>@JesusPlasencia</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}

export default Footer
