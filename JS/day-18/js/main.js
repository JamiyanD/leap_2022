
let shiftArr = (arr) => {
    let tempArr = [];
    for(i = 0; i < arr.length; i++){
        if(i != 0){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

let arr1 = [1, 2, 3];
console.log(shiftArr(arr1));
const array = [1, 2, 3];
const firstElement = array.shift();
console.log(array);
console.log(firstElement)

let unshiftArray = function (arr, number){
    let tempArray = [];
    tempArray.push(number);

    for(i = 0; i < arr.length; i++){
        tempArray.push(arr[i]);
    }
    return tempArray
}

let arr2 = [5, 6, 7];
console.log(unshiftArray(arr2, 1 ));

const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);

let sortArray = [1, 2, 8, 7, -1, 10];
sortArray[0] = sortArray[4];

function sortingAlgorithm(arr){
    
    for(i = 0; i < arr.length - 2; i++){
        let indexMin = i;
      
    }
}
console.log(sortingAlgorithm(sortArray));

console.log('array sorting');
sortArray.sort();
console.log(sortArray);

function arrayReverse(arr){
    let tempArray = [];
    for (i = arr.length - 1; i >= 0 ; i--){
        tempArray.push(arr[i]);
    }
    return tempArray;
}

let arrReverse = [4, 5, 1, 8]
console.log(arrayReverse(arrReverse));
const reversed = arrReverse.reverse();
console.log('reversed', reversed)


const nameslice  = [`bat`, `dorj`, `purev`, `davaa`, `tomor`];
console.log(nameslice.slice(2));

function nameSlice(arr, index){
    let arr5 = [];
    for(i = index; i < arr.length; i++){
        arr5.push(arr[i])
    }
    return arr5
    // for(i = 0; i < index; i++){
    //     arr.shift()
    // }
    // return arr
}
console.log(nameSlice(nameslice, 1));

const spliceNames = [`davaa`, `lhagva`, `purev`, `bymba`];
spliceNames.splice(1, 0 , `mygmar`);
spliceNames.splice(4, 0, `baasan`)
console.log(spliceNames);

const shoppingCart = [`Milk`, `Coffee`, `Tea`, `Honey`];
console.log(shoppingCart.includes(`Milk`));
shoppingCart.unshift(`meat`);
console.log(shoppingCart);

// console.log(shoppingCart.includes(`sugar`));
// shoppingCart.push(`sugar`);
// console.log(shoppingCart);

// shoppingCart.splice(3, 1);
// shoppingCart.pop();
// console.log(shoppingCart);

// shoppingCart.splice(2,1,`Green tea`);
// console.log(shoppingCart);

let arrays = [`facebook`, `google`, `microsoft`, `apple`, `ibm`, `oracle`];
// arrays.sort();
// arrays.reverse()
// arrays.shift();
arrays.splice(arrays.length  / 2 - 1 , 2);
// arrays.pop()
// arrays.splice(0, arrays.length)
console.log(arrays);

carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
    ];

// let a = `USA`
// for(i = 0; i < carBrands.length; i++){
//     if(carBrands[i].includes(a)){
//         console.log(carBrands[i]);
// }
// }

// let a = `C`
// for(i = 0; i < carBrands.length; i++){
//     if(carBrands[i][0][0] == a){
//         console.log(carBrands[i]);
// }
// }

console.log(carBrands.length)

let sum = 0;
for(i = 0; i < carBrands.length; i++){
    if(carBrands[i].includes("USA")){
        sum = sum + 1
    }
}
console.log(`USA-` + sum);




