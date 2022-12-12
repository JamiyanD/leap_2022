
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

