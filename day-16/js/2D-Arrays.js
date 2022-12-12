
// let row1 = [`x`, `o`, `x`];
// let row2 = [`o`, `o`, `x`];
// let row3 = [`x`, `x`, `o`];
// console.log(row1);
// console.log(row2);
// console.log(row3);

// let tictactoe = 
// [[`x`, `o`, `x`],
//  [`o`, `o`, `x`],
//  [`x`, `x`, `o`]];
// console.log(tictactoe);

// console.log(tictactoe[1][0]);
// tictactoe[0][1] = `x`;

// let a = Number(prompt('0 oos 2 iin hoorond'));
// let b = Number(prompt('0 oos 2 iin hoorond'));
// let c = prompt(`x or y`);
// tictactoe[a][b] = c;


// console.log(`for loop with for loop`);
// for(let i = 0; i < tictactoe.length; i++){
//     // console.log(tictactoe[i]);
//     let output = ``;
//     for(j = 0; j < tictactoe[i].length; j++){
//         output = output + `|` + tictactoe[i][j] + `|`;
        
//     }
//     console.log(output);
// }


let a = 10;
let b = 20;

function even(){
    for( i = a; i <= b; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
even();

