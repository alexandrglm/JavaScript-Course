// 04-010:  Typeof data type

// Basic usage

var name = 'Kristine';
var age = 36;;

typeof name     // string
typeof age      // number


// Primitive Data Type checks

typeof 12;          // number

typeof 'Astros';    // string

typeof true;        // boolean

typeof undefined    // undefined

typeof Symbol();    // symbol

typeof 42n;         // bigint



// Objects types checks

typeof { name: 'Kristine'};     // object

typeof [1, 2, 3];               // object (NOT array)

typeof null;                    // object (historical bug)

typeof function(){}             // function


