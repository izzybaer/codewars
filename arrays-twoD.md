// traverse DOM with jQuery

// jQuery is a javascript library

// $(function() {
//   $('li').on('click', function() {
//     $(this).find('li').addClass('special')
//   })
// })


arrays are enumerable
enumerable = countable

how do we modify an array?
```js
.shift() returns removed element (first index)
// remove first element
.unshift('add me') adds elements to front of array and returns new length
// adds element to front of array

.pop() returns removed element (last index)
// remove last element
.push() adds elements to end of array 
// adds elements to end of array 

.splice(2, 2) removes several elements anywhere in array
// mutates original array
// .splice(startIndex, number of elements to remove)

.slice() does not mutate original array
// returns the selected elements in an array 
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.
let arr = ['hello', 'world', 'silly', 'goose', 'slug']

arr.slice(2) returns ['silly', 'goose', 'slug']
```

removes all elements before index 2 and returns new array

```js
let twoD = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11, 12],
            [13, 14, 15]];

const printValues = (twoD) => {
  let rows = twoD.length;
  let items;
  for(let i = 0; i < rows; i++){
    items = twoD[i].length;
    // console.log(i)
    for(let j = 0; j < items; j++){
      // moreItems = twoD[i][j]
      console.log(i, twoD[i][j]);
    }
    // return moreItems;
  }
  return items;
  
}

printValues(twoD)
```

```js
// nested loops and 2D arrays
// use nested loops to access all elements inside 2D arrays

let twoD = [[1, 2, 3, 4, 5, 6 ,7],
[8, 10, 5, 7, 3], [123, 54, 12, 11, 9, 15]]

let rows = twoD.length;
for(let i = 0; i < rows; i++){
  let items = twoD[i].length;
  console.log(i, items);
  for(let j = 0; j < items; j++){
    console.log(twoD[i][j])
  }
}

let bigHero = {characters: [
            {name: 'Hiro', voice: 'Ryan Potter'},
            {name: 'Baymax', voice: 'Steve Adsit'},
            {name: 'Go Go Tomago', voice: 'Jamie Chung'}
  ]};
  
let chars = bigHero.characters;
// let chars = bigHero['characters'];
for(let i = 0; i < chars.length; i++){
  // console.log(chars[i]);
  // console.log(chars[i].name);
  // console.log(chars[i]['voice']);
  for(let property in chars[i]){
    console.log(property, chars[i][property],);
  }
  
}
```
