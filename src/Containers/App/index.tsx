import { useState } from 'react'

import { ArrowsBlock } from '../../components/ArrowsBlock'
import { Board } from '../../components/Board'

import { generateStartArray, generateWinArray } from '../../utils'
import { crossArrayType } from '../../types'

export const AppContainer: React.FC = () => {
  const [count, setCount] = useState(0)
  const [crossArray, setCrossArray] = useState<crossArrayType>(generateStartArray())

  const onClickHandler = (direction: string) => {
    if (direction === 'back') {
      setCount(count - 1)
      if (count < 1) setCount(8)
      setCrossArray(generateWinArray(crossArray, count))
    } else {
      setCount(count + 1)
      if (count > 7) setCount(0)
      setCrossArray(generateWinArray(crossArray, count))
    }
  }

  return (
    <>
      <Board crossArray={crossArray} />
      <ArrowsBlock onClick={onClickHandler} />
    </>
  )
}
