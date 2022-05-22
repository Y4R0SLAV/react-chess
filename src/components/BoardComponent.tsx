import React, {FC, Fragment, useEffect, useState} from 'react'
import '../App.css'
import { Board } from './../models/Board' 
import { Cell } from './../models/Cell'
import CellComponent from './CellComponent'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell)
    }
  }

  useEffect(() => {
    highlightCells()
  }, [selectedCell])
  

  function highlightCells() {
    board.highlightCells(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return <div className="board">
    { board.cells.map((row: Cell[], index: number) => 
      <Fragment key={index}>
        { row.map(cell => 
          <CellComponent 
            cell={cell}  
            click={click}
            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y} 
            key={cell.id}
          />
        )}
      </Fragment>
    )}
  </div>
}

export default BoardComponent