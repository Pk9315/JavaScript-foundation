// Create variable for products in shopping carts with their prices and category

let product1 = "Laptop"
let price1 = 999
let category1 = "Electronic"
let product2 = "Running Shoes"
let price2 = 799
let category2 = "Footwear"
let product3 = "T-shirt"
let price3 = 199
let category3 = "Clothing"

// Exercise 1: Total Price of all products
function getTotalPrice(){
    let totalPrice = price1 + price2 + price3
    return totalPrice
}
// console.log(getTotalPrice())
// Exercise 2: calculate Discount
let discount = 0.1
function calculateDiscount(discount){
    if(category1 === "Electronic"){
        let finalPrice = price1 - (price1 * discount)
        return finalPrice
    }else{
        return "No discount"
    }
    
} 
// console.log(calculateDiscount(discount))
// Exercise 3: Print Cart summary
let finalTotalPrice = calculateDiscount(discount) + (price2 + price3)

// Exercise 3: Print Cart Summary
console.log("===== Cart Summary ======")
console.log("Product 1: ", product1)
console.log("Price of Product 1: ", price1)
console.log("Discount: ", discount)
console.log("Final Price Of Product: ", calculateDiscount(discount))
console.log("========================")
console.log("Product 2: ", product1)
console.log("Price of Product 2: ", price1)
console.log("Discount: 0")
console.log("Final Price Of Product 2: ", price2)
console.log("=====================")
console.log("Product 3: ", product1)
console.log("Price of Product 3: ", price1)
console.log("Discount: 0")
console.log("Final Price Of Product 3: ",price3)

console.log("Total Cart Price: ", finalTotalPrice)
