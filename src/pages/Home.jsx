import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Tic Tac Toe Game</p>

      <div className="game">
        <div className="status">
          {winner
            ? `Winner: ${winner}`
            : board.every(Boolean)
            ? "It's a Draw!"
            : `Next Player: ${isXNext ? "X" : "O"}`}
        </div>

        <div className="board">
          {board.map((value, index) => (
            <button
              key={index}
              className="square"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>

        <button className="reset-btn" onClick={resetGame}>
          Restart Game
        </button>
      </div>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default Home;
