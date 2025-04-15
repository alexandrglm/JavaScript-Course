// 05-095

// "navigation.js" content from the guide

// A function exported by default (always)
export default function() {

    return 'This is a Default Export mode,\n it has been imported by the same name of the file which this function is included'

}


export function sumadora(sumA, sumB) {

    return `The sum from ${sumA} & ${sumB} is ... ${sumA + sumB}`
}


export const farewell = 'Bye bye!'

