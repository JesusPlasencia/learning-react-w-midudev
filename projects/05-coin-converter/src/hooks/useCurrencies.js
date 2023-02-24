import { useState } from 'react'
import { data } from './../mocks/list-of-currencies.json'
import { fromObjectToArray } from './../utils/functions'

export function useCurrencies () {
  const [currencyInput, setCurrencyInput] = useState(fromObjectToArray(data)[0])
  const [currencyOutput, setCurrencyOutput] = useState(fromObjectToArray(data)[1])
  const [currencies, setCurrencies] = useState(fromObjectToArray(data))
  const [hasError, setHasError] = useState(null)

  const handleChangeCurrencyInput = (newCurrencyInput) => {
    const newCurrency = fromObjectToArray(data).find(currency => currency.code === newCurrencyInput)
    if (newCurrency) {
      return setCurrencyInput(newCurrency)
    }
    return setHasError(true)
  }

  const handleChangeCurrencyOutput = (newCurrencyOutput) => {
    const newCurrency = fromObjectToArray(data).find(currency => currency.code === newCurrencyOutput)
    if (newCurrency) {
      return setCurrencyOutput(newCurrency)
    }
    return setHasError(true)
  }

  return {
    currencies,
    hasError,
    currencyInput,
    currencyOutput,
    setCurrencies,
    handleChangeCurrencyInput,
    handleChangeCurrencyOutput
  }
}
