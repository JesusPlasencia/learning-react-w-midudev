import { useEffect, useState } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('You can\'t search an empty title...')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('You can\'t search a movie with numbers')
      return
    }

    if (search.length < 3) {
      setError('A title must to be a minimum length of 3')
      return
    }

    setError(null)
  }, [search])

  return {
    search,
    setSearch,
    error
  }
}
