// Write a JavaScript program to print all even numbers from 1 to 20 using a for loop.
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

// Write a JavaScript program to calculate the sum of all odd numbers from 1 to 20 using a for loop.
let sumOfOdd = 0
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        sumOfOdd += i
    }
}
console.log("Sum of all odd numbers: ", sumOfOdd)

// Write a JavaScript program to count how many numbers between 1 and 50 are divisible by both 3 and 5.

let countNumber = 0
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        countNumber++
    }
}
console.log("Count the number: ", countNumber)

// Write a JavaScript program to find the largest number among three numbers using if-else.
let a = 25;
let b = 45;
let c = 30;
if(a > b && a > c){
    console.log("a is the largest number: ", a)
}else if(b > a && b > c){
    console.log("b is the largest numeber: ", b)
}else{
    console.log("c is the largest number: ", c)
}

// Write a JavaScript program to print numbers from 1 to 30 that are divisible by 3 but not divisible by 5.
for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 !== 0){
        console.log(i)
    }
}

// Write a JavaScript program to calculate the factorial of a number using a for loop.
let factorial = 1
let num = 5
for(let i = 1; i <= num; i++){
    factorial *= i
}
console.log("Factorial: ", factorial)

// Write a JavaScript program to count the total number of digits in a given number without using arrays or strings.

// let n = 12345
// let count = 0
// while(n > 0){
//     n = Math.floor(n/10)
//     count++
// }
// console.log(count)

// Write a JavaScript program to reverse a given number using a while loop.
// let n = 12345;
// let reverseNumber = 0
// while(n > 0){
//     let lastDigit = n % 10
//     reverseNumber = reverseNumber * 10 + lastDigit
//     n = Math.floor(n / 10)
// }
// console.log("Reverse number: ", reverseNumber)

// Write a JavaScript program to check whether a given number is a palindrome or not.
// let n= 121;
// let original = n
// let reverseNumber = 0
// while(n > 0){
//     let lastDigit = n % 10
//     reverseNumber = reverseNumber * 10 + lastDigit
//     n = Math.floor(n / 10)
// }
// if(original === reverseNumber){
//     console.log("Palindrome number")
// }else{
//     console.log("Not Palindrome")
// }

// Write a JavaScript program to check whether a three-digit number is an Armstrong number or not.
// let n = 153
// let originalNum = n
// let power = String(n).length
// let reverseNum = 0
// while(n > 0){
//     let lastDigit = n % 10
//     reverseNum += lastDigit ** power
//     n = Math.floor(n/10)
// }
// if(reverseNum ===  originalNum){
//     console.log("Armstrong Number")
// }else{
//     console.log("Not an armstrong number")
// }

// Write a program to check whether 9474 is an Armstrong number or not.
let n = 9474
let original = n
let sumOfAll = 0
let power = String(n).length
while(n > 0){
    let lastDigit = n % 10
    sumOfAll += lastDigit ** power
    n = Math.floor(n/10)
}
if(original === sumOfAll){
    console.log("An armstrong number")
}else{
    console.log("Not an armstrong number")
}
