
const data = [
    { productName: "Bakery", unitPrice: 5000, amount: 200, totalPrice: 500000, casherId: 1, date: '2022-11-01' },
    { productName: "Chocolate", unitPrice: 3000, amount: 18, totalPrice: 54000, casherId: 1, date: '2022-11-01' },
    { productName: "Cola", unitPrice: 2500, amount: 100, totalPrice: 250000, casherId: 2, date: '2022-11-02' },
    { productName: "Juice", unitPrice: 3000, amount: 50, totalPrice: 150000, casherId: 2, date: '2022-11-02' },
    { productName: "Vodka", unitPrice: 50000, amount: 20, totalPrice: 1000000, casherId: 1, date: '2022-11-01' },
    { productName: "Beer", unitPrice: 3000, amount: 200, totalPrice: 600000, casherId: 1, date: '2022-11-01' },
    { productName: "Cigar", unitPrice: 5000, amount: 200, totalPrice: 500000, casherId: 2, date: '2022-11-02' },
    { productName: "Ball", unitPrice: 300000, amount: 5, totalPrice: 1500000, casherId: 2, date: '2022-11-02' },
    { productName: "Candy", unitPrice: 1000, amount: 400, totalPrice: 400000, casherId: 1, date: '2022-11-01' },
    { productName: "Breed", unitPrice: 3000, amount: 15, totalPrice: 450000, casherId: 1, date: '2022-11-01' }

];

let sum = 0;
for (i = 0; i < data.length; i++) {
    sum = sum + data[i].totalPrice;
}
console.log(sum);

let sum2 = 0;
for (i = 0; i < data.length; i++) {
    sum2 = sum2 + data[i].amount;
}
console.log(sum2);
let a = [];
for (i = 0; i < data.length; i++) {
    a.push(data[i].amount)
}
console.log(a);
a.sort((a, b) => b - a);
console.log(a);
console.log(a.slice(5));

for (i = 0; i < data.length; i++) {
    if (data[i].amount === 50) {
        console.log(data[i].unitPrice * 50);
    } else if (data[i].amount === 20) {
        console.log(data[i].unitPrice * 20);
    } else if (data[i].amount === 18) {
        console.log(data[i].unitPrice * 18);
    } else if (data[i].amount === 15) {
        console.log(data[i].unitPrice * 15);
    } else if (data[i].amount === 5) {
        console.log(data[i].unitPrice * 5);
    }
}
let m = 0; n = 0; x = 0; y = 0; z = 0;
for (i = 0; i < data.length; i++) {
    if (data[i].amount === 50) {
        m = data[i].totalPrice;
    } else if (data[i].amount === 20) {
        n = data[i].totalPrice;
    } else if (data[i].amount === 18) {
        x = data[i].totalPrice;
    } else if (data[i].amount === 15) {
        y = data[i].totalPrice;
    } else if (data[i].amount === 5) {
        z = data[i].totalPrice;
    }
}
console.log((m + n + x + y + z) / sum * 100);