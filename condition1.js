// let age = 18
// let isAdult = true
// if(isAdult){
//     console.log("Adult")
//     console.log("Age: ", age)
// }

// let customerAge = 22
// let baseTicketPrice = 200
// if(customerAge <= 18){
//     baseTicketPrice = baseTicketPrice - (baseTicketPrice * 0.2)
//     console.log("Ticket Price: ", baseTicketPrice)
// }else{
//     console.log("Ticket Price: ", baseTicketPrice)
// }


// let num1 = 25
// let num2 = 50
// let num3 = 20
// if(num3 < num1 && num3 < num2){
//     console.log(`The third number ${num3}, is the smallest number`)
// }else{
//     console.log(`the third number ${num3}, is not the smallest`)
// }

// let book1 = "Harry Potter and sorcerer's stone"
// let book2 = "The Great Gatsby"
// let book3 = "To Kill a mockingbird"
// let book4 = "The Lord of the rings"

// // book Price
// let price1 = 400
// let price2 = 300
// let price3 = 250
// let price4 = 500

// let totalCartPrice = price1 + price2 + price3 + price4

// let deliveryChargeStatus = ""
// if(totalCartPrice < 799){
//     let deliveryCharge = 50
//     totalCartPrice = totalCartPrice + deliveryCharge
//     deliveryChargeStatus = "Optional Delivery Charge: " + deliveryCharge
// }else{
//     deliveryChargeStatus = "No Delivery Charge "
// }
// console.log("*** Bookstore Shopping Cart Summary ***")
// console.log("Book1: ", book1, " - ", price1)
// console.log("Book2: ", book2, " - ", price2)
// console.log("Book3: ", book3, " - ", price3)
// console.log("Book4: ", book4, " - ", price4)
// console.log("------------------------------------------")
// console.log("Total Cart Price: ", totalCartPrice)
// console.log("Delivery Charge Status: ", deliveryChargeStatus)


// let age = 15
// let isAdult = false
// if(!isAdult){
//     console.log("Not a adult")
//     console.log("Age: ", age)
// }

// let passengerAge = 65
// let originalTicketPrice = 150
// if(passengerAge >60){
//     originalTicketPrice = originalTicketPrice - (originalTicketPrice * 0.15)
//     console.log("Ticket Price for age greater than 60: ", originalTicketPrice)
// }else{
//     console.log("Ticket Price for less than or equal to 60: ", originalTicketPrice)
// }


// let score1 = 85
// let score2 = 90
// let score3 = 78

// let student1 = score1
// let student2 = score2
// let student3 = score3
// if(student2 > student1 && student2 > student3){
//     console.log("Student 2 has the highest score: ", student2)
// }else {
//     console.log("Student 2 does not have highest score: ", student2)
// }


let item1 = "Mobile Phone"
let item2 = "HeadPhone"
let item3 = "Laptop"
let item4 = "Smartwatch"

let price1 = 15000
let price2 = 2500
let price3 = 45000
let price4 = 8000

let totalCartPrice = price1 + price2 + price3 + price4
let deliveryChargeStatus = ""

if(totalCartPrice < 1999){
    let deliveryCharge = 99
    totalCartPrice = totalCartPrice + deliveryCharge
    deliveryChargeStatus = "Optional Delivery Charge " + deliveryCharge
}else{
    deliveryChargeStatus = "No Delivery Charge"
}
console.log("***** Shopping Cart Summary *****")
console.log("Item 1: ", item1, "-", price1)
console.log("Item 2: ", item2, "-",price2)
console.log("Item 3: ", item3, "-", price3)
console.log("Item 4: ", item4, "-", price4)
console.log("------------------------------------------")
console.log("Total Cart Price: ", totalCartPrice)
console.log("Delivery Charge Status: ", deliveryChargeStatus)