// let goalAmount = 12000
// let currentSavingMonth1 = 3000
// let currentSavingMonth2 = 5000
// let currentSavingMonth3 = 8000

// let savingContributionMonth1 = 1000
// let savingContributionMonth2 = 1500
// let savingContributionMonth3 = 2000



// let totalCurrentSaving = currentSavingMonth1 + currentSavingMonth2 + currentSavingMonth3
// let totalSavingContribution = savingContributionMonth1 + savingContributionMonth2 + savingContributionMonth3

// let quarterlyGoalAmount = goalAmount / 4

// let percentageAchieved = (totalCurrentSaving / quarterlyGoalAmount) * 100

// let projectTimeline = ""
// if(percentageAchieved >= 100){
//     projectTimeline = "Congratulation! You have already achieved your quarterly saving goal"
// }else if(percentageAchieved >= 75){
//     projectTimeline = "At your current saving rate, you are on track to reach your quarterly goal by the end of the quarter"
// }else {
//     projectTimeline = "Based your current saving rate, it may take some additional time to reach your quarterly goal."
// }

// let savingTips = ""
// if(percentageAchieved >= 80){
//     savingTips = "Great Job!, you are making excellent progress towards your quarterly goal. keep up the good work!"
// }else if(percentageAchieved >= 50){
//     savingTips = "you are halfway there! try to find additional ways to save money and increase your saving rate"
// }else{
//     savingTips = "To reach your quarterly saving goal sooner, consider cutting back on non-essential express and finding opportunities to save more."
// }

// console.log("Quaterly Saving Report")
// console.log("Goal Amount: ", goalAmount)
// console.log("Quaterly Goal Amount: ", quarterlyGoalAmount)
// console.log("Total Current Saving: ", totalCurrentSaving)
// console.log("Total Saving Contribution: ", totalSavingContribution)
// console.log("Percentage Achieved: ", percentageAchieved)
// console.log("Project Timeline: ", projectTimeline)
// console.log("Saving Tips: ", savingTips)


// let rahulSalesTarget = 100
// let priyaSalesTarget = 200
// let amitSalesTarget = 150
// let rahulActualSales = 85
// let priyaActualSales = 180
// let amitActualSales = 120

// let rahulSalesPercentage = (rahulActualSales / rahulSalesTarget) * 100
// let priyaSalesPercentage = (priyaActualSales / priyaSalesTarget) * 100
// let amitSalesPercentage = (amitActualSales / amitSalesTarget) * 100

// let rahulPerformance = ""
// let rahulBonus;
// if(rahulSalesPercentage >= 90){
//     rahulPerformance = "High Performance"
//     rahulBonus = 0.2
// }else if(rahulSalesPercentage >= 70){
//     rahulPerformance = "Average Performance"
//     rahulBonus = 0.1
// }else{
//     rahulPerformance = "Low Performance"
//     rahulBonus = 0
// }

// let priyaPerformance = ""
// let priyaBonus;
// if(priyaSalesPercentage >= 90){
//     priyaPerformance = "High Performance"
//     priyaBonus = 0.2
// }else if(priyaSalesPercentage >= 70){
//     priyaPerformance = "Average Performance"
//     priyaBonus = 0.1
// }else{
//     priyaPerformance = "Low Performance"
//     priyaBonus = 0
// }

// let amitPerformance = ""
// let amitBonus;
// if(amitSalesPercentage >= 90){
//     amitPerformance = "High Performance"
//     amitBonus = 0.2
// }else if(amitSalesPercentage >= 70){
//     amitPerformance = "Average Performance"
//     amitBonus = 0.1
// }else{
//     amitPerformance = "Low Performance"
//     amitBonus = 0
// }

// let rahulBonusAmount = rahulActualSales * rahulBonus
// let priyaBonusAmount = priyaActualSales * priyaBonus
// let amitBonusAmount = amitActualSales * amitBonus

// console.log("Sales Report")
// console.log("Salesperson Name: Rahul")
// console.log("Sales Target: ", rahulSalesTarget)
// console.log("Unit Sold: ", rahulActualSales)
// console.log("Sales Percentage: ", rahulSalesPercentage)
// console.log("Performance category: ", rahulPerformance)
// console.log("Bonus Amount: ", rahulBonusAmount)

// console.log("============================================")

// console.log("Salesperson Name: Priya")
// console.log("Sales Target: ", priyaSalesTarget)
// console.log("Unit Sold: ", priyaActualSales)
// console.log("Sales Percentage: ", priyaSalesPercentage)
// console.log("Performance category: ", priyaPerformance)
// console.log("Bonus Amount: ", priyaBonusAmount)
// console.log("==============================================")
// console.log("Salesperson Name: Amit")
// console.log("Sales Target: ", amitSalesTarget)
// console.log("Unit Sold: ", amitActualSales)
// console.log("Sales Percentage: ", amitSalesPercentage)
// console.log("Performance category: ", amitPerformance)
// console.log("Bonus Amount: ", amitBonusAmount)


let day1Burnt = 400
let day2Burnt = 450
let day3Burnt = 300
let day4Burnt = 500
let day5Burnt = 350

let day1Intake = 1500
let day2Intake = 1800
let day3Intake = 1600
let day4Intake = 2000
let day5Intake = 1700

let baseCalorie = 1500

let day1Surplus = day1Burnt - (day1Intake + baseCalorie)
let day2Surplus = day2Burnt - (day2Intake + baseCalorie)
let day3Surplus = day3Burnt - (day3Intake + baseCalorie)
let day4Surplus = day4Burnt - (day4Intake + baseCalorie)
let day5Surplus = day5Burnt - (day5Intake + baseCalorie)

if(day1Surplus > 0){
    console.log("Day1: Surplus",day1Surplus, "surplus")
}else{
    console.log("Day1: Deficit", day1Surplus, "Deficit")
}

if(day2Surplus > 0){
    console.log("Day2: Surplus", day2Surplus, "Surplus")
}else{
    console.log("Day2: Deficit", day2Surplus, "Deficit")
}

if(day3Surplus > 0){
    console.log("Day3: Surplus", day3Surplus, "Surplus")
}else{
    console.log("Day3: Deficit", day3Surplus, "Deficit")
}

if(day4Surplus > 0){
    console.log("Day4: Surplus", day4Surplus, "Surplus")
}else{
    console.log("Day4: Deficit", day4Surplus, "Deficit")
}

if(day5Surplus > 0){
    console.log("Day5: Surplus", day5Surplus, "Surplus")
}else{
    console.log("Day5: Deficit", day5Surplus, "Deficit")
}

let totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt + day5Burnt
let totalIntake = day1Intake + day2Intake + day3Intake + day4Intake + day5Intake

let totalSurplus = totalBurnt - (totalIntake + (baseCalorie * 5))

let standingGoalAwards = ""

if(totalBurnt >= 1000){
    standingGoalAwards = "Congratulation! You have kept moving throughtout. Keep it up!"
}else {
    standingGoalAwards = "No Award Yet"
}
let weeklySummary = "\nWeekly Summary:\n" + standingGoalAwards;

console.log("Weekly Summary")
console.log("Total Calorie Burnt: ", totalBurnt)
console.log("Total Calorie Intake: ", totalIntake)
console.log("Total Surplus/Deficit: ", totalSurplus)

console.log("Awards: ")
console.log("Standing Goal Awards: ", standingGoalAwards)