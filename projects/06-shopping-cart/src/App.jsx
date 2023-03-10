import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Footer from './components/Footer'
import Cart from './components/Cart'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/cart'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
      <Cart />
    </CartProvider>
  )
}

export default App
