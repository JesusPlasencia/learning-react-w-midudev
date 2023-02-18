import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducer/reducer'
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../reducer/reducer-types'

const useCartReducer = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: ADD_TO_CART,
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CLEAR_CART
  })

  return { state, addToCart, removeFromCart, clearCart }
}

// Create the Context
export const CartContext = createContext()

// Create the Provider
export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
