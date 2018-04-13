```javascript
let intArr = [9, 5, 13, 7, 1, 4];

const highestProduct = (intArr) => {
  // can i arrive at an optimal answer with only one pass on all the values?
  let highestProduct = intArr[0] * intArr[1];
  // assuming we have 2 elements in Array
  // what values do I have to keep track of in order to maintain / update the best value so far?
  let highestValue = Math.max(intArr[0], intArr[1])
  
  for(let i = 2; i < intArr.length; i++){
    let currentNum = intArr[i];
    // how can I update the highest value so far?
    highestProduct = Math.max(highestProduct, highestValue * currentNum);
    
    highestValue = Math.max(highestValue, currentNum);
  }
  
  return highestProduct;
}

highestProduct(intArr);
```