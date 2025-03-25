// 04-013:  Strings (2)


// .repeat()

let string = 'Hello! ';

string.repeat(3);   // 'Hello! Hello! Hello! '


// Pattern Matchings - .match()
// Using REGEX

const phonePattern =/(\d{2}-\d{3}-\d{2}-\d{2})/;

'Call 93-125-55-27'.match(phonePattern)     // // [object Array] (2) ["93-125-55-27","93-125-55-27"]



// String Replacement - .replace()

let str = 'The fox jumps';

str.replace('dog', 'cat');

str.replace(/DOG/i, 'cat');  // the case insensitive claulse /*/i



// Searchs
// .search()

let str2 = 'The cat flies over our head. So cute cat'

str2.search('dog')      // -1   No findings
str2.search('cat')      // 4 - The character (non-zero index) where the finding starts    



// ,indexOf() - .lastIndexOf()

let str3 = 'The beat goes on, the beat goes down';

str3.indexOf('beat');       // 4 - The fist appareance at non-zero character level
str3.lastIndexof('beat');   // 22 - The last appareance at non-zero char. level