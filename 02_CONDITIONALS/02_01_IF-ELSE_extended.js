// 04-021: Conditionals (1):  IF / ELSE, extended revision


////////////////////////////
// 1.  Core Comparisions //
//////////////////////////

// Strict Equality - == & ===

var num = 32;
var strNum = '32';

console.log(num === strNum)     // Strictly equally? FALSE  
console.log(num == strNum)      // Equal to? TRUE



// Numeric Comparisons

var age = 22;

console.log(age > 20);      // True
console.log(age <= 21);     // False



/////////////////////////////
// 2. IF  ELSE Statements //
///////////////////////////

// Basic If - Else 

let price = 20.99;
let couponCode = 'NEWUSERCOUPON'
let offerDiscounts = ''

function cuponero() {
    if ( price > 20 && price < 25 && couponCode === 'NEWUSERCOUPON' ) {

        offerDiscounts = 'You can get a discount in this article to 19.99€!!!'

        price = 19.99
        
        console.log(offerDiscounts)

    } else {
        
        console.log('Price does not change')
    }
}

cuponero()              // You can get a discount in this article to 19.99€!!!






