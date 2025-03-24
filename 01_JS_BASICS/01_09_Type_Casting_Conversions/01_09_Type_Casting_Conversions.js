// 04-011: Type Casting, data types parsing/conversions

// BE CAREFUL WITH AUTOMATIC TYPE COERCION

'100' - 42;     // 58 - Directly parses String to Int

100 + null      // 100 - Null is equal to 0

'100' + 42      // 10042 - The plus operator CONVERTS Numbers to Strings
42 + '100'      // 42100 - It concatenates both values as Strings



// Type Casting

// Number to String - `String()` - `.toString()`

let age = 12;

String(age);        // '12', as string
age.toString();     // '12', as string


// String to Number - `Number()` - `parseInt` - `parseFloat`

let count = '33';

Number(count);      // 33, as number
parseInt(count)     // 33, as number 
parseFloat(count)   // 33, as number (a float)

+"33";              // 33 (unary operator)


// Boolean Conversion - `Boolean(1 ... or... 0)


Number(true);       // 1
Number(false);      // 0

Boolean(1);         // True
Boolean(2);         // False

