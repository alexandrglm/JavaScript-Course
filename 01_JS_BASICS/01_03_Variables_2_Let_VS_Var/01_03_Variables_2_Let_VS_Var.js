// 04-005:  Variables (2) -> Let VS Var

/*
We shouldn't start a global variable with let if, then,
we want to re-declare it


let age = 12;   // NOPE!
console.log(age);

let age = 15;
*/

// So, the correct initialization will use var, then let

var age = 21;
console.log(age);

let age = 32;
console.log(age)

var sum = age + 11
console.log(sum);
