// var a = (96 + 108 + 89) / 3;
// console.log(a);
// var b = (88 + 91 + 110) / 3;
// console.log(b);

// var a = 99;
// var b = 99;
// if (a < 100 && b < 100) {
//   console.log("hha");
// } else if (a == b) {
//   console.log("a ylagch");
// } else if (b > a) {
//   console.log("b ylagch");
// } else {
//   console.log("tentssen");
// }

// var n = prompt("butarhai too oruulna uu");
// let N = Number(n);
// let m = N % 1;
// if (m <= 0.5) {
//   console.log(N - m);
// } else if (m > 0.5) {
//   console.log(N - m + 1);
// }

// var n = prompt("3 orontoi too oruulna uu");
// if (
//   n.length == 3 &&
//   Number.isInteger(n) &&
//   n[0] != 0 &&
//   n[2] != 0 &&
//   n[2] != 0
// ) {
//   console.log(Number(n[0]) + Number(n[1]) + Number(n[2]));
// } else {
//   console.log("3 orontoi bish bna");
// }

// var n = prompt("2 orontoi too oruulna uu");

// if (n.length == 2 && Number.isInteger(Number(n))) {
//   console.log(n[0] + 1 + n[1]);
// } else {
//   console.log("2 orontoi bish bna");
//   312;
// }

// if (n > 9 && n < 100 && n.length == 2) {
//   console.log(n[0] + Math.floor(Math.random() * 9) + n[1]);
// } else {
//   console.log("2 orontoi bish bna");
// }

let x = Number(prompt("x ee oruulna uu"));
let y = Number(prompt("y ee oruulna uu"));

let max = Math.max(x, y);
let min = Math.min(x, y);

console.log(Math.ceil(Math.random() * (max - min) + min));

var count = 1;
while (count <= 10) {
  console.log(Math.ceil(Math.random() * (max - min) + min));
  count = count + 1;
}

var count = 1;
console.log("loop starts");
while (count <= 10) {
  console.log(count);
  count = count + 1;
}

console.log("loop ended");
