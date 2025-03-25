// 04-016: Compound Assignment Operators



// Basic compound assignments

let total = 0;

total += 5;     // 5 (Addition assignment)
total -= 2;     // 3 (Subtraction assignment)
total *= 4;     // 12 (Multiplication assignment)
total /= 3;     // 4 (Division assignment)
total %= 3;     // 1 (Modulus assignment)
total **= 3;    // 1 (Exponentiation assignment)



// String concatenation

let message = "Hello";
message += " World";   // "Hello World"

// Practical examples

// 1. Running totals

let cartTotal = 0;

const item1 = { price: 25 };
const item2 = { price: 40 };

cartTotal += item1.price;  // 25
cartTotal += item2.price;  // 65

// 2. Score tracking

let score = 100;
const penaltyPoints = 20;
const bonusPoints = 15;

score -= penaltyPoints;    // 80
score += bonusPoints;      // 95

// 3. Exponential growth
let bacteria = 2;
bacteria **= 10;           // 1024 (2^10)

// 4. String building
let html = "";
html += "<header>";
html += "<main>Content</main>";
html += "<footer>";
// Result: "<header><main>Content</main><footer>"

// Special cases
let x = 5;
x *= 2 + 3;     // 25 (not 13) - evaluates right side first

// Logical assignment operators (ES2021)
let user = null;
user ||= "Anonymous";      // "Anonymous" (assign if falsy)

let config = { timeout: 0 };
config.timeout ??= 5000;   // 0 (only assigns if null/undefined)

// Common mistakes
let value; 
value += 5;     // NaN (undefined + number)

let count = 10;
count =+ 5;     // 5 (assignment typo, not compound)