// 05-089

console.log('Testing Dev-Browser Scripts execution OK')

// Creating a Class that extensds default e/error handling
class WebErrorClass extends Error {

    constructor(errorMsg='This is a basic error msg by Class', ...params) {

        super(...params);
        this.errorMsg = errorMsg;

    }

}


function sideComponent (func) {
    return func();
}


/*
debugComponent = () => {
    
    try {

        return 'Debug Component works properly!'
    
    } catch (e) {

        // throw new Class('Class', error)
        throw new WebErrorClass('WebErrorClass', e);

    }

}
console.log(sideComponent(debugComponent));*/


// Better when throw is added on invokations
// Let's force a custom error
try {

    console.log(sideComponent('A string must fail'));

} catch (e) {

    throw new WebErrorClass('WebErrorClass', e)

}
