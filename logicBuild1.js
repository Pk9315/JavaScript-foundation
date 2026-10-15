// PHASE 2 — LOOPING & PATTERNS (ITERATION & FLOW) 

//Level 1: Basic Looping (Introductory)

// 1. Print numbers from 1 to 10. 
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// 2: Print all even numbers between 1 and 100.
// for(let i = 1; i<= 100; i++){
//     if(i % 2 === 0){
//         console.log("Even Number: ", i)
//     }
// }

// 3: Print all odd numbers between 1 and 100.
// for(let i = 1; i <= 100; i++){
//     if(i % 2 !== 0){
//         console.log("Odd number: ", i)
//     }
// }

// Print numbers from 10 down to 1.

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }

// 5: Print the multiplication table of a given number (n × 1 to n × 10).
// let n = 7
// for(let i = 1; i <= 10; i++){
//     let result = n * i
//     console.log("7 * "+ i + " = " + result)
// }

// 6. Print the sum of first n natural numbers. 
// let n = 10
// let sum = 0
// for(let i = 1; i <= n; i++){
//     sum += i
// }
// console.log("Sum: ", sum)

// // 7. Print the sum of all even numbers up to n
// let n = 10
// let sumOfEven = 0
// for(let i = 1; i <= n; i++){
//     if(i % 2 === 0){
//         sumOfEven += i
//     }
// }
// console.log("Sum of Even: ", sumOfEven)


// 8. Print the sum of all odd numbers up to n. 
// let n = 20
// let sumOfOddNum = 0
// for(let i = 1; i <= n; i++){
//     if(i % 2 !== 0){
//         sumOfOddNum += i
//     }
// }
// console.log("Sum of Odd: ", sumOfOddNum)

// 9. Print the factorial of a given number.
// let factorial = 1
// for(let i = 1; i <= 5; i++){
//     factorial *= i
// }
// console.log("Factorial Number: ", factorial)

// function productDigits(number) {
// let value = Math.abs(number);
// let product = 1;
// if (value == 0) return 0;
// while (value > 0) {
// product *= value % 10;
// value = Math.trunc(value / 10);
// }
// return product;
// }
// let number = 2345;
// console.log("Product of digits = " + productDigits(number));

let value = 2345
let productOfDigits = 1
let lastDigit = 0
while(value > 0){
    lastDigit = value % 10
    productOfDigits = productOfDigits * lastDigit
    value = Math.trunc(value / 10)
}
console.log(productOfDigits)