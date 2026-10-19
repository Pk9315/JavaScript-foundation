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

// let num = 153
// let original = num
// let sum = 0
// let power = String(num).length
// while(num > 0){
//     let lastDigit = num % 10
//     sum += lastDigit ** power
//     num = Math.floor(num / 10)
// }
// if(original === sum){
//     console.log("An Armstrong")
// }else{
//     console.log("Not an armstrong")
// }


// 1. Count the number of digits in a given number.
// let num = 1234
// let count = 0
// while(num > 0){
//     num = Math.trunc(num/10)
//     count++
// }
// console.log(count)

// 2: Print the reverse of a given number.
// let num = 23456
// let reverseNum = 0
// while(num > 0){
//     let lastDigit = num % 10
//     reverseNum = reverseNum * 10 + lastDigit
//     num = Math.trunc(num / 10)
// }
// console.log(reverseNum)


// 13: : Check if a number is a palindrome.
// let num = 1331
// let original = num
// let reverse = 0
// while(num > 0){
//     let lastDigit = num % 10
//     reverse = reverse * 10 + lastDigit
//     num = Math.trunc(num / 10)
// }
// if(original === reverse){
//     console.log("Palindrome")
// }else{
//     console.log("Not Palindrome")
// }

// 14: : Find the sum of digits of a number.
// let num = 9876
// let sum = 0
// while(num > 0){
//     let digit = num % 10
//     sum += digit
//     num = Math.trunc(num / 10)
// }
// console.log(sum)

// 5. Check if a number is an Armstrong number.
// let num = 153
// let original = num
// let power = String(num).length
// let reverse = 0
// while(num > 0){
//     let digit = num % 10
//     reverse += digit ** power
//     num = Math.trunc(num / 10)
// }
// if(original === reverse){
//     console.log("Armstrong Number")
// }else{
//     console.log("Not Armstrong Number")
// }

// Q6. Check if a Number Is a Perfect Number

// let num = 6
// let sum = 0
// for(let i = 1; i <= num -1; i++){
//     if(num % i === 0){
//         sum += i
//     }
// }
// if(sum === num){
//     console.log("Perfect Number")
// }else{
//     console.log("Not a perfect Number")
// }


// 17: : Print all prime numbers between 1 and 100.

 
// for(let i = 2; i <= 100; i++){
//     let isPrime = true
//     for(let j = 2; j <= i-1; j++){
//         if(i % j === 0){
//             isPrime = false
//         }
//     }
//     if(isPrime === true){
//         console.log(i)
//     }
   
// }

// Q8. Check if a Number Is Prime or Not
// let n = 29
// let isPrime = true
// for(let i = 2; i <= n-1; i++){
    
//     if(n % i === 0){
//         isPrime = false
//     }
// }
// if(isPrime === true){
//     console.log("Prime Number")
// }else{
//     console.log("Not a Prime Number")
// }


// Write a JavaScript program to print the first 10 numbers of the Fibonacci Series.
// let a = 0
// let b = 1
// for(let i = 1; i <= 10; i++){
//     console.log(a)

//     let next = a+b
//     a = b
//     b= next
// }

// 9. Print Fibonacci series up to n terms. 
// let a = 0
// let b = 1
// for(let i = 1; i <= 7; i++){
//     console.log(a)

//     let next = a + b
//     a = b
//     b = next
// }

// Q10. Sum of First n Fibonacci Terms
let a = 0
let b = 1
let sum = 0
for(let i = 1; i <= 7; i++){
    sum += a
    let next = a + b
    a = b
    b = next
    
}
console.log(sum)