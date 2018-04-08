I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

```javascript
const catDog = (humanYears) => {
  // return humanYears, catYears, dogYears
  let catYears = 0;
  let dogYears = 0;
  
  for(let i = 1; i < humanYears.length; i++){
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
catDog(4)
```

// if (humanYears === 1) catYears && dogYears === 15
// if (humanYears === 2) catYears && dogYears === 24
// if (humanYears >= 3) catYears += 4 dogYears += 5