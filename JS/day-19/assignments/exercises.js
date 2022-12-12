
let animals = [
    {
        type: `dog`,
        sound: `woof`,
    },
    {
        type: `cow`,
        sound: `moo`
    },
    {
        type:`cat`,
        sound:`meow`
    }
]
function howDoesTheFoxSay (array, animalType){
  
    for(i = 0; i < array.length; i++){
        
        if(array[i].type == animalType){
            console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`);
        }
    }

}
console.log(`dog barking`);
howDoesTheFoxSay(animals, 'dog');
console.log(`cow mooing`);
howDoesTheFoxSay(animals, `cow`);
console.log(`cat meowing`);
howDoesTheFoxSay(animals, `cat`);

let students = [
    {
        name: `jaya`,
        age: 1999,
        hobby: `basketball`,
        single: true
    },
    {
      name: `sukhe`,
      age: 1998,
      hobby: `horse`,
      single: true 
    },
    {
        name: `bat`,
        age: 2006,
        hobby: `guitar`,
        single: false
    }
]
function findAge (array){
    for(i = 0; i < array.length; i++){
        if(2022 - array[i].age < 20){
            console.log(array[i].name);
        }
    }
}
findAge(students);

function findYear (array){
    for(i = 0; i < array.length; i++){
        console.log(array[i].name + ` ` + (2022 - array[i].age));
    }
}
findYear(students);

function findSingle (array){
    for(i = 0; i < array.length; i++){
        if(array[i].single){
            console.log(array[i].name);
        }
    }
}
findSingle(students);

 

let dog = {
    uulder: `havchark`,
    name: `bek`,
    color: `brown`,
    age: `10`,
    attitude: `kind`
};
console.log(Object.keys(dog));



let guys=[
    {
    name: 'Сэд-Эрдэнэ',
    age: 19,
    gender: "male",
    lastName: `jaya`
},
    {
    name: 'Индра',
    age: 19,
    gender: "female",
    lastName: `jaya`
},
    {
    name: 'Хатнаа ',
    age: 21,
    gender: "male",
    lastName: `jaya`
},
    {
    name: 'Тэмүүлэн',
    age: 23,
    gender: "male",
    lastName: `jaya`
},
    {
    name: 'Намуун',
    age: 23,
    gender: "female",
    lastName: `jaya`
},
]

function findGender(array){
    let girls = 0;
    let boys = 0
    for(i = 0; i < array.length; i++){
      
        if(array[i].gender == `female`){
            girls = girls + 1;
        } else {
            boys = boys + 1

        }
    }
    return `${girls}-emegtei   ${boys}-eregtei`;
}
console.log(findGender(guys));

function findAverage (array){
    let sum = 0
    for (i = 0; i < array.length; i++){
        sum = array[i].age + sum;
    }
    return sum / array.length
}
console.log(findAverage(guys));


for (i = 0; i < guys.length; i++){
    if (guys[i].age !== 19){
        console.log(i);
        guys.splice(i, i + 1);
    }
}
console.log(guys);


const users = [
    {
        name:   'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 45,
        isLoggedIn: false,
        points: 30
      },
    {
        name:   'Job',
        email: 'job@job.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
      },
    {
        name:   'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 39,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 25,
        isLoggedIn: false,
        points: 40
      },
    {
        name:   'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
      },
    {
        name:   'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 18,
        isLoggedIn: false,
        points: 40
      },
    {
        name:    'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 40
      }
    ]

console.log(users[0]);


let a = 0;
for (i = 0; i < users.length; i++){
   
    if( users[i].skills.length > a){
        a = users[i].skills.length
    }
}
for (i = 0; i < users.length; i++){
   
    if( users[i].skills.length == a){
       console.log(users[i]);
    }
}

let sum = 0;
for (i = 0; i < users.length; i++){
  
    if( users[i].points >= 50){
        sum = sum + 1;
}
}
console.log(sum);

for (i = 0; i < users.length; i++){
    if( users[i].skills.includes( `MongoDB`, `Express`, `React`, `Node`)){
       console.log(`hha ` + users[i]);
    }
}



