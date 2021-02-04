import { crossArrayType } from '../types'

const START_INDEX = 4
const BOARD_SIZE = 9

const winOptions = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [3, 4, 5],
  [6, 7, 8],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
]

export const generateStartArray = (): crossArrayType => {
  const initalArray = new Array(BOARD_SIZE).fill('')
  initalArray[START_INDEX] = 'X'
  return initalArray
}

export const generateWinArray = (array: crossArrayType, winIndex: number): crossArrayType => {
  return array.map((_, index) => {
    return winOptions[winIndex].includes(index) ? 'X' : ''
  })
}
