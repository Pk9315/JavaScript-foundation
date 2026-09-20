function greetUser(){
    console.log("Good Morning!")
}
greetUser()

function welcomeMessage(userName){
    console.log("Hey There, " + userName + "! We are thrilled to have you")
}
welcomeMessage()

function formatMessage(message){
    return "**" + message + "**"
}
console.log(formatMessage("Learning function with return in javascript"))

function concatinateString(string1,string2){
    return string1 + " " + string2
}
console.log(concatinateString("Red", "Bull"))

function addString(color1,color2,color3){
    return color1 + "," + color2 + "," + color3
}
console.log(addString("The Primary Color are: " + "Red", "Yellow", "Blue"))


function incrementAgeBy5(age){
    return age + 5

}
console.log(incrementAgeBy5(25))

function calculateProduct(num1, num2){
    return num1 * num2
}
console.log(calculateProduct(10,30))

function calculateDiscountAmount(price,discountPercentage){
    return (price * discountPercentage) / 100
}
console.log(calculateDiscountAmount(1000,20))

function calculateNetSalary(baseSalary,performanceBonus){
    return performanceBonus + baseSalary
}
console.log(calculateNetSalary(290000,20000))

function warnUser(userName){
    console.log("Hey There, " + userName + "! you are running out of storage")
}
warnUser("Pritam")

function congatulationMessage(message){
    return "$$" + message + "$$"
}
console.log(congatulationMessage("congratulation! you won a lottery."))

function concatenateKeywords(keywords1, keywords2){
    return keywords1 + "-" + keywords2
}
console.log(concatenateKeywords("if", "else"))

function showTertiaryColors(color1,color2,color3,color4,color5,color6){
    return color1 + "-" + color2 + "," + color3 + "-" + color2 + "," +color3 + "-" + color4 + "," + color5 + "-" + color4 + "," + color5 + "-" + color6 + "," + color1 + "-" + color6
}
console.log(showTertiaryColors("Red", "Orange","Yellow","Green","Blue","Violet"))

function decrementAgeBy10(age){
    return age - 10
}
console.log(decrementAgeBy10(35))

function getRemainder(num1,num2){
    return num1 % num2
}
console.log(getRemainder(10,3))

function calculateTotalPrice(price,quantity){
    return price * quantity

}
console.log(calculateTotalPrice(120,10))

function calculateTotalAmount(price1,price2,quantity1,quantity2){
    let totalAmount1 = price1 * quantity1
    let totalAmount2 = price2 * quantity2
    return totalAmount1 + totalAmount2
}
console.log(calculateTotalAmount(120,150,10,15))