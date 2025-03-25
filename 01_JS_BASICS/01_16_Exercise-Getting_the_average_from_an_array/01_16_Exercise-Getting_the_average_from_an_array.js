// 04-018: Array Average Calculation



// 1. Basic approach (imperative)

function getAverageBasic(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

    }

    return sum / arr.length;
}

console.log(getAverageBasic([1, 2, 3]));  // 2



// 2. Functional approach using reduce()

function getAverageFunctional(arr) {

    var sum = arr.reduce((total, current) => total + current, 0);

    return sum / arr.length;

}

console.log(getAverageFunctional([1, 2, 3, 4]));  // 2.5




// 3. With error handling

function getAverageSafe(arr) {

    if (!Array.isArray(arr)) return 0;

    if (arr.length === 0) return 0;
    
    var numbers = arr.filter(item => typeof item === 'number');

    var sum = numbers.reduce((acc, val) => acc + val, 0);

    return sum / numbers.length;
}

console.log(getAverageSafe([]));            // 0 (empty array)
console.log(getAverageSafe([1, 'a', 3]));  // 2 (ignores non-numbers)



// 4. Alternative implementations

// Using forEach

function getAverageForEach(arr) {

    let sum = 0;

    arr.forEach(num => sum += num);

    return sum / arr.length;
}





// Using recursion

function getAverageRecursive(arr, sum = 0, index = 0) {

    return index >= arr.length 

        ? sum / arr.length 
    
        : getAverageRecursive(arr, sum + arr[index], index + 1);

    }





// More Practical examples


// Student grades

var grades = [85, 90, 78, 92, 88];

console.log(`Average grade: ${getAverageFunctional(grades)}`);



// Temperature data

var temperatures = [22.5, 23.1, 21.8, 24.3, 22.9];

console.log(`Avg temperature: ${getAverageFunctional(temperatures).toFixed(1)}°C`);




// Performance considerations

var bigArray = Array(1000000).fill(1);  // 1 million elements


console.time('Reduce');
getAverageFunctional(bigArray);
console.timeEnd('Reduce');


console.time('ForLoop');
getAverageBasic(bigArray);
console.timeEnd('ForLoop');