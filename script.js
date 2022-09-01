"use strict";



const arr = [];
let counter = 0;
init();

function init(){
    // cpunter skal plusses med en 
    // uden ville den skifte tallet ud og ikke tilføje
counter += 1;
// putter tallet foran plads 0
arr.unshift(counter);
console.log(arr.slice(0,9));
//genstarter init functionen 
setTimeout(init, 500);
}


/* let counter = 0;
const arr = [];
console.log(arr);

start();

function start() {
  arr.unshift(counter);
  console.log(arr);
  counter++;
  if (arr.length > 8) {
    arr.pop();
  }
  setTimeout(start, 1000);
  console.log(counter);
} */
