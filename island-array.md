Island Array - leetcode 

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

1. UNDERSTAND the problem
    - input: islandArray(2D array)
    - output: parameter of the island(number)
        example: 16

2. PLAN - plan out your code 
    1. function takes in a 2D array 
    2. create a var parameter = 0 to keep track of edges and add to the parameter so you can return it 
    3. declare for loop to iterate over rows
        - find length of 2D array that tells you how many rows you have
    4. declare for loop to iterate over columns
  
  IF STATEMENTS:
    1st IF checks if its a 1 
      inside of that:
        1. check if prev column doesn't exist OR if its !1 then add 1 to the parameter 
        2. check if next column doesn't exist OR if its !1 then add 1 to the parameter
        3. check if prev row doesn't exist || if prev row (rows[r - 1][column] === 0) 
            - add one to parameter
        4. check if next row doesn't exist || if next row (rows[r + 1][column] === 0)
            - add one to parameter
    