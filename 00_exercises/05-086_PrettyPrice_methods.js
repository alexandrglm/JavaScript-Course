// 05-086

/*
Requeriments:

Callbacks:  prettyPrice(grossPrice, extensionPrice)

prettyPrice(3.50, 0.95)
prettyPrice(3.23, 0.95)
prettyPrice(3.345345345, 0.95)
prettyPrice(100, 0.95)


*/


// ATTEMPT 1

// GUIDED EXRERCISE

// BASIC-FAST WAY
const prettyPriceFast = (grossPriceFast, extensionPriceFast) => {

    // Fast way
    return Math.floor(grossPriceFast) + extensionPriceFast

}

console.log(prettyPriceFast(3.50, 0.95));
console.log(prettyPriceFast(3.14, 0.95));
console.log(prettyPriceFast(100, 0.95));
console.log(prettyPriceFast(3.242424, 0.95));



// Adding Validation

const prettyPrice = (grossPrice, extension) => {

    // Adding Data Validation
    if ( Number.isNaN(Number(grossPrice)) || Number.isNaN(Number(extension))  ) {

        return `Please, check values for the gross prices (${grossPrice}) and the extension (${extension})`

    }

    // If the extension isn't decimals
    if (Number.isInteger(extension)) {
        
        extension = extension * 0.01;
    
    }

    return Math.floor(grossPrice) + extension

}


console.log(prettyPrice('sdasd', 0.95))
console.log(prettyPrice(3.50, 'asdasd'))
console.log(prettyPrice(3.50, 0.95))
console.log(prettyPrice(3.1224524, 0.99))
console.log(prettyPrice(100, 99))
console.log(prettyPrice(Math.PI, 99))
console.log(prettyPrice(0.54, 99))