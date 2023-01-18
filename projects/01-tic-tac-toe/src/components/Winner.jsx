import React from 'react'
import { Square } from './Square'

export const Winner = ({ resetGame, winner }) => {
    if (winner == null) return null
    const winnerText = winner === false ? "Draw" : "Win"

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}