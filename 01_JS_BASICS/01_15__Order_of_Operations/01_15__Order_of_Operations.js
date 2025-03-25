// 04-017: Order of Operations (PEMDAS/BODMAS)


// 1. Parentheses/Brackets have highest priority

console.log((2 + 3) * 4);      // 20 (vs 14 without parentheses)
console.log(2 + (3 * 4));       // 14


// 2. Exponents/Orders (Right-to-left associativity)

console.log(2 ** 3 ** 2);       // 512 (not 64)
console.log((2 ** 3) ** 2);     // 64 (explicit grouping)


// 3. Multiplication/Division (Left-to-right)

console.log(8 / 4 * 2);         // 4
console.log(8 * 4 / 16);        // 2


// 4. Addition/Subtraction (Left-to-right)

console.log(10 - 3 + 2);        // 9 (not 5)


// Mixed operations examples

console.log(5 + 5 * 10);        // 55 (multiplication first)
console.log((5 + 5) * 10);      // 100 (parentheses force addition first)


// Practical math examples
// Compound interest formula: A = P(1 + r/n)^(nt)

var principal = 1000;

var rate = 0.05;

var periods = 12;

var years = 5;

var amount = principal * (1 + rate/periods) ** (periods*years);

console.log(amount.toFixed(2)); // 1283.36





// Common pitfalls

console.log(5 / 5 * 4);         // 4 (not 0.25)

console.log(1 / 2 * 3);         // 1.5 (not 0.166)

console.log(5 + "5" * 2);       // 15 (not "105")



// Debugging complex expressions

// Break into steps:

var step1 = 5 * 10;           // 50

var step2 = 6 ** 2;           // 36

var step3 = step1 / step2;    // ~1.388

var result = 5 + step3 - 1;   // ~5.388

console.log(result.toFixed(2)); // 5.39





// Formatting for clarity

var kineticEnergy = (0.5 * mass * velocity ** 2);  // KE = ½mv²

var projectileRange = (velocity ** 2 * Math.sin(2 * angle)) / gravity;