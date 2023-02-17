import './Products.css'
import { AddToCartIcon } from '../Icons/Icons.jsx'
import { useCart } from '../../hooks/useCart'

export const Products = ({ products }) => {
  const { cart, addToCart } = useCart()

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
                  <div className='product-add-cart'>
                    <button onClick={() => addToCart(product)}>
                      <AddToCartIcon />
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
