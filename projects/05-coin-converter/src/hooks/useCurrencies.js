import { useState } from 'react'
import { data } from './../mocks/list-of-currencies.json'
import { fromObjectToArray } from './../utils/functions'

export function useCurrencies () {
  const [currencies, setCurrencies] = useState(fromObjectToArray(data))

  return {
    currencies,
    setCurrencies
  }
}
