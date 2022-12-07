
console.log(pow(2, 5));
function pow(number, exponent){
    let multiply = 1;
    for(i = 1; i <= exponent; i++){
        multiply = multiply * number;
    }
    return multiply;
}
console.log(pow(2, 4));



function findMin(a, b){
    if(a > b){
        return b
    } else{
        return a
    }
}
console.log(findMin(5340, 40));





function printArray(arr){ //arr bol paramets harin array bol bodit utga
    for(i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
}
let array = [6, 2, 3, 43, 5];
printArray(array);



console.log(`max oldog bodlogo`);
let findArrayMax = function (arr){
    let max = -1;
    for(i = 0; i < arr.length; i++){
        if(max <= arr[i]){
            max = arr[i];
        }
    }
    return max;
}
console.log(findArrayMax(array));


let findArrayAverage = (arr) => {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length
}
console.log(findArrayAverage(array));



