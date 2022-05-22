import '../App.css'
import { Cell } from './../models/Cell'
import { FC } from 'react'

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

export const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  const cn: string= [ "cell", 
                      cell.color, 
                      selected ? "selected" : '',
                      cell.available && cell.figure ? "availableToAttack" : ""].join(' ')
  return <div 
    className={cn}
    onClick={() => click(cell)}
  >
    {cell.available && !cell.figure && <div className="available" />}
    {cell.figure?.logo && <img src={cell.figure.logo} alt=""/>}
  </div>
}

export default CellComponent