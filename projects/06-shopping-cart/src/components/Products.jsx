import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {
            products.slice(1, 10).map(product => (
              <li key={product.id} className='product'>
                {/* <img src={product.thumbnail} alt={product.title} /> */}
                <div className='product-image' />
                <div className='product-name'>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div className='product-add-cart'>
                  <button>
                    <AddToCartIcon />
                  </button>
                </div>
              </li>
            ))
        }
      </ul>
    </main>
  )
}
