// function numberDivisible(n,m){
//     let output = " "
//     for(let i = 1; i <= n; i++){
//        output = output + i
//        if(i % m === 0){
//         output = output + '-'
//        }
//     }
//     console.log(output)
// }
// numberDivisible(9,4)

// function numberDivisibleByM(n,m){
//     let numberSpace = " "
//     let numDivisible = 0
//     let numNotDivisible = 0
//     for(let i = 1; i <= n; i++){
//         numberSpace = numberSpace + i
//         if(i % m === 0){
//             numDivisible = numberSpace + " "
//         }
//         if(i % m !== 0){
//             numNotDivisible = numberSpace + " "
//         }
//     }
//     console.log(numDivisible)
//     console.log(numNotDivisible)
// }
// numberDivisibleByM(20,6)

// Write a program that checks numbers from 1 to 50 and:
// Counts how many numbers are even
// Counts how many numbers are odd
// Finds the sum of even numbers
// Finds the sum of odd numbers

// let num = 1
// let countEven = 0
// let countOdd = 0
// let sumEven = 0
// let sumOdd = 0
// while(num <= 50){
//     if(num % 2 === 0){
//         countEven++
//        sumEven += num
//     }else{
//         countOdd++
//         sumOdd += num
        
//     }
//     num++
// }
// console.log("Count Even: ", countEven)
// console.log("Count Odd: ", countOdd)
// console.log("Sum Even Number: ", sumEven)
// console.log("Sum Odd Number: ", sumOdd)

// From 1 to 100, find:
// Count of numbers divisible by 3
// Count of numbers divisible by 5
// Count of numbers divisible by both 3 and 5

// let i = 1
// let countNumberDivisibleBy3 = 0
// let countNumberDivisibleBy5 = 0
// let countNumberDivisibleBy3And5 = 0
// while(i <= 100){
//     if(i % 3 === 0){
//        countNumberDivisibleBy3++
//     }
//     if(i % 5 === 0){
//         countNumberDivisibleBy5++
//     }
//     if(i % 3 === 0 && i % 5 === 0){
//        countNumberDivisibleBy3And5++
//     }
//     i++
// }
// console.log("numbers divisible by 3: ", countNumberDivisibleBy3)
// console.log("numbers divisible by 5: ", countNumberDivisibleBy5)
// console.log("numbers divisible by 3 And 5: ", countNumberDivisibleBy3And5)

// Find the first number greater than 50 that is divisible by both 4 and 6.
// let i = 51
// while(i % 4 !== 0 || i % 6 !== 0){
//     i++
    
// }
// console.log("first number greater than 50: ", i)

// Print numbers from 1 to 20, but skip multiples of 3. Use continue.
// let i = 1
// while(i <= 20){
//     if(i % 3 === 0){
//         i++
//         continue
//     }
//     console.log(i)
//      i++
// }

// Write a program that checks numbers from 1 to 50:
// If the number is divisible by 3, skip it using continue.
// If the number is greater than 40, stop the loop using break.
// Print all remaining numbers.

let i = 1
while(i <= 50){
    if(i % 3 === 0){
        i++ 
        continue;
    }
    if(i > 40){
        break
    }
    console.log(i)
    i++
}