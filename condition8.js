// Question 21: : Take a 3-digit number and check if all digits are distinct.
// let num = 427
// let num1 = Math.floor(num / 100)
// let num2 = Math.floor((num % 100) / 10)
// let num3 = num % 10

// if(num1 != num2 && num1 != num3 && num2 != num3){
//     console.log("All number are distinct")
// }else{
//     console.log("Digits are not distinct")
// }

// Question 22: : Take a 3-digit number and determine if the middle digit is the largest, smallest, or neither.
// let number = 582;

// let num1 = Math.floor(number/100)
// let num2 = Math.floor((number % 100)/10)
// let num3 = number %10
// if(num2 > num1 && num2 > num3){
//     console.log("Middle digit is largest")
// }else if(num2 < num1 && num2 < num3){
//     console.log("middle digit is smallest")
// }else{
//     console.log("neither")
// }

// Question 23: : Take a 4-digit number and check if the first and last digits are equal.
// let number = 4554;

// let firstNumber = Math.floor(number / 1000)
// let lastNumber = number % 10
// if(firstNumber === lastNumber){
//     console.log("both digits are equal")
// }else{
//     console.log("Not equal")
// }

// Question 24: : Check whether a given integer is single-digit, double-digit, or multi-digit.
// let number = 87
// let value = Math.abs(value)
// if(value > 0 && value <= 9){
//     console.log("Single Digits")
// }else if(value >= 10 && value <= 99){
//     console.log("Double digits")
// }else{
//     console.log("Multi digits")
// }

// Question 25: : Check if a number is a multiple of 7 or ends with 7.
// let number = 147;
// let value = Math.abs(number)
// if(value % 7 === 0 || value % 10 === 7){
//     console.log("number is multiple of 7 and end with 7")
// }else{
//     console.log("number is not multiple of 7 and end with 7 ")
// }

// Question 26: : Take coordinates (x, y) and determine which quadrant the point lies in.

// let x = -4, y = 6;

// if(x > 0 && y > 0){
//     console.log("quadrant I")
// }else if(x < 0 && y > 0){
//     console.log("quadrant II")
// }else if(x < 0 && y < 0){
//     console.log("quadrant III")
// }else if(x > 0 && y < 0){
//     console.log("quadrant IV")
// }else{
//     console.log("This is not lies on any quadrant")
// }

// Question 27: : Check if an amount can be evenly divided into 2000, 500, and 100 currency notes.
// let amount = 7600;
// let notes2000 = Math.floor(amount / 2000)
// let remainingAmount = amount % 2000

// let notes500 = Math.floor(remainingAmount / 500)
// let remainingAmount500 = remainingAmount % 500

// let notes100 = Math.floor(remainingAmount500 / 100)
// let remainingAmount100 = remainingAmount500 % 100


// Question 28: : Check if a number lies within the range [100, 999].
// let number = 456;
// if(number >= 100 && number <= 999){
//     console.log("Inside the Range")
// }else{
//     console.log("Outside the range")
// }

// Question 29: : Take two angles of a triangle and compute the third angle.

// let angle1 = 60
// let angle2 = 80

// let thirdAngle = 180 - (angle1 + angle2)
// console.log("Third Angle =", thirdAngle)

// Question 30: : Check whether a number is a perfect square (without using the square root function).
// let num = 49
// let isPerfectSquare = false
// for(let i = 0; i*i <= num; i++){
//     if(i*i === num){
//         isPerfectSquare = true
//         break;
//     }
// }
// console.log(isPerfectSquare ? "perfect Square" : "Not Perfect Square")