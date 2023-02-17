import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from '../Icons/Icons.jsx'
import { useCart } from '../../hooks/useCart'

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
            products.slice(0, 10).map(product => {
              const isProductInCart = checkProductInCart(product)
              return (
                <li key={product.id} className='product'>
                  <img src={product.thumbnail} alt={product.title} />
                  <div className='product-name'>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      className={isProductInCart ? 'product-cart-remove' : 'product-cart-add'}
                      onClick={() =>
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)}
                    >
                      {
                        isProductInCart
                          ? <RemoveFromCartIcon />
                          : <AddToCartIcon />
                      }
                    </button>
                  </div>
                </li>
              )
            })
        }
      </ul>
    </main>
  )
}
