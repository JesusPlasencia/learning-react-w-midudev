import { useEffect, useState } from 'react'
import { GET_CAT_ENDPOINT_IMAGE_URL, BASE_URL_IMAGE } from '../services/constants'

export const useCatImage = ({ fact }) => {
  const [words, setWords] = useState()
  const [imageUrl, setImageUrl] = useState()
  //! getting the image of a cat with a fact
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    setWords(threeFirstWords)
    fetch(GET_CAT_ENDPOINT_IMAGE_URL(threeFirstWords))
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(BASE_URL_IMAGE + url)
      })
  }, [fact])

  return {
    imageUrl,
    words
  }
}
