// // Create an array named mobileBrands with 3 mobile brand names. Add "OnePlus" at the end using push().
// let mobileBrands = ["Iphone", "Samsung", "Nothing"]

// mobileBrands.push("oneplus")
// console.log(mobileBrands)
// // Remove the last element using pop().
// mobileBrands.pop()
// console.log(mobileBrands)

// // Add "Realme" at the beginning using unshift().
// mobileBrands.unshift("Realme")
// console.log(mobileBrands)

// // Remove the first element using shift().
// mobileBrands.shift()
// console.log(mobileBrands)

// Given an array of numbers. use the given array and perform the following tasks:
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// Print the all numbers that are divisible by 3
// console.log("Numbers are divisible by 3: ")
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 3 === 0){
//         console.log(numbers[i])
//     }
// }
// console.log("Numbers are divisible by 5: ")
// print all numbers from the array that are divisible by 5
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 5 === 0){
//         console.log(numbers[i])
//     }
// }

// Create a new array with numbers divisible by 2 and print the array
// console.log("New Array: ")
// let newArray = []
// for(let i = 0; i< numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         newArray.push(numbers[i])
//     }
// }
// console.log(newArray)

// Print the sum of all array
// let sum = 0
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }
// console.log(sum)

//print the sum of odd and even numbers and print them in the following format
// let sumOfOdd = 0
// let sumOfEven = 0
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 === 0){
//         sumOfEven += numbers[i]
//     }
//     if(numbers[i] % 2 !== 0){
//         sumOfOdd += numbers[i]
//     }
// }
// console.log("Sum of Odd Numbers: ", sumOfOdd)
// console.log("Sum of even numbers: ", sumOfEven)


// Given an array of runs scored by Virat Kohli. Perform the following tasks on the given array.
// const viratKohliRuns = [82, 120, 45, 66, 102, 55, 91, 76, 115, 42]
// console.log("Runs scored by virat which are divisible by 3")
// // 1.1 Print the runs scored which are divisible by 3.
// for(let i = 0; i < viratKohliRuns.length; i++){
//     if(viratKohliRuns[i] % 3 === 0){
//         console.log(viratKohliRuns[i])
//     }
// }
// console.log("Runs scored by virat which are divisible by 5")
// // 1.2 Print the runs scored which are divisible by 5.
// for(let i = 0; i< viratKohliRuns.length; i++){
//     if(viratKohliRuns[i] % 5 === 0){
//         console.log(viratKohliRuns[i])
//     }
// }

// // 1.3 Create a new array with runs scored which are divisible by 2. Print the new array.
// console.log("New array :")
// let newArray = []
// for(let i = 0; i < viratKohliRuns.length; i++){
//     if(viratKohliRuns[i] % 2 === 0){
//         newArray.push(viratKohliRuns[i])
//     }
// }
// console.log(newArray)

// // 1.4 Print the total runs scored by Virat Kohli.
// console.log("Print the sum of all runs by Virat kohli")
// let sum = 0
// for(let i = 0; i < viratKohliRuns.length; i++){
//     sum += viratKohliRuns[i]
// }
// console.log("Total runs scored by virat kohli: ", sum)

// // 1.5 Print the sum of odd and even runs scored in the following format:

// // Sum of odd runs scored: {sumOdd}
// // Sum of even runs scored: {sumEven}


// let sumOfOdd = 0
// let sumOfEven = 0
// for(let i = 0; i < viratKohliRuns.length; i++){
//     if(viratKohliRuns[i] % 2 === 0){
//         sumOfEven += viratKohliRuns[i]
//     }
//     if(viratKohliRuns[i] % 2 !== 0){
//         sumOfOdd += viratKohliRuns[i]
//     }
// }
// console.log("Sum of odd runs scored: ", sumOfOdd)
// console.log("Sum of even runs scored: ", sumOfEven)

// Given an array of earnings of Shahrukh Khan. Perform the following tasks on the given array.
const srkEarnings = [12500020, 15000465, 950000302, 201800006, 
18000000, 11000000, 900054608, 130050087, 140000000, 160000109]

// 1.1 Print the earnings which are divisible by 3.
console.log("Earnings divisible by 3: ")
for(let i = 0; i < srkEarnings.length; i++){
    if(srkEarnings[i]%3 === 0){
        console.log(srkEarnings[i])
    }
}
// 1.2 Print the earnings which are divisible by 5.
console.log("Earnings divisible by 5")
for(let i=0; i<srkEarnings.length; i++){
    if(srkEarnings[i] % 5 === 0){
        console.log(srkEarnings[i])
    }
}
// 1.3 Create a new array with earnings which are divisible by 2. Print the new array.
let newArray = []
for(let i = 0; i<srkEarnings.length; i++){
    if(srkEarnings[i] % 2 === 0){
        newArray.push(srkEarnings[i])
    }
}
console.log("Earning divisibe by 2: ")
console.log(newArray)

// 1.4 Print the total earnings of Shahrukh Khan.
let totalEarning = 0
for(let i = 0; i < srkEarnings.length; i++){
    totalEarning += srkEarnings[i]
}
console.log("Total Earnings by Shahrukh khan: ", totalEarning)

// 1.5 Print the sum of odd and even earnings in the following format:

// Sum of odd earnings: {sumOddEarnings}
// Sum of even earnings: {sumEvenEarnings}

let sumOfOddEarning = 0
let sumOfEvenEarning = 0
for(let i = 0; i < srkEarnings.length; i++){
    if(srkEarnings[i] % 2 === 0){
        sumOfEvenEarning += srkEarnings[i]
    }
    if(srkEarnings[i] % 2 !== 0){
        sumOfOddEarning += srkEarnings[i]
    }
}
console.log("Sum of odd earning: ", sumOfOddEarning)
console.log("Sum of Even Earning: ", sumOfEvenEarning)