import { crossArrayType } from '../../types'

import './style.css'

type BoardProps = {
  crossArray: crossArrayType
}

export const Board: React.FC<BoardProps> = ({ crossArray }) => {
  return (
    <>
      <div className='board'>
        {crossArray.map((item, index) => {
          return (
            <div className='cell' key={`${index}${Math.random()}`}>
              {item}
            </div>
          )
        })}
      </div>
    </>
  )
}
