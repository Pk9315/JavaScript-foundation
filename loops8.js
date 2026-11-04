// Print all even numbers from 1 to 20 using a for loop.
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// Print numbers from 10 to 1 using a while loop.
// let i = 10
// while(i >= 1){
//     console.log(i)
//     i--
// }

// function numberDivisible(n,m){
//      let output = ""
//     for(let i = 1; i <= n; i++){
//        output += i
//        if(i % m === 0 ){
//             output = output + "-"
//        } 
//     }
//     console.log(output)
// }
// numberDivisible(9,4)

// function numberDivisibleOrNot(n,m){
//     let divisibleByM = ""
//     let notDivisibleByM = ""
//     for(let i = 1; i <= n; i++){
//         if(i % m === 0){
//             divisibleByM  += i + " "
//         }else{
//             notDivisibleByM += i + " "
//         }
        
//     }
//     console.log(divisibleByM)
//     console.log(notDivisibleByM)
// }
// numberDivisibleOrNot(20,6)

// function printDivisibleNumbersBetween(p,n,m){
//     if(p < n && n < m){
//         for(let i = n; i <= m; i++){
//             if(i % p === 0){
//                 console.log(i)
//             }
//         }
//     }
// }
// printDivisibleNumbersBetween(3,5,15)


// function numberDivisible(n,m){
//     let number = ""
//     for(let i = 1; i <= n; i++){
//         number += i
//         if(i % m === 0){
//             number +=  "%"
//         }
//     }
//     console.log(number)
// }
// numberDivisible(20,5)

// function numberDivisibleOrNot(n,m){
//     let numberDivisible = ""
//     let numberNotDivisible = ""
//     for(let i = 10; i <= n; i++){
//         if(i % m === 0){
//             numberDivisible += i + " "
//         }else{
//             numberNotDivisible += i + " "
//         }
//     }
//     console.log(numberDivisible)
//     console.log(numberNotDivisible)
// }
// numberDivisibleOrNot(30,5)

// Write a JavaScript program to count how many factors a given number has.
// let num = 12
// let count = 0
// for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//         count++
//     }
// }
// console.log(count)

// Write a program to calculate the sum of all factors of a given number.
// let num = 12
// let sum = 0
// for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//         sum += i
//     }
// }
// console.log("Sum of Factor: ", sum)

// Write a program to check whether a given number is prime or not.
// let num = 7
// let count = 0
// for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//         count++
//     }
// }
// if(count === 2){
//     console.log("Prime Number")
// }else{
//     console.log("Not Prime number")
// }

// Write a JavaScript program to print all prime numbers between 1 and 50.

// for(let i = 1; i <= 50; i++){
//     let count = 0
//     for(let j = 1; j <= i; j++){
//         if(i %j === 0){
//             count++
//         }
//     }
//     if(count === 2){
//     console.log(i)
// }
// }

// Write a JavaScript program to count how many prime numbers are present between 1 and 50
// let primeCount = 0
// for(let i = 1; i <= 50; i++){
//     let count = 0
    
//     for(let j = 1; j <= i; j++){
//         if(i%j === 0){
//             count++
//         }
//     }
//     if(count === 2){
//         primeCount++
//     }
    
// }
// console.log(primeCount)

// Given a number, find its largest digit.

// let num = 58329
// let max = 0
// while(num > 0){
//     let lastDigit = num % 10
//     if(lastDigit > max){
//         max = lastDigit
//     }
//     num = Math.floor(num / 10)
// }
// console.log(max)

// Write a JavaScript program to find the smallest digit in a given number.
// let num = 58329;
// let smallestNum = Infinity
// while(num > 0){
//     let lastDigit = num % 10
//     if(lastDigit < smallestNum){
//         smallestNum = lastDigit
//     }
//     num = Math.floor(num/10)
// }
// console.log(smallestNum)

// function sumUpToN(n){
//     let sum = 0
//     for(let i = 1; i <= n; i++){
//         sum += i
//     }
//     console.log(sum)
// }
// sumUpToN(10)


// function sumOfEvenNumbersUpToN(n){
//     let sumOfEven = 0
//     for(let i = 1; i <= n; i++){
//         if(i % 2 === 0){
//             sumOfEven += i
//         }
//     }
//     return sumOfEven
// }
// let result = sumOfEvenNumbersUpToN(9)
// console.log("Sum of all even number: ", result)

// function sumDivisibleByFiveAndSevenUpToN(n){
//     let numberDivisibleBy5 = 0
//     let numberDivisibleBy7 = 0
//     for(let i = 1; i <= n; i++){
//         if(i%5 === 0){
//             numberDivisibleBy5 += i
//         }
//         if(i % 7 === 0){
//             numberDivisibleBy7 += i
//         }
//     }
//     console.log("Sum of numbers divisible by 5: ", numberDivisibleBy5)
//     console.log("Sum of numbers divisible by 7: ", numberDivisibleBy7)
// }
// sumDivisibleByFiveAndSevenUpToN(35)

// function factorial(n){
//     let numFactorial = 1
//     for(let i = 1; i <= n; i++){
//         numFactorial *= i
//     }
//     return numFactorial
// }
// let result = factorial(7)
// console.log(result)

// function averageOfNumbersuptoN(n){
//     let sum = 0
//     let average = 0
//     for(let i = 1; i<=n; i++){
//         sum += i
     
//     }
//        average = sum / n
//     return average
// }
// let result = averageOfNumbersuptoN(10)
// console.log(result)

// function sumOfNumbersGreaterThanSixUpToN(n){
//     let sum = 0
//     for(let i = 1; i <=n; i++){
//         if(i > 6){
//             sum += i
//         }
//     }
//     return sum
// }
// let result = sumOfNumbersGreaterThanSixUpToN(12)
// console.log(result)

// function sumDivisibleByEightUpToN(n){
//     let sumOfAllNumbers = 0
//     for(let i = 10; i<=n; i++){
//         if(i % 8 === 0){
//             sumOfAllNumbers += i
//         }
//     }
//     console.log(sumOfAllNumbers)
// }
// sumDivisibleByEightUpToN(40)

function sumEvenAndOddUpToN(n){
    let sumOfAllEven = 0
    let sumOfAllOdd = 0
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            sumOfAllEven += i
        }
        if(i % 2 !== 0){
            sumOfAllOdd += i
        }
    }
    console.log("sum of all even numbers: ", sumOfAllEven)
    console.log("sum of all odd numbers: ", sumOfAllOdd)
}
sumEvenAndOddUpToN(30)