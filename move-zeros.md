Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

example:
```javascript moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]```

```javascript

// first solution
const moveZeros = (arr) => {
  for(let i of arr){
    arr.push(arr.splice(arr.indexOf(0), 1)[0])
  }
  return arr;
}

// second solution
var moveZeros = function(arr){
  return arr.filter(ele => ele !== 0).concat(arr.filter(ele => ele === 0));
}

// final refactored solution
const moveZeros = (arr) => arr.filter(ele => ele !== 0).concet(arr.filter(ele => ele === 0));
```