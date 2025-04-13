// 04-067

// Rules

// toThePowerOf(2, 3) => 8
// reduce()

/*
const toThePowerOf = (num, exp) => {

    const items = Array(exp).fill(num);
    const reducer = (total, currentValue) => total ** currentValue;

    return items.reduce(reducer)


}

console.log(toThePowerOf(2, 3))      // 8
console.log(toThePowerOf(3, 3))      // 27
console.log(toThePowerOf(10, 3))     // 1000
*/



function toThePowerOf(num, exp){ 
    return num ** exp 
}

console.log(toThePowerOf(Math.PI, 3))