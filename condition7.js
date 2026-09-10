// Question 11: : Take three sides and check if they form a valid triangle.
// let a = 3
// let b = 4 
// let c = 5
// if((a+b) > c && (b+c) > a && (a+c) > b){
//     console.log("Valid Tringle")
// }else{
//     console.log("Invalid Tringle")
// }

// Question 12: : If the sides form a valid triangle, determine whether it is equilateral, isosceles, or scalene.

// let a = 5
// let b = 5
// let c = 8;

// if((a+b) > c && (b + c) > a && (c + a) > b){
//     if(a === b && b === c && c === a){
//         console.log("Equilateral Triangle")
//     }else if(a === b || b === c || c === a){
//         console.log("Isosceles Triangle")
//     }else{
//         console.log("scalene")
//     }
// }else{
//     console.log("Invalid Triangle")
// }


// Question 13: : Take marks (0-100) and print the corresponding grade (A/B/C/D/F).

// let marks = 82
// if(marks >= 90){
//     console.log("A")
// }else if(marks >= 75){
//     console.log("B")
// }else if(marks >= 60){
//     console.log("C")
// }else if(marks >= 40){
//     console.log("D")
// }else{
//     console.log("F")
// }

// Question 14: : Check if one of two given numbers is a multiple of the other.

// let firstNum = 12 
// let secondNum = 36

// if(firstNum % secondNum === 0){
//     console.log("First is a multiple of Second number")
// }else if(secondNum % firstNum === 0){
//     console.log("Second is a multiple of first number")
// }else{
//     console.log("No number is multiple of the other")
// }

// Question 15: : Take the hour of the day (0-23) and print "Good Morning", "Good Afternoon", "Good Evening", or "Good Night".

// let hour = 16
// if(hour >= 5 && hour < 12){
//     console.log("Good Morning")
// }else if(hour >= 12 && hour < 17){
//     console.log("Good Afternoon")
// }else if(hour >= 17 && hour < 21){
//     console.log("Good Evening")
// }else{
//     console.log("Good Night")
// }

// Question 16: : Check voting eligibility for a given age (18+).

// let age = 19
// if(age >= 18){
//     console.log("Eligible for voting")
// }else{
//     console.log("Minor")
// }

// Question 17: : Take two numbers and determine whether both are even, both are odd, or one is even and one is odd.
// let num1 = 12
// let num2 = 18
// if(num1 % 2 === 0 && num2 % 2 === 0){
//     console.log("Both are even number")
// }else if(num1 % 2 !== 0 && num2 % 2 !==0){
//     console.log("Both are odd")
// }else{
//     console.log("One is Odd and one is even")
// }

// Question 18: : Take an alphabet character and check if it lies between 'a' and 'm' or 'n' and 'z'.
// let ch = "h"
// if(ch >= 'a' && ch <= 'm'){
//     console.log("Between a and m")
// }else if(ch >= "n" && ch <= "z"){
//     console.log("Between n and z")
// }else{
//     console.log("Not a lowercase alphabet")
// }

// Question 19: : Take a day number (1-7) and print the corresponding day name.

// let day = 6
// if(day === 1){
//     console.log("Monday")
// }else if(day === 2){
//     console.log("Tuesday")
// }else if(day === 3){
//     console.log("Wednesday")
// }else if(day === 4){
//     console.log("Thursday")
// }else if(day === 5){
//     console.log("Friday")
// }else if(day === 6){
//     console.log("Saturday")
// }else if(day === 7){
//     console.log("Sunday")
// }else{
//     console.log("Invalid Day")
// }

// let month = 4
// if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     console.log("31 days in this month")
// }else if(month === 4 || month === 6 || month === 9 || month === 11){
//     console.log("30 days")
// }else if(month === 2){
//     console.log("28 days")
// }else{
//     console.log("Invalid Month")
// }