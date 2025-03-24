// 04-008:  Primitive Data Types

/*
About Weak typing language as JS is:

It means that ANY type of data can be assigned
and reassigned to a variable.
*/

var dynamicVar = 'I am a String';
console.log(typeof dynamicVar);

dynamicVar = 42;
console.log(typeof dynamicVar) // Now, it's a number

dynamicVar = 'I am a String again. I can be ANY data type'


// Primitive Data Types

// 1. Boolean Data Type

var truthy = true;
var nonTruthy = false;

var isUserLogged = false;

if (isUserLogged) {

    console.log('The user is logged in');

} else {
    console.log('The user is not logged in')
}

// 2. Null Data Type

var absenceOfValue = null;

console.log(absenceOfValue); // Remenber, null is always treated as Number


// 3. Undefined Data Type

var notDefined;

console.log(notDefined);

// 4. Number Data Type

var age = 25;
var price = 99.99;

console.log(age);
console.log(price);

// 5. String Data Type

var firstName = "Alice";
var greeting = 'Hello World!';

console.log(firstName);
console.log(greeting);

// 6. Symbol Data Type (Will be mentioned in Modern JS section)

var uniqueId = Symbol('id');

console.log(uniqueId);

