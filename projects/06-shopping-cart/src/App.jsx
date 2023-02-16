import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(initialProducts)

  return (
    <div className='App'>
      <h1>Shopping Cart 🛒</h1>
      <Products products={products} />
    </div>
  )
}

export default App
