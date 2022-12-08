
let rabbit1 = {
    color: `white`,
    rName: `Chandaga`,
    gender: `male`,
    age: 2,
    jump: function(){
        console.log(`i can not jump`);
    },
    sayMyName: function(myName){
        console.log(`Your name is ${myName}`);
    }
}

rabbit1.color = `shavhai`;
console.log(rabbit1.color)
console.log(rabbit1);
rabbit1.jump()
rabbit1.sayMyName(`jaya`);

let rabbit2 = {
    color: `pink`,
    rName: `Jaya`,
    gender: `female`,
    age: 7,
    jump: function(){
        console.log(`i can jump`);
    }
}
console.log(rabbit2);
let rabbits = [rabbit1, rabbit2];
console.log(rabbits);


