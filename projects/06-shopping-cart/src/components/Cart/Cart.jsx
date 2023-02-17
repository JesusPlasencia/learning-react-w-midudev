import './Cart.css'

import { useId } from 'react'
import { CartIcon, ClearCartIcon } from '../Icons'
import { useCart } from '../../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

const Cart = () => {
  const { cart, clearCart, addToCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />
      <aside className='cart'>
        <h3>Checkout</h3>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={() => clearCart()} title='Clean Cart'>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
