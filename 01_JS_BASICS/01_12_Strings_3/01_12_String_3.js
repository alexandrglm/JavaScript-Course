// 04-014:  Strings (3)


// Slicing content - .slice()

let text = 'The quick brown fox';

text.slice(4, 9);       // 'quick'
text.slice(10);         // 'brown fox' (10th to the end)

// Backward slice
text.slice(-8);         // 'own fox' (The latest 8 chars)
text.slice(-8, -4);     // 'own'



// Whitespaces - .trim()

let str2 = ' Hello World   ';

str2.trim();        // 'Hello World' with no whitespaces
str2.trimStart();   // 'Hello World   ' Trimmed at the beginning
str2.trimEnd();   // '  Hello World' Trimmed at the end




// Case Conversions - .toUpperCase() / .toLowerCase() / .toTitleCase()

let words = 'hEllO WoRld'

words.toUpperCase()     // 'HELLO WORLD'
words.toULowerCase()     // 'hello world'
words.toTitlerCase()     // 'Hello World'



////////////////////////////////////

// Methods Chaining


let phrase = '   The QUICK bRoWn FOX';

phrase.trimStart().toLowerCase().slice(4,15)        // 'quick brown