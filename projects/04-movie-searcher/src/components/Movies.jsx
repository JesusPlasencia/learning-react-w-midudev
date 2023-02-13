import React from 'react'

const MovieList = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

const NoMoviesFound = () => {
  return (
    <p>No Movies Found</p>
  )
}

export const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <MovieList movies={movies} />
      : <NoMoviesFound />
  )
}
