// 1.1 Convert the table given into an array of objects.
const matchScorer = [
    {
        name: "Virat",
        edenGardens: 72,
        wankhedeStadium: 88,
        ferozShahKotla: 45,
        chepauk: 74,
    },
    {
        name: "Rohit",
        edenGardens: 64,
        wankhedeStadium: 41,
        ferozShahKotla:68,
        chepauk: 34,
    },
    {
        name: "Shikhar",
        edenGardens: 54,
        wankhedeStadium: 38,
        ferozShahKotla: 72,
        chepauk: 44,
    },
    {
        name: "Rishabh",
        edenGardens: 22,
        wankhedeStadium: 27,
        ferozShahKotla: 34,
        chepauk: 51,
    }
]

// Print the scores to the console in the following format using for loops.
for(let i = 0; i<matchScorer.length; i++){
    console.log("Cricketer: ", matchScorer[i].name + "\n" + "Eden Gardens: " + matchScorer[i].edenGardens + "\n" + 
        "Wankhede Stadium: " + matchScorer[i].wankhedeStadium + "\n" + "Feroz Shah Stadium: " + matchScorer[i].ferozShahKotla + 
        "\n" + "Chepauk: " + matchScorer[i].chepauk
    )
}

// 1.2 Use for-loops to add the scores of Chinnaswamy Stadium for all cricketers. Here are the scores given in an array.
const chinnaswamyStadiumScores = [54, 82, 49, 45]
for(let i=0; i<matchScorer.length; i++){
    matchScorer[i].chinnaswamyStadium = chinnaswamyStadiumScores[i]
    console.log(matchScorer[i])
}

// 2.1 Convert this table to an object first and print it.
const rahulScorer = {
    name: "KL Rahul",
    edenGardens: 34,
    wankhedeStadium: 56,
    ferozShahKotla: 42,
    chepauk: 31,
    chinnaswamyStadium: 68
}

// 2.2 Add KL Rahul’s data to our cricketerScores and print the whole array of objects once.
matchScorer.push(rahulScorer)

// 2.3 Add a field totalScore to every object in the array. 
// Calculate the total score for each cricketer and update the field with it. 
// Then print the updated array.
 for(let i=0; i<matchScorer.length; i++){
    let totalScore = matchScorer[i].edenGardens + matchScorer[i].wankhedeStadium + matchScorer[i].ferozShahKotla + matchScorer[i].chepauk
        + matchScorer[i].chinnaswamyStadium
        matchScorer[i].totalScore = totalScore
        
}
    
console.log("Updated Array: ", matchScorer)


// 2.4 Using the total score field, now calculate the average score of the cricketer.  
// Add this field avgScore to each object in the array. Print the updated array.

for(let i=0; i<matchScorer.length; i++){
    let numberOfStadium = 5
    let average = matchScorer[i].totalScore/numberOfStadium

    matchScorer[i].avgScore = average
}
console.log("Updated Array with Average: ", matchScorer)


function performanceScoreCard(scoreCard){
    console.log("===== Score card for " + scoreCard.name + "=====" + "\n" + "Eden Gardens: " + scoreCard.edenGardens + "\n" +
        "Wankhede Stadium: " + scoreCard.wankhedeStadium + "\n" + "Feroz Shah Stadium: " + scoreCard.ferozShahKotla + 
        "\n" + "Chepauk: " + scoreCard.chepauk + "\n"+ "Chinnaswamy Stadium: " + scoreCard.chinnaswamyStadium + "\n---------\n" + "Total: " + scoreCard.totalScore + "\n" +
        "Average: " + scoreCard.avgScore + "\n" + "Performance: " + getPerformance(scoreCard.avgScore)
    )

}

function getPerformance(avg){
    if(avg >= 80){
        return "good"
    }else if(avg >= 60 && avg <= 79){
        return "Above Average"
    }else if(avg >= 45 && avg <= 59){
        return "Average"
    }else{
        return "Bad"
    }
}

for(let i=0; i<matchScorer.length; i++){
    performanceScoreCard(matchScorer[i])
}