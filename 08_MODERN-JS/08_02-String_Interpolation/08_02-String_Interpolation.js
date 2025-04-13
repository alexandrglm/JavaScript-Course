// 04-050 String interpolation

const lyrics = 'Never gonna give you up'

console.log('I\'m')

/*
To start interpolating something,
you have to change single quotations
for backtips ' -> `
*/

console.log(`I\'m ${lyrics}`)


/*
Remenber:

As long as you can operate within the brackets with the stringed vars,
Any value will be converted into its stringed form.
*/

const truth = true
console.log(`This is ${truth}`)

const price = 42.99
const iva = price * 0.21

console.log(`Price: ${price.toFixed(2)}€ without taxes.`)
console.log(`Price: ${(price + iva).toFixed(2)}€ including taxes.`)

