this was an interview problem I had recently, The Game of Life. 

// game of life

// 2D array

// any live cell (represented by a 1) with < 2 live neighbors dies
// any live cell with 2 || 3 live neighbors lives
// any live cell with > 3 live neighbors dies
// any dead cell (represented by a 0) with exactly 3 live neighbors become a live cell
// is there ever a time we dont have to count the live neighbors?

```js
const cellsArray = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const lifeGame = cellsArray =>
  cellsArray.map((row, rowIndex) =>
    row.map((cell, colIndex) => newState(cellsArray, rowIndex, colIndex))
  );

const newState = (cellsArray, rowIndex, colIndex) => {
  const count = liveNeighborCount(cellsArray, rowIndex, colIndex);
  const currentCell = cellsArray[rowIndex][colIndex];
  if (count < 2) return 0;
  if (count > 3) return 0;
  if (count === 3) return 1;
  return currentCell;
};

const liveNeighborCount = (cellsArray, rowIndex, colIndex) =>
  getCell(cellsArray, rowIndex - 1, colIndex - 1) +
  getCell(cellsArray, rowIndex - 1, colIndex + 0) +
  getCell(cellsArray, rowIndex - 1, colIndex + 1) +
  getCell(cellsArray, rowIndex + 0, colIndex - 1) +
  getCell(cellsArray, rowIndex + 0, colIndex + 1) +
  getCell(cellsArray, rowIndex + 1, colIndex - 1) +
  getCell(cellsArray, rowIndex + 1, colIndex + 0) +
  getCell(cellsArray, rowIndex + 1, colIndex + 1);

const getCell = (cellsArray, rowIndex, colIndex) => {
  if (rowIndex < 0) return 0;
  if (rowIndex > cellsArray.length - 1) return 0;
  if (colIndex < 0) return 0;
  if (colIndex > cellsArray[rowIndex].length) return 0;

  return cellsArray[rowIndex][colIndex];
};
```
