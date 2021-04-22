// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {useLocalStorageState} from '../utils'





function Board({onClick, squares}) {



  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>

      {/* <div className="status">{status}</div> */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {/* <button className="restart" onClick={restart}>
        restart
      </button> */}
    </div>
  )
}

function Game() {


    
    // const [squares, setSquares] = useLocalStorageState('tictactoe', Array(9).fill(null));
    const [squares, setSquares] = useLocalStorageState('tictactoe', Array(9).fill(null));
    const [nextValue, setNextValue] = React.useState(calculateNextValue(squares));
    const [winner, setWinner] = React.useState(calculateWinner(squares));
    const [status, setStatus] = React.useState(calculateStatus(winner, squares, nextValue));
    // const [ history, setHistory ] = React.useState([]);
    const [ history, setHistory] = useLocalStorageState('ttthistory', []);
    // const [ currentStep, setCurrentStep ] = React.useState(0);
    const [ currentStep, setCurrentStep ] = useLocalStorageState('tttcurrentstep', 0);
      
  
    React.useEffect(()=> {
  
        setWinner(calculateWinner(squares))
        setNextValue(calculateNextValue(squares))
        setStatus(calculateStatus(winner, squares, nextValue))

        const tempHistory = [...history]

        tempHistory[currentStep] = squares
        setHistory(tempHistory)

        
          
    }, [squares, winner, nextValue])



    function selectSquare(square) {


      if (!!squares[square] || !!winner ){
        return
      }


    
      const tempSquares = [...squares]
      tempSquares[square] = nextValue
      setCurrentStep(currentStep+1)
      setSquares(tempSquares)

      if (history.length > currentStep+1){
        
        
        setHistory([...history].slice(0, currentStep+1))

      }


    }
  
    function restart() {
  
      setSquares(Array(9).fill(null))
      setCurrentStep(0)
      setHistory([])
  
    }

    function handleHistoryClick(i) {
      setSquares(history[i])
      setCurrentStep(i)
      
    }

    // const moves = [<div>1. <button>{`Go to `}</button></div>]

    const moves = history.map((move, i) => (<div key={`history${i}`}>{i+1}. <button onClick={()=>handleHistoryClick(i)} disabled={i===currentStep} >{`Go to ${ i===0 ? 'game start' : 'move '+ i  }`}</button></div>))



  return (
    <div className="game">
    <div className="game-board">
      {/* <Board onClick={selectSquare} squares={currentSquares} /> */}
      <Board onClick={selectSquare} squares={squares} />
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>{moves}</ol>
    </div>
  </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  const xSquaresCount = squares.filter(r => r === 'X').length
  const oSquaresCount = squares.filter(r => r === 'O').length
  return oSquaresCount === xSquaresCount ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
