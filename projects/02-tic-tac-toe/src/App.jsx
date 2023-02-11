import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti';
import { Square } from './components/Square';
import { TURNS } from './constants/constants';
import { checkEndGame, checkWinnerFrom } from './logic/board'
import { Turn } from './components/Turn';
import { Winner } from './components/Winner';
import { saveGameToStorage, resetGameStorage } from './logic/storage'

function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn') 
    return turnFromStorage ?? TURNS.X
  })

  // there arent a winner yet (null), false is a draw
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = (index) => {
    // Dont update the position if there any value
    if (board[index] || winner) return

    // Update the board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Change Turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Save the match after every movement
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Checking if we have a winner
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <Turn turn={turn} />
      <Winner resetGame={resetGame} winner={winner} />
    </main>
  )
}

export default App
