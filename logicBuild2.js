// Level 2: Number-based Looping Logic
// 1. Count the number of digits in a given number. 

// let value = 2345
// let count = 0
// while(value > 0){
//     value = Math.trunc(value/10)
//     count++
// }
// console.log(count)

// 2: Given number ka reverse print karo.
// let value = 12345
// let reverseNumber = 0

// while(value > 0){
//     let lastDigit = value % 10
//     reverseNumber = reverseNumber * 10 + lastDigit
//     value = Math.trunc(value / 10)
// }
// console.log(reverseNumber)

// Check whether a number is a palindrome.
// let value = 121
// let original = value 
// let reverse = 0
// while(value > 0){
//     let lastDigit = value % 10
//     reverse = reverse * 10  + lastDigit
//     value = Math.trunc(value / 10)
// }
// if(original === reverse){
//     console.log("Palindrome")
// }else(
//     console.log("Not palindrome")
// )

// Question 14: : Find the sum of digits of a number.
// let num = 9876
// let sum = 0
// while(num > 0){
//     sum += num % 10
//     num = Math.floor(num / 10)
// }
// console.log("Sum of all number: ", sum)

// Question 15: : Check if a number is an Armstrong number.

let num = 153
let original = num
let sum = 0
let power = String(num).length
while(num > 0){
    let lastDigit = num % 10
    sum += lastDigit ** power
    num = Math.floor(num / 10)
}
if(original === sum){
    console.log("An Armstrong")
}else{
    console.log("Not an armstrong")
}