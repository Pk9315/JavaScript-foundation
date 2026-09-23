// Define Variable for calorie burnt and intake for each day
let day1Burnt = 400
let day1Intake = 1500
let day2Burnt = 450
let day2Intake = 1800
let day3Burnt = 300
let day3Intake = 1600
let day4Burnt = 500
let day4Intake = 2000
let baseCalorieBurn = 1500

// Exercise 1: Calculate the surplus/deficit for each day
function calculateSurplusDeficit(day,dayBurnt,dayIntake,baseCaloriBurn){
    let daySurplus =  (dayBurnt - (dayIntake + baseCaloriBurn ))
   if(daySurplus > 0){
    return `${day}: Surplus: ${daySurplus}`
   }else{
    return `${day}: Deficit: ${daySurplus}`
   }
}
console.log("Exercise 1")
console.log("---------------------")
console.log(calculateSurplusDeficit("Day1: ", day1Burnt,day1Intake,baseCalorieBurn))
console.log(calculateSurplusDeficit("Day2: ", day2Burnt,day2Intake,baseCalorieBurn))
console.log(calculateSurplusDeficit("Day3: ", day3Burnt,day3Intake,baseCalorieBurn))
console.log(calculateSurplusDeficit("Day4: ", day4Burnt,day4Intake,baseCalorieBurn))

console.log("--------------------------------")
// Exercise 2: Calculate the total calories burnt for the week
let totalBurnt;
function calculateTotalBurnt(){
    totalBurnt = day1Burnt + day2Burnt + day3Burnt + day4Burnt
    return `Total Calories Burnt: ${totalBurnt}`
}
console.log("Exercise 2")
console.log("---------------------")
console.log(calculateTotalBurnt())
console.log("---------------------")
console.log("Exercise 3")
// calculate the total calorie intake for the week
console.log("----------------------")
let totalIntake;
function calculateTotalIntake(){
     totalIntake = day1Intake + day2Intake + day3Intake + day4Intake
    return `Total Calorie Intake: ${totalIntake}`
}
console.log(calculateTotalIntake())
console.log("----------------------------------------------")
console.log("Exercise 4")
// calculate total surplus for the week
console.log("---------------------------------")
 let totalSurplus;
function calculateTotalSurplus(){
    totalSurplus = totalBurnt - (totalIntake + (baseCalorieBurn*4))
    return `Total Surplus/Deficit: ${totalSurplus}`
}
console.log(calculateTotalSurplus())
console.log("-----------------------------")
console.log("Exercise 5")
// generate weekly summary
console.log("-----------------------------------")
function generateWeeklySummary(totalBurnt,totalIntake,totalSurplus){
    let standingGoalAwards = " "
    if(totalBurnt >= 1000){
        standingGoalAwards = "Congretulation! you have kept moving throughout.Keep it up"
    }else{
        standingGoalAwards = "No Awards Yet"
    }
   let weeklySummary = "Weekly Summary: " + "\n" + "Total Calorie Burnt: " + totalBurnt + "\n" + "Total Calorie Intake: " + totalIntake
   + "\n" + "Total Surplus/Deficit: " + totalSurplus + "\n" + "Standing Goal Awards: " + standingGoalAwards
   return weeklySummary
}
console.log(generateWeeklySummary(totalBurnt,totalIntake,totalSurplus))