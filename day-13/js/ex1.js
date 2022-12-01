
/*let count = 0;
console.log('loop starts')
while (count < 10) {
    console.log(count);
    count = count + 2;  
}*/

// program to check if a number is prime or not

// take input from the user
/*const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}*/
/*let a = Number(prompt("duriin too oruulna uu"));
let count = 0;
let sum = 0;
while(count < a){
    console.log(count);
    sum = count + sum;
    count = count + 2;
    console.log(sum);
}*/

/*let a = Number(prompt("duriin too oruulna uu"));
let count = 0;
let urjver = 1;
while(count < a){
    count = count + 1;
    urjver = count * urjver;
    console.log(urjver);
}*/

//let a = Number(prompt("duriin too oruulna uu"));
//let b = Math.ceil(Math.random()*100) ;

console.log("     *")
count = "*";
a = "    *";
b = "*";
while(count < "***** " && a < "    *****"){
   
 
    console.log(a + count + b);
    count = count + "*"; 
    a = a + "*";
    b = b + "*";
}


