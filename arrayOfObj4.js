const studentsData = [
    {
        name: "Anu",
        rollNo: 101,
        hindi: 80, 
        english: 75,
        maths: 90
    },
    {
        name: "Priya",
        rollNo: 102,
        hindi: 85,
        english: 70,
        maths: 95
    },
    {
        name: "Ravi",
        rollNo: 103,
        hindi: 78,
        english: 82,
        maths: 87
    },
]
function printReportCard(rollNo){
    let student = getReportByRollNo(rollNo)
    console.log("====== Report card for " + student.name + " =======" + "\n" + "Roll No: " + student.rollNo
        + "\n------------\nMarks: " + "\n-------\n" + "Hindi: " + student.hindi + "\n" + "English: " + student.english
        + "\n" + "Maths: " + student.maths
     )
}

function getReportByRollNo(rollNo){
    for(let i=0; i<studentsData.length; i++){
        if(studentsData[i].rollNo === rollNo){
            return studentsData[i]
        }
    }
}
printReportCard(101)
printReportCard(102)
printReportCard(103)

function getStudentsDataCutoff(subjectName,cutoff){
    let result = []
    for(let i = 0; i<studentsData.length; i++){
        if(studentsData[i][subjectName] > cutoff){
            result.push(studentsData[i])
        }
    }
    return result
}
console.log("Student data with cutoff for hindi > 80")
console.log(getStudentsDataCutoff("hindi", 80))

console.log("Student data with cutoff for maths > 90")
console.log(getStudentsDataCutoff("maths", 90))

for(let i=0; i<studentsData.length; i++){
    let numOfSubject = 3
    let totalMarks = studentsData[i].hindi + studentsData[i].english + studentsData[i].maths

    studentsData[i].totalMarks = totalMarks

    let average = studentsData[i].totalMarks / numOfSubject
    studentsData[i].avgMarks = average
}
// console.log("Updated Array: ", studentsData)

function printStudentAboveAverage(avgCutoff){
    for(let i=0; i<studentsData.length; i++){
        if(studentsData[i].avgMarks > avgCutoff){
            console.log(studentsData[i].name + " has average marks" + studentsData[i].avgMarks)
        }
    }
}
printStudentAboveAverage(82)

function getHighestAverageMarks(data){
    let highestAverage = data[0].avgMarks
    for(let i=0; i<data.length; i++){
        if(data[i].avgMarks > highestAverage){
            highestAverage = data[i]
        }
    }
    return highestAverage

}
console.log(getHighestAverageMarks(studentsData))