import _ from 'lodash';

// keyBy
export const library = [
    {isbn: '978-84-415-4776-6', title: 'React Practico'},
    {isbn: '978-84-905-6394-6', title: 'Tu cerebro y la música'},
    {isbn: '978-18-965-9789-8', title: 'Pyongyang: A journey in North Korea'}
]



// Iteration without keyBy
/*
 * Let's recreate the keyBy function
 */

export function keyByNuestra(library, key) {

    return library.reduce( (result, item) => {
        result[item[key]] = item;

        return result
    }, {});

}

