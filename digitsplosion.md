Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
```javascript
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999"
```
```javascript
const explode = (str) => {
  let newStr = '';
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < parseInt(str[i]); j++){
      newStr += str[i];
    }
  }
  return newStr;
}

const explode = s => s.split('').map(x => x.repeat(+x)).join('')

// oh yeah... .repeat()
```