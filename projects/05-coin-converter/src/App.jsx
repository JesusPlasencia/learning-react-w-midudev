import './App.css'
import { useState } from 'react'

// ! Components //
import { SvgIcon } from './components/SvgIcon/SvgIcon'
import Alert from './components/Alert'
import Footer from './components/Footer'
// ! Components //

function App () {
  const [input, setInput] = useState('')
  const [hasError, setHasError] = useState(false)

  const handleChangeInput = (event) => {
    const newInput = event.target.value.replace(/,/g, '').toString()
    console.log('newInput:', newInput)
    // const newInput = event.target.value
    if (newInput.length === 10) {
      return setHasError(true)
    }
    // if (newInput.startsWith('0')) {
    //   return
    // }
    if (newInput === '') {
      setInput(newInput)
      return
    }
    if (newInput.match(/^(?:\d*(.)?(\d{1,2})?)$/)) {
      console.log('Paso Prueba')
      setInput(newInput)
    }
  }

  const showInput = (input) => {
    if (input === '') {
      return ''
    }
    if (input.charAt(input.length - 1) === '.') {
      return (parseFloat(input)).toLocaleString('en-US') + '.'
    }
    return (parseFloat(input)).toLocaleString('en-US')
  }

  return (
    <div className='page'>

      <header>
        <img src='./dollar.png' />
        <h1 className='title'>X-Coin</h1>
      </header>

      <main className='coin-container'>
        <section className='picker-container'>
          <div className='picker-input'>
            <div className='coin'>$</div>
            <p>USD</p>
          </div>
          <div className='change-container'>
            <SvgIcon iconName='change' />
          </div>
          <div className='picker-output'>
            <div className='coin'>€</div>
            <p>EUR</p>
          </div>
        </section>
        <section className='converter-container'>
          <div className='input-container'>
            <input
              className='input' value={showInput(input)} onChange={handleChangeInput}
            />
          </div>
          <div className='output-container'>
            <input
              className='output'
              value={(parseFloat(input) * 0.95 || 0.00).toLocaleString('en-US')}
              readOnly
            />
          </div>
        </section>
      </main>

      {hasError && <Alert />}

      <Footer />

    </div>
  )
}

export default App
