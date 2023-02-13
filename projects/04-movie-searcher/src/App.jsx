import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

const App = () => {
  const { search, setSearch, error, disabled } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => {
    console.log('Search:', search)
    getMovies({ search })
  }, 1000), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleCheck = () => {
    setSort(!sort)
  }

  useEffect(() => {
    console.log('Render GetMovies')
  }, [getMovies])

  return (
    <div className='page'>

      <header>
        <h1>Movie Search</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            type='text'
            name='search'
            placeholder='Avengers, Star Wars...'
          />
          <input type='checkbox' onChange={handleCheck} checked={sort} style={{ alignSelf: 'center' }} />
          <button type='submit' disabled={disabled}>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
