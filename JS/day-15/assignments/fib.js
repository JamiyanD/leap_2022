let a = Number(prompt(`duriin too`));
let f1 = 0;
let f2 = 1;
let f3 = 0;
let n = 0;

while(n < a){
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    n = n + 1;
    if(f3 < a){
    console.log(f3);
    }
}