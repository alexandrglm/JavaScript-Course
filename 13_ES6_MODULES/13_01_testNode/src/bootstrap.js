
// 05-094: Importing/exporting code
/*
import { greeting, multiNums } from './helper';

console.log(greeting);
console.log(multiNums(2,3));
*/



// 05-095:  Importing multiple objects

// 1 - Individualy, { one by one }
import { greeting, multiNums} from './helper.js'

console.log(greeting);
console.log(multiNums(12, 3));



// 2 - Importing any objects by using "wildcard" "as"

import * as multipleImports from './05-095_Multiple_Imports.js'

// Functions
console.log(multipleImports.multipleGretting());

console.log(multipleImports.prettyPrice(24.30, 0.95));

// Classes
const userUno = new multipleImports.Users('Pepito', 'admin');
console.log( userUno.printUsers() );

// Inherit Classes
const userConHerencia = new multipleImports.UserPass('Juanito', 'non-admin', 'password1234');
console.log ( userConHerencia.printUsers() );
console.log ( userConHerencia.printPass() );




// 05-096:  Default Exports

// With, only, a defualt import
/*
import Default_Exports_Guide05096 from './Default_Exports_Guide05096.js';

console.log(Default_Exports_Guide05096())
*/


// Importing multiple objects along the Default

import Default_Exports_Guide05096, {sumadora, farewell} from './Default_Exports_Guide05096.js';

console.log(Default_Exports_Guide05096());
console.log(sumadora(5, 4));
console.log(farewell)