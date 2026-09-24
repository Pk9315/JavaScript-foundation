// print 1 to 10 number using for loop
for(let i = 1; i <= 10; i++){
    console.log(i)
}
console.log("--------------------------------------")
// print number 10 to 1 reverse order using for loop
for(let i = 10; i >= 1; i--){
    console.log(i)
}
console.log("------------------------------------")
// Print the number from 1 to 20 only even number using for loop
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
console.log("--------------------------")
// print the number from 1 to 20 and find odd number using for loop
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

// print sum of all number from 1 to 20 even number using for loop
let sum = 0
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        sum = sum + i
    } 
}
console.log(sum)
console.log("--------------------------")

// print sum of all number from 1 to 20 odd number using for loop
let sumOfOdd = 0
for(let i = 1; i <= 20; i++){
    if(i % 2 !==0){
        sumOfOdd = sumOfOdd + i
    }
}
console.log("Sum of All Odd: ", sumOfOdd)
console.log("========================")
// print square number from 1 to 10 using for loop
for(let i = 1; i <= 10; i++){
    console.log(i*i)
}
console.log("========================")
// print factorial number from 1 to 5 using for loop

let factorial = 1
for(let i = 1; i <= 5; i++){
    factorial = factorial * i
}
console.log("Fectorial of 5: ", factorial)

console.log("========================")
// print multiplication of 5 using for loop
for(let i = 1; i <= 10; i++){
    let result = 5 * i
    console.log("5 * " + i + " = " + result)
}

// print the number 1 to 50 which is divisible by 3 and count that number

let count = 0
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        count++
    }
}
console.log("Numbers: ", count)

// print the number from 1 to 50 only even number and count the number
let countEven = 0
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        countEven++
    }
}
console.log("Count Even Numbers: ", countEven)

// print the number from 1 to 50 even and odd number and count the number
let countEvenNum = 0
let countOdd = 0
for(let i = 1; i <= 50; i++){
    if(i % 2 === 0){
        countEvenNum++
    }else{
        countOdd++
    }
}
console.log("Count Even: ", countEvenNum)
console.log("Count Odd Number: ", countOdd)

// print the sum of all odd and even from 1 to 50 number
let sumOfEven = 0
let sumOfOddNum = 0
for(let i = 1; i <= 50; i++){
    if(i % 2 ===0){
        sumOfEven = sumOfEven + i
    }else{
        sumOfOddNum = sumOfOddNum + i
    }
}
console.log("Sum of Odd Numbers: ", sumOfOddNum)
console.log("Sum Of Even Number: ", sumOfEven)