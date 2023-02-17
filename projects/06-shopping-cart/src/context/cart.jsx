import { createContext, useState } from 'react'

// Create the Context
export const CartContext = createContext()

// Create the Provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    // Check if the product is already in the cart
    const productInCard = cart.findIndex(item => item.id === product.id)

    if (productInCard >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCard].quantity += 1
      setCart(newCart)
      return
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
