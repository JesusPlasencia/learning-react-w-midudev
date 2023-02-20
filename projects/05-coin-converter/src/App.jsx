import './App.css'
import './../node_modules/spin.js/spin.css'
import { SvgIcon } from './components/SvgIcon/SvgIcon'
import { useState } from 'react'

// ! Components //

// ! Components //

function App () {
  const [isOutputAble, setIsOutputAble] = useState(false)
  const [input, setInput] = useState('')

  const handleChangeInput = (event) => {
    const newInput = event.target.value
    if (newInput.match(/^[0-9]*$/)) {
      setInput(newInput)
      setIsOutputAble(true)
    }
  }

  return (
    <div className='page'>

      <header>
        <h1 className='title'>X-Coin</h1>
      </header>

      <main className='coin-container'>
        <section className='picker-container'>
          <div className='picker-input'>
            Dollar
          </div>
          <div className='change-container'>
            <SvgIcon iconName='change' />
          </div>
          <div className='picker-output'>
            Euros
          </div>
        </section>
        <section className='converter-container'>
          <div className='input-container'>
            <input type='text' className='input' value={input} onChange={handleChangeInput} />
          </div>
          <div className='output-container'>
            <input type='text' className={isOutputAble ? 'output' : 'output-none'} />
          </div>
        </section>
      </main>

    </div>
  )
}

export default App
