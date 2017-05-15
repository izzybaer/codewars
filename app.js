'use strict';

function makeNegative(num) {
  if (num > 0) {
    num = num * -1
  }
  return num;
}

function numberToString(num) {
  return num.toString();
}

function multiply(a, b){
  return a * b
}

function positiveSum(arr) {
  var sum=0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]>0)
      sum+=arr[i];
  }
  return sum;
}

function boolToWord( bool ){
  return bool ? 'Yes':'No';
}

function find_average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

function makeNegative(num) {
  if(num > 0) {
    num = num * (-1);
  }
  return num;
}

function makeNegative(num) {
  return -Math.abs(num);
}

function numberToString(num) {
  return num.toString();
}
