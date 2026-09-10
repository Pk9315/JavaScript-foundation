let salary = 50000
let sideHustles = 10000
let groceries = 5000
let utilities = 2000
let rent = 20000
let transportation = 3000

// totalIncome by adding(salary,sideHustles)
let totalIncome = salary + sideHustles

// totalExpense by adding (rent,utilities,groceries,transportation)
let totalExpense = groceries + rent + transportation + utilities

// budget surplus and deficit by substracting (totalIncome and totalExpense)
let budgetSurplusDeficit = totalIncome - totalExpense

// check the surplus and deficit by compare with positive and negative (positive means Surplus) (negative means deficit)
if(budgetSurplusDeficit >= 0){
    console.log("Budget Surplus/Deficit: ", budgetSurplusDeficit)
}else{
    console.log("Budget surplus/Deficit: ", budgetSurplusDeficit)
}

// check budgetSurplusDeficit to check do you enough budget to define a budgetStatus
let budgetStatus = ""
if(budgetSurplusDeficit >= 0){
    budgetStatus = "congratulation! you have a budget surplus"
}else{
    budgetStatus = "Opps! you have a budget deficit. consider reducing expense or increasing income"
}

let spendingInsights = ""
if(totalExpense <= 10000){
    spendingInsights = "Great Job! You have maintained a low expense level"
}else if(totalExpense >= 10000 && totalExpense < 20000){
    spendingInsights = "your expense are moderate. Look for opportunities to reduce unnecessary spending."
}else if(totalExpense >= 20000 && totalExpense <= 30000){
    spendingInsights = "Your expenses are on the higher side.Consider creating a more detailed budget to manage your spending."
}else{
    spendingInsights = "Your expense are quite high. it is essiential to analyize your spending habits and make necessary adjustments."
}

// budget tips
let budgetTips = ""
if(budgetSurplusDeficit >= 10000){
    budgetTips = "You have significant budget surplus. consider allocating the surplus towards saving the debt repayment"
}else if(budgetSurplusDeficit < 10000 && budgetSurplusDeficit >= -10000){
    budgetTips = "Your budget is relatively balanced. Focus on maintaining your current financial habits"
}else{
    budgetTips = "You have a budget deficit. Evaluate your expense and identify areas where you can cut back"
}

console.log("Montly Budget Analysis Report")
console.log("===============================")
console.log("Total Income: ", totalIncome)
console.log("Total Expense: ", totalExpense)
console.log("Budget Surplus/Deficit: ", budgetSurplusDeficit)
console.log("==============================================")
console.log("Budget Status: ", budgetStatus)
console.log("===============================================")
console.log("Spending Insights: ", spendingInsights)
console.log("===============================================")
console.log("Budget Management Tips: ", budgetTips)