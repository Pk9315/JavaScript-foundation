// print the number from 1 to 50 using for loop and check how many numbers are divisible by 3 and 5
// and count the number
let countNumberDivisibleBy3 = 0
let countNumberDivisibleBy5 = 0
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        countNumberDivisibleBy3++
    }
    if(i % 5 === 0){
        countNumberDivisibleBy5++
    }
}
console.log("Count the number divisible by 3: ", countNumberDivisibleBy3)
console.log("Count the number divisible by 5: ", countNumberDivisibleBy5)

// Write a JavaScript program using a for loop to calculate the sum of all numbers from 1 to 50 that are divisible by 3,
//  and the sum of all numbers from 1 to 50 that are divisible by 5.
let sumOfAllNumbersDivisibleBy3 = 0
let sumOfAllNumbersDivisibleBy5 = 0
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        sumOfAllNumbersDivisibleBy3 = sumOfAllNumbersDivisibleBy3 + i 
    }
    if(i % 5 === 0){
        sumOfAllNumbersDivisibleBy5 = sumOfAllNumbersDivisibleBy5 + i
    }
}
console.log("Sum of All Numbers Divisible by 3: ", sumOfAllNumbersDivisibleBy3)
console.log("Sum of All Numbers divisible by 5: ", sumOfAllNumbersDivisibleBy5)

// Write a JavaScript program using a for loop to find the largest number divisible by 3 between 1 and 50.
let largestNumber = 0
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        if(i > largestNumber){
            largestNumber = i
        }
    }
}
console.log("largest Number: ", largestNumber)

// Write a JavaScript program using a for loop to find the smallest number divisible by 3 between 1 and 50.
let smallestNumber = 5
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
      if(i < smallestNumber){
        smallestNumber = i
        break
      }
    }
}
console.log("Smallest number divisible by 3: ", smallestNumber)

// Find smallest number divisible by 7 between 1 and 50.

let findSmallestNumber = Infinity
for(let i = 1; i <= 50; i++){
    if(i % 7 === 0){
        if(i < findSmallestNumber){
            findSmallestNumber = i
        }
    }
}
console.log("Number divisible by 7: ", findSmallestNumber)

// Write a JavaScript program using a for loop to find the largest number divisible by 7 between 1 and 100.
let findLargestNumber = -Infinity
for(let i = 1; i <= 100; i++){
    if(i % 7 === 0){
        if(i > findLargestNumber){
            findLargestNumber = i
            
        }
       
    }
}
console.log("Largest Number Divisible By 7: ", findLargestNumber)