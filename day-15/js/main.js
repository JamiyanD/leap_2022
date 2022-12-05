
// let guesses = 0;
// let isSunk = false;
// let hit = 0;

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

// while(!isSunk ){
//     console.log(`game begins`);

//     let userGuess = Number(prompt(`Give me your position?`));
//     guesses = guesses + 1;
//     if(guesses > 6){
//         console.log(guesses);
//         alert(`you lost`);
//         break;
//     }
//     if(userGuess > 0 && userGuess < 7){
//         console.log(userGuess);
//         if(location1 == userGuess || location2 == userGuess || location3 == userGuess){
//             hit = hit + 1;
            
//             if(location1 == userGuess){
//                 location1 = -1;
//             }
//             if(location2 == userGuess){
//                 location2 = -1;
//             }
//             if(location3 == userGuess){
//                 location3 = -1;
//             }
//             alert(`hit`);
//         }else{
//             alert(`miss`);
//         }
//         console.log(hit);
//         if(hit == 3){
//             isSunk = true;
//             alert('you win');
//         }
//     }else{
//         alert(`give me numbers between 0 and 6`);
//     }
    
    
// }

// console.log(`game ends`);