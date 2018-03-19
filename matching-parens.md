Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

examples:

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

```javascript
const validParens = (str) => {
  let matching = [];
    for(let i in str){
      let ch = str[i]
      if(ch === '(')
        matching.push(ch)
      if(ch === ')')
        if(matching.pop() !== '(')
          return false;
    }
    return matching.pop() ? false : true;
  }
```