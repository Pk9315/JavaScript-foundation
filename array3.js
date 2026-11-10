// You have an array of numbers. Use the given array and perform the following tasks:
const numbersArray = [33, 57, 24, 49, 52, 66];
// 1.1 Write a function printOriginalArray to print the original array, numbersArray, to the console.
function printOriginalArray(){
    console.log("Original Array: ", numbersArray)
}
printOriginalArray()

// 1.2 Create a function named divideNumbersByThree that takes an array of numbers as input and returns , 
// a new array with each number divided by 3. Call the function with numbersArray and print the divided array to the console.

function divideNumbersByThree(number){
    let newArr = []
    for(let i = 0; i < number.length; i++){
      newArr.push(number[i] / 3)
    }
    return newArr
}
console.log(divideNumbersByThree(numbersArray))

// 1.3 Create a function named findNumInArray that takes an array of numbers and a searchNum as input and ,
// returns true if the searchNum is present in array. 
// Call the function with numbersArray  with searchNum as 24 and print the result to the console.

// let searchNum = 24
// function findNumInArray(numbers,searchNum){
//     for(let i = 0; i < numbers.length; i++){
//       if(numbers[i] === searchNum){
//         return  true
//       }else{
//         return false
//       }
//     }
    
// }
// let result = (findNumInArray(numbersArray, 24))
// console.log(searchNum,result)

// 1.4 Create a function named findLargestNumberDivisibleBy5 that takes an array of numbers as input and returns,
//  the largest number in the array that is divisible by 5. If there are no numbers divisible by 5, return 0. 
// Call the function with numbersArray and print the largestNumber to the console.

// function findLargestNumberDivisibleBy5(numbers){
//     let largestNumber = 0
//     for(let i = 1; i <numbers.length; i++){
//         if(numbers[i] > largestNumber && numbers[i] % 5 === 0){
//             largestNumber = numbers[i]
//         }       
//     }
//     return largestNumber
// }
// console.log(findLargestNumberDivisibleBy5(numbersArray))

function findLargestNumberDivisibleBy5(numbers){
    let largestNumber = 0
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largestNumber && numbers[i] % 5 === 0){
            largestNumber = numbers[i]
        }else{
            return 0
        }
    }
    return largestNumber
}
console.log(findLargestNumberDivisibleBy5(numbersArray))

let searchNum = 24
function findNumInArray(numbers,searchNum){
    
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] === searchNum){
            return true
        }
    }
}
let resultArr = (findNumInArray(numbersArray, 24))
console.log("Result: ", resultArr, searchNum)