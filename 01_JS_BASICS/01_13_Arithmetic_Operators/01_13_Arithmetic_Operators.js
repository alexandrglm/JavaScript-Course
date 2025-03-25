// 04-015: Arithmetic Operators


// Basic arithmetic operations

2 + 2;   // 4 (Addition)
10 - 3;  // 7 (Subtraction)
10 / 2;  // 5 (Division)
2 * 10;  // 20 (Multiplication)
2 ** 3;  // 8 (Exponentiation)

// Modulus operator (remainder)

5 % 2;   // 1 (5 divided by 2 leaves remainder 1)
10 % 3;  // 1
8 % 2;   // 0 (Even numbers always return 0)



// Increment/Decrement operators

let num = 2;

num++;  // Postfix: returns 2, then increments to 3
++num;  // Prefix: increments to 4, returns 4

num--;  // Postfix: returns 4, then decrements to 3
--num;  // Prefix: decrements to 2, returns 2




// Unary operators (type conversion)

let strNum = '100';
let convertedNum = +strNum;  // Converts to number 100

let positive = 10;
let negative = -positive;    // -10

// Special cases

+true    // 1
+false   // 0
+null    // 0
+'hello' // NaN

// Compound assignment operators

let total = 0;
total += 5;   // 5 (Addition assignment)
total -= 2;   // 3 (Subtraction assignment)
total *= 4;   // 12 (Multiplication assignment)
total /= 3;   // 4 (Division assignment)
total %= 3;   // 1 (Modulus assignment)
total **= 3;  // 1 (Exponentiation assignment)

// Order of operations examples

5 + 5 * 10;       // 55 (Multiplication before addition)
(5 + 5) * 10;     // 100 (Parentheses override precedence)
5 / 5 * 4;        // 4 (Left-to-right evaluation)
2 ** 3 ** 2;      // 512 (Right-associative exponentiation)

// Practical applications
// 1. Counter implementation

let counter = 0;
function increment() {
    return ++counter;
}

// 2. Pagination logic
function isLastPage(itemCount, itemsPerPage) {
    return itemCount % itemsPerPage === 0;
}

// 3. Temperature conversion
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}