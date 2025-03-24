// 04-009:  Objects

/*

In JavaScript, Objects are King.

#### If you Understand Objects, you Understand JavaScript.

- **Objects** are containers for **Properties** and **Methods**.
  
- **Properties** are named **Values**.
  
- **Methods** are **Functions** stored as **Properties**.
  
- **Properties** can be primitive values, functions, or even other objects.
  

In JavaScript, almost "everything" is an object.

- Objects are objects
- Maths are objects
- Functions are objects
- Dates are objects
- Arrays are objects
- Maps are objects
- Sets are objects

All JavaScript values, except primitive data types, are objects.

*/

// Object - Property (as key : Value )


// Defining an object

var user = { name: 'Kristine' };
console.log(user);


// Accessing Object properties

// Method 1 - .DOT notation
console.log( user.name );
// Method 2 - [BRACKET] notation
console.log( user['name'] );


// Modifying Object Properties

user.name = 'Jordan';
console.log(user.name);


// Working with Nested Objetcs

var user = {

    name: 'Kristine',
    age: 12,
    city: 'Kansas',
    grades: {

        math: 90,
        science: 80,
        language: 100

    }
}

console.log(user.grades)
console.log(user.grades.math)