
console.log('Testing Dev-Browser Scripts execution OK')

// A Fantastic way to execute snippets as side components functions
// Commonly used on React, Vue, Angular, ....
function sideComponent (func) {

    return func();

}

debugComponent = () => {
    return 'sideComponent and func working properly!'
}

widget = () => {

    return '<div>Hellllo</div>'

}

anyTexts = () => {
    return 'Example text'
}

// Let's invoke
console.log(sideComponent(debugComponent));
console.log(sideComponent(widget));


// Let's add some errors
// console.log(sideComponent('a string not a funcion'))
/*
CONSOLE ERROR LOG:

Uncaught TypeError: func is not a function
sideComponent http://localhost:42599/12_01-Basic_Error_Handling_Syntax/12_01:20
<anonymous> http://localhost:42599/12_01-Basic_Error_Handling_Syntax/12_01:40
*/


// Adding TRY - CATCH
try {

    console.log(sideComponent('Not a Function to try and catch'));

} catch (e) {

    console.error('DEBUG: Error with sideComponent', e);
}

    
//
try {

    console.log(sideComponent(anyTexts));

} catch (e) {

    console.error('DEBUG: Error with sideComponent', e);
}
    