// 04-006:  Variables (3) -> Hoisting


// Only declarations are hoisted, not initializations
console.log(name)
var name = 'kristine'   // "Undefined"

/*
How JS handles Hoisting?

*/

// Where you understand this:
console.log(age);
var age = 15;

// JS understand this:

var age
console.log(age);
var age = 15;


/*
To prevent undesired behaviours:

- Always declare and initialize variables at the beginning of their scope, BEFORE using them.
- Use let (or const) instead of var.
*/

let userName = 'Pepito';
console.log(userName)

userName = 'Kristine'
console.log(userName)