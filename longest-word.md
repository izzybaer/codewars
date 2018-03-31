Write a function longest() that takes one argument, a list of words, and returns the length of the longest word in the list.

For example:

>>> words = ['simple', 'is', 'better', 'than', 'complex']
>>> longest(words)
7
Do not modify the input list.


```javascript 
const longest = words => words.reduce((a, word) => Math.max(a, word.length), 0);

const longest = words => Math.max(...words.map(x => x.length));

const longest = (arr) => {
  let longestWord = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > longestWord){
      longestWord = arr[i].length;
    } 
  } 
  return longestWord;
}
```