function parameterizeStr(a) {
  b = a.split(` `);
  return b.join(`-`);
}
console.log(parameterizeStr("This Is Where I Begin"));

let queueLine = [
  "Бат",
  "Дорж",
  "Пунцаг",
  "Готов",
  "Баяраа",
  "Болд",
  "Навчаа",
  "Гончигсумлай",
  "Цэцгээ",
  "Нэргүй",
  "Бальбийгомбо",
  "Баатар",
];

queueLine.pop();

console.log(queueLine);

let x = `10102`;
let y = x.split(``).reverse().join(``);
console.log(y);
if (x == y) {
  console.log(`it is apalindromic`);
} else {
  console.log(`it isn't palindromic`);
}

function findRegisterNumber(registerNumber) {
  const registerNum = registerNumber.substr(2, 10);
  if (
    registerNumber.length == 10 &&
    !Number.isInteger(Number(registerNumber[0])) &&
    !Number.isInteger(Number(registerNumber[1])) &&
    Number.isInteger(Number(registerNum))
  ) {
    return "RD mon";
  } else {
    return "RD bish";
  }
}
console.log(findRegisterNumber(`dd99073598`));

function findGender(registerNumber) {
  if (registerNumber[8] % 2 == 0) {
    return `emegtei`;
  } else {
    return `eregtei`;
  }
}
console.log(findGender(`dd99072598`));

function findYear(registerNumber) {
  if (Number(registerNumber.substr(6, 2) <= 31)) {
    return `torson odor mun`;
  } else {
    return `tursun odor bish`;
  }
}
console.log(findYear(`dd99072598`));

function findRegion(registerNumber) {
  if (registerNumber[0] == `a`) {
    return `arkhangai`;
  } else if (registerNumber[0] == `u`) {
    return `Ulaanbaatar`;
  }
}
console.log(findRegion(`ud99072598`));
