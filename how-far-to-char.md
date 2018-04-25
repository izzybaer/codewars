Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 

Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

```javascript
const howFarToChar = (str, char) => {
  let results = [];
  
  for(let i = 0; i < str.length; i++){
    for(let count = 0, found = false; found === false; count++){
      if((i - count >= 0 && str.charAt(i - count) === char) ||
      (i + count < str.length && str.charAt(i + count) === char)) {
        results.push(count);
        found = true;
      }
    }
  }
  return results;
}

howFarToChar('leetcode', 'e');
```