import React, { useEffect, useState } from 'react'
import "./style.css"


function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

function TicTacToe() {
  const [firstPlayerTurn, setFirstPlayerTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [gameStatus, setGameStatus] = useState(0);

  function handleClick(index) {
    let tempSquares = [...squares];
    if (!winner && tempSquares[index] === "") {
      tempSquares[index] = firstPlayerTurn ? "x" : "o";
      setFirstPlayerTurn(!firstPlayerTurn);
      setSquares(tempSquares);
    }
  }

  function checkWinner() {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ]
    for (let i = 0; i < winPattern.length; i++) {
      const [x, y, z] = winPattern[i];
      if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
        return squares[x];
      }
    }
    return null;
  }

  useEffect(() => {
    const won = checkWinner();
    if (won) {
      setWinner(won);
      setGameStatus(1)
    } else if (!squares.some(square => square === "")) {
      setWinner("DRAW")
      setGameStatus(1)
    }
  }, [squares, firstPlayerTurn]);

  function resetGame() {
    setWinner("");
    setFirstPlayerTurn(true);
    setSquares(Array(9).fill(""))
    setGameStatus(0)
  }
  return (
    <div className='tic-tac-toe-container'>
      <div className='row'>
        <Square onClick={(e) => handleClick(0)} value={squares[0]} />
        <Square onClick={(e) => handleClick(1)} value={squares[1]} />
        <Square onClick={(e) => handleClick(2)} value={squares[2]} />
      </div>
      <div className='row'>
        <Square onClick={(e) => handleClick(3)} value={squares[3]} />
        <Square onClick={(e) => handleClick(4)} value={squares[4]} />
        <Square onClick={(e) => handleClick(5)} value={squares[5]} />
      </div>
      <div className='row'>
        <Square onClick={(e) => handleClick(6)} value={squares[6]} />
        <Square onClick={(e) => handleClick(7)} value={squares[7]} />
        <Square onClick={(e) => handleClick(8)} value={squares[8]} />
      </div>
      <h1>
        {gameStatus === 0 ? `This is ${firstPlayerTurn ? "X" : "O"} turn` : winner ? `Winner is ${winner}` : "It is a DRAW"}
      </h1>
      {gameStatus === 1 ? <button onClick={(e) => resetGame()}>Restart</button> : null}
    </div>
  )
}

export default TicTacToe
