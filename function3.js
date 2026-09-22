let hourlyRate = 500
let hoursWorked = 40

// Find The Gross Pay
function calculateGrossPay(hourlyRate,hoursWorked){
    return hourlyRate * hoursWorked
}
let grossPay = (calculateGrossPay(hourlyRate,hoursWorked))
console.log("Gross Pay: ", grossPay)

// To get the overtime 
let overtimeRate = 1.5

function calculateOvertimePay(hourlyRate,hoursWorked,overtimeRate){
    let overtimePay = 0
    if(hoursWorked > 40){
        let overtimeWorked = hoursWorked - 40
        overtimePay = overtimeWorked * hourlyRate * overtimeRate
    }
    return overtimePay
}
let overTimePay = (calculateOvertimePay(hourlyRate,hoursWorked,overtimeRate))
console.log(overTimePay)

// To get the deduction 
let taxRate = 0.2
let insuranceRate = 0.1
let retirementRate = 0.05

function calculateDeduction(grossPay,taxRate,insuranceRate,retirementRate){
    let taxAmount = taxRate * grossPay
    let insuranceAmount = insuranceRate * grossPay
    let retirementAmount = retirementRate * grossPay
    return taxAmount + insuranceAmount + retirementAmount
}
let deductionAmount = calculateDeduction(grossPay,taxRate,insuranceRate,retirementRate)
console.log("Total Deduction Amount: ", deductionAmount)

function calculateNetPay(grossPay,overTimePay,deductionAmount){
    return grossPay + overTimePay - deductionAmount
}
let netPay = calculateNetPay(grossPay,overTimePay,deductionAmount)
console.log("Net Pay: ", netPay)

// to get the bonus according the performance
let performanceScore = 7
function calculateBonus(performanceScore){
    let bonusAmount = 0
    if(performanceScore >= 8){
        bonusAmount = 1000
    }else if(performanceScore >= 6){
        bonusAmount = 5000
    }else if(performanceScore >= 4){
        bonusAmount = 2500
    }else{
        bonusAmount = 0
    }
    return bonusAmount
}
let bonus = calculateBonus(performanceScore)
console.log(bonus)

// To generate the payStub
function generatePayStub(employeeName,hourlyRate,hoursWorked,overTimePay,grossPay,deductionAmount,netPay,bonus){
    let payStub = "Pay Stub For " + employeeName + "\n" + "Hourly Rate: " + hourlyRate + "\n" + "Hours Worked: " + hoursWorked
    + "\n" + "Overtime Pay: " + overTimePay + "\n" + "Gross Pay: " + grossPay + "\n" + "Deduction: " + deductionAmount +
    "\n" + "Net Pay: " + netPay + "\n" + "Bonus: " + bonus
    return payStub
}
let payStubs = generatePayStub("Rahul", hourlyRate,hoursWorked,overTimePay,grossPay,deductionAmount,netPay,bonus)
console.log(payStubs)