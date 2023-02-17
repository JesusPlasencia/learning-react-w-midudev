import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error('useCart must be use within a cardProvider')
  }

  const { cart, addToCart, clearCart, removeFromCart } = context

  return {
    cart,
    addToCart,
    clearCart,
    removeFromCart
  }
}
