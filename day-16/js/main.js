


function f(){
console.log(`hello function`);
}
f();

function f1 (x) {
    console.log(x * x);
}
f1(5);

function f2 (x, y){
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
f2(2, 3);

function f3 (x, y){
    console.log(Math.pow(x + y, 2));
}
f3(3, 4);

function e (m, c){
    console.log(m * Math.pow(c, 2));
}
const c = 300000;
e(87, c);

function f4(x){
    console.log(Math.cos(x) - Math.sin(x));
}f4(45);

function factorial(x){
    let multiplication = 1;
    for(i = 1; i <= x; i++){
        multiplication = multiplication * i
    }
    console.log(multiplication)
}

factorial(5);

function f5(x){
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + 5 * x + 12);
}
f5(2);

function f6(x){
    console.log(Math.sqrt(x));
}
f6(9);

let numbers = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8];

for(i = 0; i < numbers.length; i++){
    if(isEven(numbers[i])){
        numbers[i] = numbers[i] + 4;
    }else{
        numbers[i] = numbers[i] - 5;
    }
}
console.log(numbers);


function isEven(x){
    if(x % 2 == 0){
        // console.log(`even`);
        return true
    } else{
        // console.log(`odd`);
        return false
    }
}

isEven(5);
console.log(isEven(numbers[0]));
console.log(isEven(numbers[1]));

function addTwoNumbers(x, y){
    return x + y;
}
console.log(addTwoNumbers(4, 5));

function multiplyTwoNumbers(x, y){
    return x * y
}
console.log(multiplyTwoNumbers(4, 5));

function multiplyThreeNumbers(x , y, z){
    const m = x * y * z;
    return m
}
const result = multiplyThreeNumbers(4, 5, 6);
console.log(result);

