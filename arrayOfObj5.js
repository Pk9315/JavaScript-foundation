const studentData = [
 { studentName: "John", rollNo: 201, science: 88, history: 75, geography: 90 },
 { studentName: "Alice", rollNo: 202, science: 92, history: 85, geography: 88 },
 { studentName: "Bob", rollNo: 203, science: 78, history: 89, geography: 91 }
];

// 1.1 Write a function to take a rollNo and print the report card for that student. 
// Run that function with three rollNos (201, 202 and 203) one by one and print 3 report cards. 
// Report Card Format:

function getReportCard(rollNo){
    let studentCard = printReportByRollno(rollNo)
    console.log("===== Report Card for " + studentCard.studentName + " =====" + "\n" + "Roll No: "
        + studentCard.rollNo + "\n----------\nMarks:\n-----\n" + "Science: " + studentCard.science + "\n" +
        "History: " + studentCard.history + "\n" + "Geography: " + studentCard.geography + "\n----- ----- ----"

    )
}

function printReportByRollno(rollNo){
    for(let i=0; i<studentData.length; i++){
       if(studentData[i].rollNo === rollNo){
        return studentData[i]
       }
    }
}
getReportCard(201)
getReportCard(202)
getReportCard(203)

// 1.2 Write a function to take a subjectName and a cutOff and return an array of students data that passes that cut off for the given subject. Demo run this function for three subjects and cut off pair
function getStudentDateCutOff(subjectName,cutOff){
    let result = []
    for(let i=0; i<studentData.length; i++){
        if(studentData[i][subjectName] > cutOff){
            result.push(studentData[i])
           
        }
    }
     return result
}
console.log(getStudentDateCutOff("science", 80))
console.log(getStudentDateCutOff("history", 90))
console.log(getStudentDateCutOff("geography", 90))

for(let i=0; i<studentData.length; i++){
    let numberOfSubject = 3
    let totalMarks = studentData[i].geography + studentData[i].science + studentData[i].history
    studentData[i].totalMarks = totalMarks

    let average = studentData[i].totalMarks/numberOfSubject
    studentData[i].avgMarks = average
}
console.log("Updated Array: ", studentData)


// 1.3 Write a function to take an averageMarks cutoff (82) and print the students who are above that cutoff.
function getAverageMarks(avgMarksCutoff){
    for(let i = 0; i<studentData.length; i++){
        if(studentData[i].avgMarks > avgMarksCutoff){
           console.log(studentData[i].studentName + "has average marks " + studentData[i].avgMarks)
        }
    }
}
(getAverageMarks(82))

// 1.4 Write a function to take the entire array as data and return the student object that has highest averageMarks.

function getHighestAverageMarks(data){
    let highestMarks = data[0].avgMarks
    for(let i=1; i<data.length; i++){
        if(data[i].avgMarks > highestMarks){
            highestMarks = data[i].avgMarks
        }
    }
    return highestMarks
}
console.log(getHighestAverageMarks(studentData))