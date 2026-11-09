// // Given an array. use the given array and performing the following task
// let numbersArray = [5, 12, 7, 25, 18, 3];
// // Write a function that takes the original array and returns the same array.
// //  Print the returned array to the console.
// function printOrignalArray(){
//     console.log("Original Array: ", numbersArray)
// }
// printOrignalArray()

// // Write a function that returns a new array with 10 added to each number of the given array. Print the returned array.
// function addTenToEachArr(){
//     let newArr = []
//     for(let i = 0; i<numbersArray.length; i++){
//         newArr.push(numbersArray[i] + 10)
//     }
//     return newArr
// }
// console.log(addTenToEachArr())

// // Write a function that converts all odd numbers to the nearest even number by adding 1. Create and return a new array.
// function convertOddNumber(){
//     let convertedArr = []
//     for(let i = 0; i<numbersArray.length; i++){
//         if(numbersArray[i] % 2 !== 0){
//             convertedArr.push(numbersArray[i] + 1)
//         }else{
//             convertedArr.push(numbersArray[i])
//         }
//     }
//     return convertedArr
// }
// console.log(convertOddNumber())

// // Write a function that finds and returns the largest number in the given array. Print the returned number.
// function findLargestNumber(number){
//     let largestNumber = number[0]
//     for(let i = 1; i < number.length; i++){
//         if(number[i] > largestNumber){
//             largestNumber = number[i]
//         }
//     }
//     return largestNumber
// }
// console.log(findLargestNumber(numbersArray))

// You have an array of numbers. Use the given array and perform the following tasks:
const numbersArray = [22, 35, 18, 47, 50, 63];

// 1.1 Write a function printOriginalArray that prints the original array, numbersArray, to the console.
function printOriginalArray(){
    console.log(numbersArray)
}
printOriginalArray()

// 1.2 Create a function named multiplyNumbersByTwo that takes an array of numbers as input and returns a new array with each number multiplied by 2. 
// Call the function with numbersArray and print the new array to the console.
function multiplyNumbersByTwo(numbers){
    let newArray = []
    for(let i = 0; i<numbers.length; i++){
        newArray.push(numbers[i] * 2)
    }
    return newArray
}
console.log(multiplyNumbersByTwo(numbersArray))

// 1.3 Create a function named convertEvenToOdd that takes an array of numbers as input and returns , 
// a new converted array where all even numbers are converted to the nearest odd number by adding 1 to it. 
// Call the function with numbersArray and print the converted array to the console.

function convertEvenToOdd(numbers){
    let convertEven = []
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            convertEven.push(numbers[i] + 1)
        }else{
            convertEven.push(numbers[i])
        }
    }
    return convertEven
}
console.log(convertEvenToOdd(numbersArray))

// 1.4 Create a function named findSmallestNumber that takes an array of numbers as input and returns ,
// the smallest number in the array. Call the function with numbersArray and 
// print the smallest number to the console.

function findSmallestNumber(numbers){
    let smallestNum = numbers[0]
    for(let i = 1; i <numbers.length; i++){
        if(numbers[i] < smallestNum){
            smallestNum = numbers[i]
        }
    }
    return smallestNum
}
console.log(findSmallestNumber(numbersArray))

