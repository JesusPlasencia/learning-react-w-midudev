export function fromObjectToArray (objectInput) {
  let arrayOutput = []
  try {
    arrayOutput = Object.keys(objectInput).map(item => ({ item: objectInput[item] }))
  } catch (e) {
    arrayOutput = []
  }
  return arrayOutput
}
