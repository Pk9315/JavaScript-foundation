for(let i = 10; i >= 1; i--){
    console.log(i)
}
console.log("-------------------------------------")
for(let i = 10; i >= 1; i--){
    let result = 7 * i
    console.log("7 * " + i + " = " + result)
}
console.log("-------------------------------------")
for(let i = 12; i >= 2; i-=3){
    console.log(i)
}
console.log("-------------------------------------")

// 1.1 Write JavaScript code using for loop to print the numbers from 20 to 10 in decreasing order.
for(let i = 20; i >= 10; i--){
    console.log(i)
}
console.log("-------------------------------------")
// 1.2 Write JavaScript code using a for loop to print the multiplication table of 6 in reverse order, from 60 to 6.
for(let i = 10; i >= 1; i--){
    let result = 6 * i
    console.log("6 * " + i + " = " + result)
}
console.log("-------------------------------------")
// 1.3 Write JavaScript code using a for loop to print every 10th number from 100 to 10 in decreasing order.
for(let i = 100; i >= 10; i -= 10){
    console.log(i)
}
console.log("-------------------------------------")
// 2.1 Write JavaScript function that takes a number n as input and prints all numbers from 1 to n. Take n as 8.
function printNumber(n){
    for(let i =1 ; i <= n; i++){
        console.log(i)
    }
}
printNumber(8)
console.log("-------------------------------------")
// 2.2 Write JavaScript function that takes a number n as input and prints all even numbers from 1 to n. Take n as 15.
function printAllEvenNumber(n){
    for(let i = 1; i <= n; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
printAllEvenNumber(15)
console.log("-------------------------------------")
// 2.3 Write a JavaScript function that takes a number n as input and prints all numbers from 1 to n that are divisible by 5 and 10. Take n as 50.
function numberDivisibleBy5And10(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 === 0 && i % 10 === 0){
            console.log(i)
        }
    }
}
numberDivisibleBy5And10(50)

console.log("-------------------------------------")

// 1.1 Write JavaScript code using for loop to print the numbers from 30 to 11 in decreasing order.
for(let i = 30; i >= 11; i--){
    console.log(i)
}
console.log("-------------------------------------")

// 1.2 Write JavaScript code using a for loop to print the multiplication table of 9 in reverse order, from 135 to 9.
for(let i = 15; i >= 1; i--){
    let result = 9 * i
    console.log("9 * " + i + " = " + result)
}
console.log("-------------------------------------")
// 1.3 Write JavaScript code using a for loop to print every 5th number from 50 to 5 in decreasing order.
for(let i = 50; i >= 5; i -= 5){
    console.log(i)
}

console.log("-------------------------------------")
// 2.1 Write a JavaScript function that takes a number n as input and prints all numbers from 1 to n that are divisible by 8. Take n as 30.
function numberDivisibleBy8(n){
    for(let i = 1; i <= n; i++){
        if(i % 8 === 0){
            console.log(i)
        }
    }
}
numberDivisibleBy8(30)
console.log("-----------------------------")
// 2.2 Write JavaScript function that takes a number n as input and prints all odd numbers from 5 to n. Take n as 15.
function oddNumber(n){
    for(let i = 5; i <= n; i++){
        if(i % 2 !== 0){
            console.log(i)
        }
    }
}
oddNumber(15)
console.log("-----------------------------")
// 2.3 Write a JavaScript function that takes a number n as input and prints all numbers from 1 to n that are divisible by 5 and 7. Take n as 50.
function numberDivisibleBy5And7(n){
    for(let i = 1; i <= n; i++){
        if(i % 5 ===0 && i % 7 === 0){
            console.log(i)
        }
    }
}
numberDivisibleBy5And7(50)