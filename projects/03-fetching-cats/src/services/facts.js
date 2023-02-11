import { CAT_ENDPOINT_RANDOM_FACT } from './constants'

export const getRandomFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const json = await res.json()
  const { fact } = json
  return fact
}
