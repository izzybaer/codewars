Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Coud you solve it without converting the integer to a string?


```javascript
const isPalindrome = (x) => {
  let str = `${x}`;
  for(let start = 0, end = str.length - 1; start < (str.length >> 1); start++, end--){
    if(str.charAt(start) !== str.charAt(end)) return false;
  }
  return true;
}

isPalindrome(123431)
```