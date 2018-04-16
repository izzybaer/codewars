```javascript
const array = ['a', 'a', 'c', 'd', 'e', 'f', 'c'];

const uniqueArray = (array) => {
  let hashmap = {}
  let unique = []
  
  for(let i in array){
   if(!hashmap.hasOwnProperty(array[i])){
     hashmap[array[i]] = 1;
     unique.push(array[i]);
   }
  }
  return unique;
}

uniqueArray(array)
```