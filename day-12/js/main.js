/*let a = "hi";
let b = "hi";

console.log(a < b); // usgiin daraallaar
console.log(a == b);
console.log(a === b);

let c = 10;
let d = "10";
console.log(c == d);
console.log(c === d);
console.log(c !== d);

let e = true; // true=1 ; false=0
let f = false;

console.log(e < f);
console.log(e > f);

let result = 10;
if (result > 10){
    console.log('more than 10');
} else {
    console.log('less than 10');
}

result > 10 ? (result < li ? console.log('test') : console.log('hi')) : console.log('less than 10'); //true yed ? false yed :

const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;


tip1 >= 5000 && tip1 <= 30000 ? console.log(tip1 * 1.15) : console.log(tip1 * 1.2);
tip2 >= 5000 && tip2 <= 30000 ? console.log(tip2 * 1.15) : console.log(tip2 * 1.2);
tip3 >= 5000 && tip3 <= 30000 ? console.log(tip3 * 1.15) : console.log(tip3 * 1.2);

let tipResult3 = (tip3 >= 5000 && tip3 <= 30000) ? tip3 * 1.15 : tip3 * 1.2;
console.log(tipResult3);

let tipResult2 = (tip2 >= 5000 && tip2 <= 30000) ? tip2 * 1.15 : tip2 * 1.2;
console.log(tipResult2);

let tipResult1 = (tip1 >= 5000 && tip1 <= 30000) ? tip1 * 1.15 : tip1 * 1.2;
console.log(tipResult1);

const input = prompt('give me your money');
const numberInput = Number(input);
//const numberInputPrompt = Number (prompt('give me your money'));

let tipResult = (tip1 >= 5000 && tip1 <= 30000) ? tip1 * 1.15 : tip1 * 1.2;
console.log(tipResult1);*/

//console.log('its dog');
//console.error('it is error');

//const str = "Life, the universe and everything.";
//console.log(str.length);

//let registerNumber = prompt('register ee oruulna uu');

//console.log(registerNumber.length); // urtiin hemjeeg haruuldag

/*if (registerNumber.length == 10){
    alert('zov');
    
} else{
    alert('oron buruu bna');
}*/
//console.log(registerNumber.charAt(0));// ehnii useg umu toog hevlene
//console.log(registerNumber.charAt(1));


//console.log(registerNumber[1]);
//console.log(registerNumber.substr(0,2));
//console.log(registerNumber.substr(2,10));

//const registerChar = registerNumber.substr(0,2);
//const registerNum = registerNumber.substr(2,10);

/*if(!Number.isInteger(Number(registerChar)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10){
   console.log("correct");
}else{
   console.log("wrong");
}
*/
let phoneNumber = prompt('utasni dugaaraa oruulna uu');
let phone1 = Number(phoneNumber);
const phoneChar = phoneNumber.substr(0,4);
const phoneNum = phoneNumber.substr(4,12);


if(phoneNumber.substr(0,4) == +976 && phoneNumber.length == 12  ){
    console.log('mongol dugaar mun bna');
}else{
    console.log('mongol dugaar bish bna')
}
//console.log(Number("abc"));
//console.log(Number.isInteger(Number("abc")));
//console.log(Number("12345678"));
//console.log(Number.isInteger(Number("12345678")));



//console.log(str.toUpperCase());
//console.log(str.toLowerCase());

//let firstName = "John";
//let fullName = firstName.concat(" ","Smith"); // ehend n zalgaj baigaa
//console.log(fullName);
//console.log(firstName);

//let str = "JavaScript String";

//console.log(str.substr(0,11));
//console.log(str.substr(11,6));
