"use strict";

//1
function customCounter(n) {
  let sum = 0;
  return function () {
    return (sum += n);
  };
}

const counter = customCounter(5);
console.log(counter());
console.log(counter());
console.log(counter());

//2
function counterStep(n, step) {
  let number = n;
  return function () {
    return (number += step);
  };
}

const step = counterStep(1, 5);
console.log(step());
console.log(step());
console.log(step());
