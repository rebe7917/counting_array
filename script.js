"use strict";

/* let counter = 0;
const array = [];
console.log(array);

start();

function start(){
array.unshift(counter);
console.log(array);
counter++;
setTimeout(start, 500);
} */

const arr = [];
let counter = 0;
init();

function init(){
counter += 1;
arr.unshift(counter);
console.log(arr.slice(0,9));
setTimeout(init, 500);
}

