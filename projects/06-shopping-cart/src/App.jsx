import './App.css'
import { Products } from './components/Products'
import { products } from './mocks/products.json'

function App () {
  return (
    <div className='App'>
      <Products products={products} />
    </div>
  )
}

export default App
