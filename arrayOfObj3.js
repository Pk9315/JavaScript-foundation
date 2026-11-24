// Exercise 1

// Here's a table with the calories intake of each meal from Monday to Saturday (6 days of week)

const foodTracker = [
    {
        day: "Monday",
        breakfast: 300,
        lunch: 300,
        snacks: 150,
        dinner: 500,
    },
    {
        day: "Tuesday",
        breakfast: 250,
        lunch: 450,
        snacks: 200,
        dinner: 550,
    },
    {
        day: "wednesday",
        breakfast: 350,
        lunch: 550,
        snacks: 100,
        dinner: 700,
    },
    {
        day: "Thursday",
        breakfast: 400,
        lunch: 600,
        snacks: 180,
        dinner: 650
    },
    {
        day: "Friday",
        breakfast: 280,
        lunch: 480,
        snacks: 120,
        dinner: 580,
    },
    {
        day: "Saturday",
        breakfast: 320,
        lunch: 520,
        snacks: 160,
        dinner: 620
    }
]

// Print the foodTracker to the console in the following format using for-loops.
for(let i=0; i<foodTracker.length; i++){
    console.log("Day: " + foodTracker[i].day + "\n" + "Breakfast: " + foodTracker[i].breakfast + "\n" 
        + "Lunch: " + foodTracker[i].lunch + "\n" + "Snacks: " + foodTracker[i].snacks + "\n" + "Dinner: " + foodTracker[i].dinner
    )
}

// 1.2 Use for-loops to add the calories of mid afternoon snack for every day. Here are the calories given in an array.

const midAfternoonCalories = [100, 120, 105, 110, 100, 130]

// Print the updated foodTracker to the console.

for(let i=0; i<foodTracker.length; i++){
    foodTracker[i].midAfternoon = midAfternoonCalories[i]
    console.log(foodTracker[i])
}

// 2.1 Convert this table to an object first and print it
const sunday = {
    day: "Sunday",
    breakfast: 370,
    lunch: 430,
    snacks: 140,
    dinner: 530,
    midAfternoon: 150,
}

// 2.2 Add Sunday’s data to our foodTracker and print the whole array of objects once.
foodTracker.push(sunday)
console.log(foodTracker)

// 2.3 Add a field totalCalorie to every object in the array. Calculate the total calorie for each day and update the field with it. Then print the updated array.
for(let i=0; i<foodTracker.length; i++){
    let totalCalorie = foodTracker[i].breakfast + foodTracker[i].lunch + foodTracker[i].dinner + foodTracker[i].snacks + foodTracker[i].midAfternoon 

    foodTracker[i].totalCalorie = totalCalorie
    console.log(foodTracker[i])
}

// 2.4 Using the total calorie field, now calculate the average calorie for each day.  Add this field avgCalorie to each object in the array. Print the updated array.

for(let i=0; i<foodTracker.length; i++){
    let numberOfCalorie = 5
    let average = foodTracker[i].totalCalorie / numberOfCalorie
    foodTracker[i].avgCalorie = average
    console.log(foodTracker[i])
}

// Create a calorie intake card for each day. Calculate calorie sufficiency/insufficiency for each day based on following condition:

function calculateTotalCalorieCard(calorie){
    console.log("===== Calorie card for " + calorie.day + " =====" + "\n" + "Breakfast: " + calorie.breakfast + "\n" + 
        "Lunch: " + calorie.lunch + "\n" + "Snacks: " + calorie.snacks + "\n" + "Dinner: " + calorie.dinner + "\n" + "Mid Afternoon: " + calorie.midAfternoon
        + "\n---------------\n" + "Total: " + calorie.totalCalorie + "\n" + "Average: " + calorie.avgCalorie + "\n" + "Comment: " + 
        getcalorieSuffAndInsuff(calorie.totalCalorie)
    )
}

function getcalorieSuffAndInsuff(totalCal){
    if(totalCal <= 1550){
        return "Your calorie intake was within limits"
    }else {
        return "Your calorie intake was higher than recommended"
    }
}

for(let i=0; i<foodTracker.length; i++){
    calculateTotalCalorieCard(foodTracker[i])
}