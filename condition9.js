// Question 31: : Take a character and check if it is a letter, a digit, or neither.
// let chr = "A"
// if(chr >= "A" && chr <= "Z" || chr >= "a" && chr <= "z"){
//     console.log("Letter")
// }else if(chr >= "0" && chr <= "9"){
//     console.log("Digit")
// }else{
//     console.log("Neither")
// }

// Question 32: : Take a number and print "Fizz" if divisible by 3, "Buzz" if divisible by 5, and "FizzBuzz" if divisible by both.
// let number = 25;
// if(number % 3 === 0 && number % 5 === 0){
//     console.log("FizzBuzz")
// }else if(number % 3 === 0){
//     console.log("Fizz")
// }else if(number % 5 === 0){
//     console.log("Buzz")
// }else{
//     console.log("Neither")
// }

// Question 33: : Take three numbers and print the median value (neither maximum nor minimum).
// let a = 12
// let b = 5
// let c = 20
// let median;
// if((a >= b && a <= c) || (a >= c && a <= b)){
//     median = a
// }else if((b >= a && b <= c) || (b >= c && b <= a)){
//     median =  b
// }else{
//     median = c
// }
// console.log("Median: ", median)

// Question 34: : Take 24-hour time (hours and minutes) and print whether it is AM or PM.

// let hour = 23
// if(hour > 0 && hour < 12){
//     console.log("AM")
// }else{
//     console.log("PM")
// }

// Question 35: : Take income and age, and check if eligible for tax (age > 18 and income > 5 L).
// let age = 25;
// let income = 600000;

// if(age > 18 && income > 500000){
//     console.log("Eligible for tax")
// }else{
//     console.log("Not eligible for tax")
// }

// Question 36: : Take two numbers and check if both are positive and their sum is less than 100.
// let first = 30
// let second = 40
// let sumOfBoth = first + second
// if(first > 0 && second > 0 && sumOfBoth < 100){
//     console.log("Condition Satisfied")
// }else{
//     console.log("Condition not satisfied")
// }

// Question 37: : Take a single digit (0-9) and print its word form ("Zero" to "Nine").
// let digit = 7;
// if(digit === 1){
//     console.log("One")
// }else if(digit === 2){
//     console.log("Two")
// }else if(digit === 3){
//     console.log("Three")
// }else if(digit === 4){
//     console.log("Four")
// }else if(digit === 5){
//     console.log("Five")
// }else if(digit === 6){
//     console.log("Six")
// }else if(digit === 7){
//     console.log("Seven")
// }else if(digit === 8){
//     console.log("Eight")
// }else if(digit === 9){
//     console.log("Nine")
// }else{
//     console.log("Invalid digit")
// }

// Question 38: : Take a weekday number (1-7) and determine if it is a weekday or weekend.
// let day = 3;
// if(day >= 1 && day <= 5){
//     console.log("Weekday")
// }else if(day === 6 || day === 7){
//     console.log("weekend")
// }else{
//     console.log("Invalid day")
// }

// Question 39: : Take electricity units consumed and calculate the bill as per slabs (using if-else).
// let units = 250;
// let bill;
// if(units > 0 && units <= 100){
//     bill = units * 5
// }else if(units > 100 && units <= 200){
//     bill = 100 * 5 + (units - 100) * 7
// }else {
//     bill = 100 * 5 + 100 * 7 + (units - 200) * 10
// }
// console.log(bill)
// Question 40: : Take a password string and check basic rules (length >= 8 and contains at least one digit).
let password = "Code123!";
let hasDigit = false
for(let i = 0; i < password.length; i++){
   if(password[i] >= "0" && password[i] <= "9"){
    hasDigit = true
   }
}
if(password.length >= 8 &&  hasDigit){
    console.log("Valid Password")
}else{
    console.log("Invalid Password")
}