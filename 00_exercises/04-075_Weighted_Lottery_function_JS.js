// 04-075

const weightedLottery = weights => {
    let containerArray = [];
  
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
  
    return containerArray[(Math.random() * containerArray.length) | 0];
  };
  
  const weights = {
    dice1: 1,
    dice2: 2,
    dice3: 3,
    dice4: 4,
    dice5: 5,
    dice6: 6
  };
  
console.log(weightedLottery(weights));


// const weightedLottery = weights => {
//     // keep track of your  weights
//     // ['green', 'yellow', 'yellow', 'red', 'red', 'red']

//     let containerArray = [];

//     Object.keys(weights).forEach(key =>{
//         for (let i = 0; i < weights[key]; i++) {
//             containerArray.push(key);
//         }
//     })

//     return containerArray[(Math.random() * containerArray.length) | 0];
// }




// // const weights = { green: 1, yellow: 2, red: 3 }

// const weights = {
//     winning: 1,
//     losing: 1000
// }

// console.log(weightedLottery(weights))


// // function weightedLottery(weights) {

// //     return null

// // }



