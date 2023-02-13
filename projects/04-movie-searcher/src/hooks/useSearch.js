import { useEffect, useState, useRef } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('You can\'t search an empty title...')
      setDisabled(true)
      return
    }

    if (search.match(/^\d+$/)) {
      setError('You can\'t search a movie with numbers')
      setDisabled(true)
      return
    }

    if (search.length < 3) {
      setError('A title must to be a minimum length of 3')
      setDisabled(true)
      return
    }
    setDisabled(false)
    setError(null)
  }, [search])

  return {
    search,
    setSearch,
    error,
    disabled
  }
}
