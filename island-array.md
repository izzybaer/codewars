Island Array - leetcode 

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

1. UNDERSTAND the problem
    - input: islandArray(2D array)
    - output: perimeter of the island(number)
        example: 16

2. PLAN - plan out your code 
    1. function takes in a 2D array 
    2. create a var perimeter = 0 to keep track of edges and add to the perimeter so you can return it 
    3. declare for loop to iterate over rows
        - find length of 2D array that tells you how many rows you have
    4. declare for loop to iterate over columns
  
  IF STATEMENTS:
    1st IF checks if its a 1 
      inside of that:
        1. check if prev column doesn't exist OR if its !1 then add 1 to the perimeter 
        2. check if next column doesn't exist OR if its !1 then add 1 to the perimeter
        3. check if prev row doesn't exist || if prev row (rows[r - 1][column] === 0) 
            - add one to perimeter
        4. check if next row doesn't exist || if next row (rows[r + 1][column] === 0)
            - add one to perimeter

```js
var array = [[0,1,0,0],
             [1,1,1,0],
             [0,1,0,0],
             [1,1,0,0],
             [0,0,1,1]];

const islandArr = (array) => {
  var perimeter = 0;
  
  let rows = array.length;
  for(let i = 0; i < rows; i++){
    let cells = array[i].length;
    for(let j = 0; j < cells; j++){
        // first check if current cell (array[i][j] is 1)
      if(array[i][j] === 1) {
        // then check previous column and add to perimeter
        if(!array[i][j - 1] || array[i][j - 1] !== 1) perimeter ++;
        // then check next column and add to perimeter
        if(!array[i][j + 1] || array[i][j + 1] !== 1) perimeter ++;
        // then check previous row and add to perimeter
        if(!array[i - 1] || array[i - 1][j] !== 1) perimeter ++;
        // then check next row and add to perimeter
        if(!array[i + 1] || array[i + 1][j] !== 1) perimeter ++;
      }
     }
    }
    return perimeter;
  }
  
islandArr(array)
```    