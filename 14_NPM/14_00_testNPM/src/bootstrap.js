/*
 * Module 14 - NPM / Package Manager
 *
 * 
*/
import moment from 'moment'

// now() timestamp
console.log(moment.now());      // 1744719995977 timestamp




// PARSING ->  DATE formatting
const birthday = moment('1988-01-02', 'YYYY-MM-DD');

console.log(birthday);
/*
Object { _isAMomentObject: true, _i: "1988-01-02", _f: "YYYY-MM-DD", _isUTC: false, _pf: {…}, _locale: {…}, _d: Date Sat Jan 02 1988 00:00:00 GMT+0100 (Central European Standard Time), _isValid: true }
​
_d: Date Sat Jan 02 1988 00:00:00 GMT+0100 (Central European Standard Time)
​
_f: "YYYY-MM-DD"
​
_i: "1988-01-02"
​
_isAMomentObject: true
​
_isUTC: false
​
_isValid: true
​
_locale: Object { _calendar: {…}, _longDateFormat: {…}, _invalidDate: "Invalid date", … }
​
_pf: Object { empty: false, overflow: -1, charsLeftOver: 0, … }
​
<prototype>: Object { add: createAdder(val, period), calendar: calendar$1(time, formats), clone: clone(), … }
bootstrap.js:14
*/


// Creating a counter (that counts days-monts-years since the given date up to ... today)

console.log( birthday.fromNow() )       // 37 years ago

console.log( moment('2025-04-10', 'YYYY-MM-DD').fromNow()  );   // 6 days ago
console.log( moment('2025-04-01', 'YYYY-MM-DD').fromNow()  );   // 15 days ago
console.log( moment('2025-03-10', 'YYYY-MM-DD').fromNow()  );   // a month ago
console.log( moment('2024-11-10', 'YYYY-MM-DD').fromNow()  );   // 5 months ago
console.log( moment('2020-03-10', 'YYYY-MM-DD').fromNow()  );   // 5 years ago


// 'dddd' -> Day of the week from a date
console.log( birthday.format('dddd') );         // Saturday (lol)

// 'MMM D' - 'MMM d' -> Month from a date
console.log( birthday.format('MMM D') );        // Jan 2 (MONTH blank-space DAY)
console.log( birthday.format('MMM - D') );      // Jan - 2 (MONTH blank_space guion blank_space DAY)

// 'MMM Do YYYY' -> Month NumberedDay Yeart
console.log( birthday.format('MMM Do of YYYY') );  // Jan 2nd 1988
console.log( birthday.format('MMM Do, of YYYY') ); // Jan 2nd, of 1988




// More formats
/*
FORMATTING:

YYYY-MM-DD 	                // 2014-01-01
dddd, MMMM Do YYYY 	        // Friday, May 16th 2014
dddd [the] Do [of] MMMM 	// Friday the 16th of May

hh:mm a 	                // 12:30 pm



INTERNATIONALIZATION:

LT 	                        // 8:30 PM
LTS 	                    // 8:30:25 PM
LL 	                        // August 2 1985
ll 	                        // Aug 2 1985
LLL 	                    // August 2 1985 08:30 PM
lll 	                    // Aug 2 1985 08:30 PM
LLLL 	                    // Thursday, August 2 1985 08:30 PM
llll 	                    // Thu, Aug 2 1985 08:30 PM
*/


const todayRightNow = moment('20250415150822', 'YYYYMMDDHHmmss');

console.log(todayRightNow.format('LLLL'));      // Tuesday, April 15, 2025 3:08 PM

console.log(todayRightNow.format('dddd, MMMM Do, YYYY h:mm:ss A'));     // Tuesday, April 15th, 2025 3:08:22 PM
console.log(todayRightNow.format('dddd, MMMM Do, YYYY HH:mm:ss'));      // Tuesday, April 15th, 2025 15:08:22




// ADDING - REMOVING - COUNTING
/*

m.add(1, 'day')
m.subtract(2, 'days')

m.startOf('day')
m.endOf('day')
m.startOf('hour')

*/

const yesterday = moment('20250414', 'YYYYMMDD')

console.log( yesterday.format('LLLL') )

// .add('number', 'type')
console.log( yesterday.add(1, 'day').format('LLLL') );
console.log( yesterday.add(2, 'days').format('LLLL') );
console.log( yesterday.add(1, 'month').format('LLLL') );
console.log( yesterday.add(2, 'months').format('LLLL') );
console.log( yesterday.add(1, 'year').format('LLLL') );
console.log( yesterday.add(2, 'years').format('LLLL') );

// .subtract
console.log( yesterday.subtract(2, 'years').format('LLLL') );
console.log( yesterday.subtract(1, 'year').format('LLLL') );
console.log( yesterday.subtract(2, 'months').format('LLLL') );
console.log( yesterday.subtract(1, 'month').format('LLLL') );
console.log( yesterday.subtract(2, 'days').format('LLLL') );
console.log( yesterday.subtract(1, 'day').format('LLLL') );


// More examples

// direct format -> .toString()

const twoWeeksFromNow = moment().add(14, 'days');

console.log(twoWeeksFromNow.format('YYYY-MM-DD'));
console.log(twoWeeksFromNow.toString());


const sixMonthsAgo = moment().subtract(6, 'months');

console.log(sixMonthsAgo.toString());