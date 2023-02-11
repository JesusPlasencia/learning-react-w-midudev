import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl, words } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main className='main-container'>
      <h1> App Cats </h1>
      <section className='section-container'>
        {fact && <p className='paragraph-fact'>{fact}</p>}
        {imageUrl && <img
          src={imageUrl} alt={`Image extracted using the first three words for ${words}`}
          className='img-cat'
                     />}
      </section>
      <button onClick={handleClick}>Refresh Fact</button>
    </main>
  )
}
