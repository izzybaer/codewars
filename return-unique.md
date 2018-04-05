You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

```javascript
let numbers = [4, 4, 4, 7, 4];

const stray = (numbers) => {
  // return the number thats not the same
  let diff = [...new Set(numbers)];
  return diff
 
}
stray(numbers);
```