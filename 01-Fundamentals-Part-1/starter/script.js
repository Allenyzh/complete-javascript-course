/*
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Jonas"; // Camel Case
// console.log(firstName);

// let $function = 27;
// console.log($function);

let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

jsIsFun = "Yes!";
console.log(typeof jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); 


let age = 30;
age = 31;


const test = () => {
  let x = 0;
  while (x < 20 && x > -20) {
    console.log(x);
    x++;
    console.log(x);
    x--;
    x--;
    console.log(x);
  }
};

test();


let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

console.log(markBmi, johnBmi);

const compare = () =>
  console.log(
    markBmi > johnBmi
      ? "Mark has a higher BMI than John"
      : markBmi === johnBmi
      ? "Mark has the same BMI as John"
      : "Mark has a lower BMI than John"
  );

compare();
*/

let dolphins = [97, 112, 101];
let koalas = [109, 95, 123];

const maxD = dolphins.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
}, -Infinity);
const maxK = koalas.reduce((accumulator, currentValue) => {
  return accumulator > currentValue ? accumulator : currentValue;
}, -Infinity);

const compare = () =>
  console.log(
    maxD > maxK ? "Dolphins win!" : maxD === maxK ? "Draw" : "Koalas win!"
  );
console.log(maxD, maxK);
compare();
