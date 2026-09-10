// Question 39: : Take electricity units consumed and calculate the bill as per slabs (using if-else).
// let units = 250
// let bill
// if(units > 0 && units <= 100){
//     bill = units * 5
// }else if(units > 100 && units <= 200){
//     bill = 100 * 5 + (units - 100) * 7
// }else{
//     bill = 100 * 5 + 100 * 7 + (units - 200) * 10
// }
// console.log("The Bill: ", bill)

// 10.  Take a password string and check basic rules (length ≥ 8 and contains at least one digit).
// let password = "Pritam123!"
// let hasDigit = false
// for(let i = 0; i < password.length; i++){
//     if(password[i] >= "0" && password[i] <= "9"){
//         hasDigit = true
//     }
// }
// if(password.length >= 8 && hasDigit){
//     console.log("Valid Password")
// }else{
//     console.log("Invalid Password")
// }

// Question 41: : Take coordinates (x, y) and check if the point lies on the X-axis, Y-axis, or at the origin.
// let x = 0
// let y = 5
// if(x === 0 && y === 0){
//     console.log("Origin")
// }else if(x === 0){
//     console.log("Y-axis")
// }else if(y === 0){
//     console.log("X-axis")
// }else{
//     console.log("Not on an axis")
// }

// 2. Take three numbers and check if they can form a Pythagorean triplet.

// let side1 = 3
// let side2 = 4
// let side3 = 5
// if(side1*side1 + side2*side2 === side3*side3 || side2*side2 + side3*side3 === side1*side1 || side1*side1 + side3*side3 === side2*side2){
//     console.log("This is Pythagorean triplet")
// }else{
//     console.log("This is not Pythagorean triplet")
// }

// 3. Take day and month and check if it forms a valid calendar date (ignoring leap years). 
// let day = 29
// let month = 3
// if(month === 2){
//     if(day >= 1 && day <= 28){
//         console.log("Valid Calender")
//     }else{
//         console.log("Invalid Calender")
//     }
// }else if(month === 4 || month === 6 || month === 9 || month === 11){
//     if(day >= 1 && day <= 30){
//         console.log("Valid Calender")
//     }else{
//         console.log("Invalid Calender")
//     }
// }else if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     if(day >= 1 && day <= 31){
//         console.log("Valid Calender")
//     }else{
//         console.log("Invalid Calender")
//     }
// }else{
//     console.log("Invalid Month")
// }

// Question 44: : Take time (hours and minutes) and print the smaller angle between the hour and minute hands.
// let hours = 3
// let minute = 30
// let hourAngle = (hours % 12) * 30 + minute * 0.5
// let minuteAngle = minute * 6
// let angle = Math.abs(hourAngle - minuteAngle)
// if(angle > 180){
//     angle = 360 - angle
// }
// console.log("Smaller Angle: ", angle)

// Question 45: : Take three numbers and check if they are in arithmetic progression.
// let a = 4
// let b = 8
// let c = 12

// if(b - a === c - b){
//     console.log("Arithmetic Progression")
// }else{
//     console.log("Not Arithmetic Progression")
// }

// Question 46: : Take three numbers and check if they are in geometric progression.
// let a = 3
// let b = 9
// let c = 27
// if(b / a === c / b){
//     console.log("geometric progression")
// }else{
//     console.log("not geometric progression")
// }

// Question 47: : Take a 3-digit number and check if the sum of the first and last digit equals the middle digit.
// let number = 582
// let firstNum = Math.floor(number / 100)
// let middleNum = Math.floor((number % 100)/10)
// let lastNum = number % 10
// let sumOfFirstAndLastNum = firstNum + lastNum
// if(sumOfFirstAndLastNum === middleNum){
//     console.log("first and last numbers are equal to middle number")
// }else{
//     console.log("the numbers are not equal to middle number")
// }

// Question 48: : Take an integer (1-9999) and check if the sum of its digits is greater than the product of its digits.
// let number = 5364
// let sum = 0
// let product = 1
// for(let i = 0; i < number; i++){
//   let digit = number % 10
//   sum = sum + digit
//   product = product * digit
//   number = Math.floor(number / 10)
// }
// if(sum > product){
//     console.log("sum is greater than product")
// }else if(sum < product){
//     console.log("Product is greater than sum")
// }else{
//     console.log("Both are equal to each other")
// }

// Question 49: : Take two dates (day and month) and determine which one comes first in the calendar.
        // let day1 = 12
        // let month1 = 5
        
        // let day2 = 10
        // let month2 = 6;
        // if(month1 > month2){
        //     console.log(day2, "comes first in the calender")
        // }else if(month1 < month2){
        //     console.log(day1, "comes first in the calender")
        // }else if(month1 === month2){
        //     if(day1 > day2){
        //         console.log(day2, "comes first in the calender")
        //     }else if(day1 < day2){
        //         console.log(day1, "comes first in the calender")
        //     }else if(day1 === day2){
        //         console.log("Day1 and Day2 comes in the same month")
        //     }else{
        //         console.log("Invalid day")
        //     }
        // }

// 10. Take a year and print the corresponding century (e.g., “19th century”, “20th century”) 
// let year = 1998;
// let century = Math.floor((year + 99) / 100)
// console.log(century + " The Century")

