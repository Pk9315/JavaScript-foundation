function checkTemperature(temperature){
    if(temperature > 30){
        console.log("it is a hot day")
    }
}
checkTemperature(35)

function checkDiscountEligibility(totalAmount, discountThreshold){
    if(totalAmount >= discountThreshold){
        console.log("Customer is eligible for discount")
    }else{
        console.log("Customer is not eligible for discount")
    }
}
checkDiscountEligibility(1500,1000)

function findLargestNumber(num1,num2,num3){
    if(num1 >= num2 && num1 >= num3){
        return `${num1} is the largest number`
    }else if(num2 >= num1 && num2 >= num3){
        return `${num2} is the largest number`
    }else{
        return `${num3} is the largest number`
    }
}
console.log(findLargestNumber(25,18,32))

function calculateBonus(workedHours,grade,totalSalary){
    if(workedHours > 25 && grade > 85){
        totalSalary = totalSalary + (totalSalary * 0.1)
        return totalSalary
    }else if(workedHours > 15 && grade > 75){
        totalSalary = totalSalary + (totalSalary * 0.05)
        return totalSalary
    }else{
        return totalSalary
    }
}
console.log("The Updated Salary with bonus is: ", calculateBonus(30,90,5000))

// Create a function called checkAge that takes one argument called age. Inside the function, use an if statement to check if the age is greater than or equal to 18. If it is, console a message indicating that the person is eligible for voting. Call the function with the argument (21) to see the output.
function checkAge(age){
    if(age >= 18){
        console.log("The Person is eligible for voting")
    }else{
        console.log("The Person is not eligible for voting")
    }
}
checkAge(21)

// Create a function called compareNumbers that takes two arguments called num1 and num2. 
// Inside the function, use an if/else statement to compare the values of num1 and num2. 
// If num1 is greater than num2, console.log a message indicating that num1 is greater. Otherwise, 
// console.log a message indicating that num2 is greater.
//  Call the function with two arguments (10 and 5) to see the output.

function compareNumbers(number1,number2){
    if(number1 > number2){
        console.log(`${number1} is greater than ${number2}`)
    }else{
        console.log(`${number2} is the greater than ${number1}`)
    }
}
compareNumbers(10,5)

// Create a function called calculateShippingCost that takes three arguments: totalWeight, country, and baseCost. Inside the function, use if/else statements to calculate the shipping cost based on the following criteria:
// If totalWeight is less than or equal to 1 kg and country is "Local", add 10 to the baseCost and return the updated cost.
// If totalWeight is greater than 1 kg and country is "International", add 20 to the baseCost and return the updated cost.
// If none of the above conditions are met, return the baseCost without any additional charges.

// Call the function with three arguments: totalWeight as 0.5, country as "Local", and baseCost as 50 to see the output.

function calculateShippingCost(totalWeight,country,baseCost){
    if(totalWeight <= 1 && country === "Local"){
        baseCost = baseCost + 10
        return baseCost
    }else if(totalWeight > 1 && country === "International"){
        baseCost = baseCost + 20
    }else {
        return baseCost
    }
}
console.log("The updated shipping cost is: ",calculateShippingCost(0.5,"Local",50))

// Create a function called checkEvenOdd that takes one argument called number. 
// Inside the function, use an if-else statement to check if the number is even or odd. 
// If it is even, console.log a message indicating that the number is even. If it is odd, console.log a message indicating that the number is odd.
// Call the function with the argument (9) to see the output.

function checkEvenOdd(number){
    if(number % 2 === 0){
        console.log("The number is even")
    }else{
        console.log("The number is odd")
    }
}
checkEvenOdd(9)

// Create a function called checkGrade that takes two arguments, score and passingScore. 
// Inside the function, use an if statement to compare the score with the passingScore. 
// If the score is greater than or equal to the passingScore, 
// console.log a message indicating that the student has passed.

// Call the function with two arguments (score as 85 and passing score as 60) to see the output.

function checkGrade(score,passingScore){
    if(score >= passingScore){
        console.log("Congratulations! You have passed!")
    }else{
        console.log("You failed")
    }
}
checkGrade(85,60)

// Create a function called calculateAllowance that takes three arguments: age, isStudent, and baseAllowance. Inside the function, 
// use if/else statements to determine the additional allowance based on the following criteria:

// If age is less than 18 and isStudent is true, add 100 to the baseAllowance and return the updated allowance.
// If age is between 18 and 25 (inclusive of both 18 and 25) and isStudent is true, add 50 to the baseAllowance and return the updated allowance.
// If none of the above conditions are met, return the original baseAllowance.

// Call the function with three arguments: age as 16, isStudent as true, and baseAllowance as 500 to see the output.

function calculateAllowance(age,isStudent,baseAllowance){
    if(age < 18 && isStudent){
        baseAllowance = baseAllowance + 100
        return baseAllowance
    }else if(age >= 18 && age <= 25 && isStudent){
        baseAllowance = baseAllowance + 50
        return baseAllowance
    }else{
        return baseAllowance
    }
}
console.log("The updated allowance is: ",calculateAllowance(16,true,500))