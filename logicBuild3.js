// Level 3: Mathematical & Logical Patterns 

// 1. Print the squares of numbers from 1 to n.
// let n = 5
// for(let i = 1; i <= n; i++){
//     let result = i*i
//     console.log(result)
// }

// Print cubes of numbers from 1 to n.
// let n = 5
// for(let i = 1; i <= n; i++){
//     let result = i ** 3
//     console.log(result)
// }

// Print all numbers between a and b divisible by 7.
// let a = 10
// let b = 50
// for(let i = a; i <= b; i++){
//     if(i % 7 === 0){
//         console.log(i)
//     }
// }

// Q4. Find HCF (GCD) of Two Numbers Using Loops

// let a = 12 
// let b = 18
// let hcf = 0
// for(let i = 1; i <= b; i++){
//     if(a % i === 0 && b % i === 0){
//         hcf = i
//     }
// }
// console.log(hcf)

// Q5. Find LCM of Two Numbers Using Loops
// let a = 4
// let b = 6
// let numberLcf = 0
// for(let i = 1; i <= 12; i++){
//     if(i % a === 0 && i % b === 0){
//        numberLcf = i
//        break
//     }
// }
// console.log(numberLcf)

// Q6. Print All Factors of a Given Number
// let n = 36
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         console.log(i)
//     }
// }

// Q7. Find the Sum of All Factors of a Number
// let n = 12
// let sum = 0
// for(let i = 1; i <= n; i++){
//     if(n % i === 0){
//         sum += i
//     }
// }
// console.log(sum)

// Q8. Check if a Number Is a Strong Number
// let value = 145
// let original = value
// let sum = 0
// while(value > 0){
//     let digit = value % 10
//     let fact = 1
//     for(let i = 1; i <= digit; i++){
//         fact *= i
//     }
//     sum += fact
//     value= Math.trunc(value / 10)
    
// }
// if(sum === original){
//     console.log("Strong Number")
// }else{
//     console.log("weak Number")
// }

// Print first n terms of an arithmetic progression (a, d).
// let n = 5
// let a = 2
// let d = 3

// for(let i = 1; i <= n; i++){
//     console.log(a)

//     a = a+d
// }

// Print first n terms of a geometric progression (a, r)
let a = 2
let r = 3
let n = 5
for(let i = 1; i <= n; i++){
    console.log(a)

    a = a*r
}