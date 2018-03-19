The marketing team are spending way too much time typing in hashtags.
Let's help them with out own Hashtag Generator!

Here's the deal:

If the final result is longer than 140 chars it must return false.
If the input is a empty string it must return false.
It must start with a hashtag (#).
All words must have their first letter capitalized.
Example Input to Output:

" Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"

" Hello World " => "#HelloWorld"

```javascript
const generateHashtag = (str) => {
  let strArr = str.split(' ')
  for(let i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i].substr(0,1).toUpperCase() + 
      (strArr[i].length > 1 ? strArr[i].substr(1).toLowerCase() : '');
  }
    return '#' + strArr.join('');
  }
```