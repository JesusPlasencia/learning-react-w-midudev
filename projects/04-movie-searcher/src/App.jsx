import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

const App = () => {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()
  // const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    // #region JS
    // ! Using JS
    // const data = Object.fromEntries(new window.FormData(event.target))
    // console.log(data)
    // #endregion
    // #region useRef
    // ! Using useRef
    // const inputEl = inputRef.current
    // const value = inputEl.value
    // console.log(value)
    // #endregion
    console.log({ search })
  }

  const handleChange = (event) => {
    const newsearch = event.target.value
    if (newsearch.startsWith(' ')) return
    setSearch(newsearch)
  }

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
          <button type='submit'>Search</button>
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
