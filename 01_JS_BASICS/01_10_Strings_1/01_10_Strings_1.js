// 04-012: Strings 1


// Length
// Remember, LENGTH DOESN'T USE PARENTHESIS 

var str = 'The Quick Fox Jumped Over The Lazy Dog'

str.length  // '44', including spaces


// Character Access Methods 
// .charAt( index )  - Index is ZeroBased

let str = 'The Quick Fox Jumped Over The Lazy Dog'

str.charAt(2)       // 'e'
str.charAt(12)      // 'x'
str.charAt(200)     // ' ' (Empty, out of bound)



// String Concatenation
// .concat()

let str = 'The Quick Fox Jumped Over The Lazy Dog'

str,concat(' again')     // ' again' is appended

str;    // 'The Quick Fox Jumped Over The Lazy Dog again'

let newString = str.concat(' and again.')

newString;  // 'The Quick Fox Jumped Over The Lazy Dog again and again.'




// Search methods

// .includes()

let str = 'Hello World';

str.includes('Hello');  // True
str.includes('Orange'); // False


// .startsWith() - .endsWith()
// Both are case sensitive

str = 'Film: The Substance'

str.startsWith('The')       // False: Not at start
str.endsWith('Substance')   // True

str.endsWith('e')           // True
str.startsWith('Fi')        // True





