// // let age = 18
// // let isAdult = true
// // if(isAdult){
// //     console.log("Adult")
// //     console.log("Age: ", age)
// // }

// // let customerAge = 22
// // let baseTicketPrice = 200
// // if(customerAge <= 18){
// //     baseTicketPrice = baseTicketPrice - (baseTicketPrice * 0.2)
// //     console.log("Ticket Price: ", baseTicketPrice)
// // }else{
// //     console.log("Ticket Price: ", baseTicketPrice)
// // }


// // let num1 = 25
// // let num2 = 50
// // let num3 = 20
// // if(num3 < num1 && num3 < num2){
// //     console.log(`The third number ${num3}, is the smallest number`)
// // }else{
// //     console.log(`the third number ${num3}, is not the smallest`)
// // }

// // let book1 = "Harry Potter and sorcerer's stone"
// // let book2 = "The Great Gatsby"
// // let book3 = "To Kill a mockingbird"
// // let book4 = "The Lord of the rings"

// // // book Price
// // let price1 = 400
// // let price2 = 300
// // let price3 = 250
// // let price4 = 500

// // let totalCartPrice = price1 + price2 + price3 + price4

// // let deliveryChargeStatus = ""
// // if(totalCartPrice < 799){
// //     let deliveryCharge = 50
// //     totalCartPrice = totalCartPrice + deliveryCharge
// //     deliveryChargeStatus = "Optional Delivery Charge: " + deliveryCharge
// // }else{
// //     deliveryChargeStatus = "No Delivery Charge "
// // }
// // console.log("*** Bookstore Shopping Cart Summary ***")
// // console.log("Book1: ", book1, " - ", price1)
// // console.log("Book2: ", book2, " - ", price2)
// // console.log("Book3: ", book3, " - ", price3)
// // console.log("Book4: ", book4, " - ", price4)
// // console.log("------------------------------------------")
// // console.log("Total Cart Price: ", totalCartPrice)
// // console.log("Delivery Charge Status: ", deliveryChargeStatus)


// // let age = 15
// // let isAdult = false
// // if(!isAdult){
// //     console.log("Not a adult")
// //     console.log("Age: ", age)
// // }

// // let passengerAge = 65
// // let originalTicketPrice = 150
// // if(passengerAge >60){
// //     originalTicketPrice = originalTicketPrice - (originalTicketPrice * 0.15)
// //     console.log("Ticket Price for age greater than 60: ", originalTicketPrice)
// // }else{
// //     console.log("Ticket Price for less than or equal to 60: ", originalTicketPrice)
// // }


// // let score1 = 85
// // let score2 = 90
// // let score3 = 78

// // let student1 = score1
// // let student2 = score2
// // let student3 = score3
// // if(student2 > student1 && student2 > student3){
// //     console.log("Student 2 has the highest score: ", student2)
// // }else {
// //     console.log("Student 2 does not have highest score: ", student2)
// // }


// let item1 = "Mobile Phone"
// let item2 = "HeadPhone"
// let item3 = "Laptop"
// let item4 = "Smartwatch"

// let price1 = 15000
// let price2 = 2500
// let price3 = 45000
// let price4 = 8000

// let totalCartPrice = price1 + price2 + price3 + price4
// let deliveryChargeStatus = ""

// if(totalCartPrice < 1999){
//     let deliveryCharge = 99
//     totalCartPrice = totalCartPrice + deliveryCharge
//     deliveryChargeStatus = "Optional Delivery Charge " + deliveryCharge
// }else{
//     deliveryChargeStatus = "No Delivery Charge"
// }
// console.log("***** Shopping Cart Summary *****")
// console.log("Item 1: ", item1, "-", price1)
// console.log("Item 2: ", item2, "-",price2)
// console.log("Item 3: ", item3, "-", price3)
// console.log("Item 4: ", item4, "-", price4)
// console.log("------------------------------------------")
// console.log("Total Cart Price: ", totalCartPrice)
// console.log("Delivery Charge Status: ", deliveryChargeStatus)

// Question 39: : Take electricity units consumed and calculate the bill as per slabs (using if-else).

// let units = 250
// let bill;
// if(units <= 100){
//     bill = units * 5
// }else if(units <= 200){
//     bill = 100 * 5 + (units - 100) * 7
// }else {
//     bill = 100 * 5 + 100 * 7 + (units - 200) * 10
// }
// console.log("Bill: ", bill)

// // Question 40: : Take a password string and check basic rules (length >= 8 and contains at least one digit).
// let password = "code123!"
// let hasDigit = false

// for(let i = 0; i <= password.length; i++){
//     if(password[i] >= "0" && password[i] >= "9"){
//         hasDigit = true
//     }
// }
// if(password.length >= 8 && hasDigit){
//     console.log("Valid Password")
// }else{
//     console.log("Invalid Password")
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
// }else if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     if(day >= 1 && day <= 31){
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
// }else{
//     console.log("Invalid month")
// }

// Question 44: : Take time (hours and minutes) and print the smaller angle between the hour and minute hands.
// let hours = 3;
// let minutes = 30;
// let hourAngle = (hours % 12) * 30 + minutes * 0.5
// let minuteAngle = minutes * 6
// let angle = Math.abs(hourAngle - minuteAngle)
// if(angle > 180){
//     angle = 360-angle
// }
// console.log("The Angle: ", angle)

// Question 48: : Take an integer (1-9999) and check if the sum of its digits is greater than the product of its digits.

// let number = 1234
// let sum = 0
// let product = 1
// for(let i = 0; i < number; i++){
//     let digit = number % 10
//     sum = sum + digit
//      product = product * digit
//     number = Math.floor(number / 10)
// }
// console.log("Sum: ", sum)
// console.log("Product: ", product)


// Question 49: : Take two dates (day and month) and determine which one comes first in the calendar.
// let day1 = 12
// let month1 = 5

// let day2 = 10
// let month2 = 6

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
//         console.log(`${day1} and ${day2} boths comes in the same canlender`)
//     }
// }else{
//     console.log("Invalid month")
// }

// Question 50: : Take a year and print the corresponding century (e.g., "19th century", "20th century").
let year = 1998;
let century = Math.floor((year + 99) / 100)
console.log("The Century: ", century)