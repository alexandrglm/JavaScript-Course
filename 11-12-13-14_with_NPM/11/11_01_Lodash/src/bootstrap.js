/*
05-079  -  05-080

1. Lodash Array Methods
2. _.times(n, function)
3. _.filter(collection, syntax)
4. _.keyBy(collection, KeyProperties)
5. _.reduce(collection, function, initialValues)
6. _.random([lower=1], [upper=0])
*/
import _ from 'lodash'

// 2. .times()
/*
 * 2. .times()
 *
 * 
 * 
 * 
 * 
 * 
 * 
 */
const randNumber = () => Math.round(Math.random() * 100);
const randChoices = _.times(5, randNumber);

console.log(randChoices);       // [ 69, 19, 59, 26, 44 ]

// Same try without Lodash advantages

let randChoiceVanilla = [];

for ( let idx = 0; idx < 5; idx++) {

    randChoiceVanilla.push(Math.round(Math.random() * 100))

}

console.log(randChoiceVanilla)  // [ 24, 82, 91, 25, 32 ]


// Same try but using Array() methods
const randChoicesVanillaConciso = Array(5).fill().map(() => Math.round(Math.random() * 100) )

console.log(randChoicesVanillaConciso)      // [ 59, 24, 87, 68, 30 ]

//////////////////////////////////////////////////////////////////////////////////

/*
 * 3. .filter()
 *
 * 
 */
const players = [
    { name: 'Altuve, J', battingAverage: 0.346 },
    { name: 'Bregman, A', battingAverage: 0.284 }
] 

const over300 = _.filter(players, player => player.battingAverage > 0.300)

console.log(over300);
/*
[
  {
    "name": "Altuve, J",
    "battingAverage": 0.346
  }
]
*/

// Filtering from objects without using Lodash

const over300vanilla = players.filter(player => player.battingAverage > 0.300);
console.log(over300vanilla)
/*
{
  "name": "Altuve, J",
  "battingAverage": 0.346
}
*/

// 


//////////////////////////////////////////////////////////////////////////////////

/*
 * 4. .keyBy()
 *
 * Transforms an Array into an Object keyed by the chosen property value
 */

const library = [
    {isbn: '978-84-415-4776-6', title: 'React Practico'},
    {isbn: '978-84-905-6394-6', title: 'Tu cerebro y la música'},
    {isbn: '978-18-965-9789-8', title: 'Pyongyang: A journey in North Korea'}
]

const titlesKeyBy = _.keyBy(library, 'title');
/*
{
  "React Practico": {
    "isbn": "978-84-415-4776-6",
    "title": "React Practico"
  },
  "Tu cerebro y la música": {
    "isbn": "978-84-905-6394-6",
    "title": "Tu cerebro y la música"
  },
  "Pyongyang: A journey in North Korea": {
    "isbn": "978-18-965-9789-8",
    "title": "Pyongyang: A journey in North Korea"
  }
}
*/
const ISBNKeyBy = _.keyBy(library, 'isbn')
/*
{
    "978-84-415-4776-6": {
      "isbn": "978-84-415-4776-6",
      "title": "React Practico"
    },
    "978-84-905-6394-6": {
      "isbn": "978-84-905-6394-6",
      "title": "Tu cerebro y la música"
    },
    "978-18-965-9789-8": {
      "isbn": "978-18-965-9789-8",
      "title": "Pyongyang: A journey in North Korea"
    }
}
*/


console.log(titlesKeyBy);
console.log(ISBNKeyBy);

// There's no built-in analogue function in vanillaJS, but .reduce() can supply this

const titlesReduce = library.reduce( (objects, item) => {

    objects[item.title] = item;

    return objects;

},
// empty {}
{}); 

console.log(titlesReduce);
/*
{
  "React Practico": {
    "isbn": "978-84-415-4776-6",
    "title": "React Practico"
  },
  "Tu cerebro y la música": {
    "isbn": "978-84-905-6394-6",
    "title": "Tu cerebro y la música"
  },
  "Pyongyang: A journey in North Korea": {
    "isbn": "978-18-965-9789-8",
    "title": "Pyongyang: A journey in North Korea"
  }
}
*/


//////////////////////////////////////////////////////////////////////////////////

/*
 * 5. _.reduce(collection, function, initialValue)
 *
 * Iterates over a collection, accumulating the results
 */

// Case 1:  Summing numbers

const sum = _.reduce([12, 24, 36], (total, num) => total + num, 0 );

console.log(sum)        // 72


// Case 2:  Totaling nested object values

const homerunStats = [
    { name: 'Bregman, A',  hr: 19 },
    { name: 'Altuve, J',   hr: 24 },
    { name: 'Springer, G', hr: 34 },
    { name: 'Gurriel, Y',  hr: 18 },
    { name: 'Gonzalez, M', hr: 23 }
];

const totalHomeRun = _.reduce(homerunStats, (total, player) => total + player.hr, 0)

console.log(totalHomeRun);      // 118



// Case 3:  Generating HTML strings

const links = [
    'https://google.com',
    'https://basque.devcamp.com'
]

const webLinks = _.reduce(links, function(html, link){

    return `<a href="${link}">${link}</a><br>`.concat(html);

}, '');

console.log(webLinks);    
 // <a href="https://basque.devcamp.com">https://basque.devcamp.com</a><br><a href="https://google.com">https://google.com</a><br>


 //////////////////////////////////////////////////////////////////////////////////

/*
 * 5.  _.random([lower=1], [upper=0])
 *
 * Generates random numbers within a range, inclusive of bounds.
 */

const randNumberLodash = _.random(1, 100);

console.log(randNumberLodash);

const randNumberListLodash = _.times(5, () => _.random(1, 100));

console.log(randNumberListLodash)   