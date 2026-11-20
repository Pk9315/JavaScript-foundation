// Convert this table into array of object
const studentDetails = [
    {
        name: "Rahul",
        rollNo: 101,
        hindi: 80,
        english: 75,
        maths: 90,
        computer: 88,
    },
    {
        name: "Amit",
        rollNo: 102,
        hindi: 85,
        english: 70,
        maths: 95,
        computer: 92,
    },
    {
        name: "Priya",
        rollNo: 103,
        hindi: 78,
        english: 92,
        maths: 87,
        computer: 95,
    }
]
// Print the StudentDetails to the console in the following format
for(let i = 0; i < studentDetails.length; i++){
    console.log("Name: " + studentDetails[i].name + "\n" + "Roll No: " + studentDetails[i].rollNo + "\n" + "Hindi: " + studentDetails[i].hindi + "\n" +
        "English: " + studentDetails[i].english + "\n" + "Maths: " + studentDetails[i].maths + "\n" + "Computer: " + studentDetails[i].computer
    )
}

// Add one more subject science to the above array using a for loop
function addScienceSubject(){
    let marksForScience = [82,90,88]
    for(let i = 0; i < studentDetails.length; i++){
        studentDetails[i].science = marksForScience[i]
        console.log(studentDetails[i])
    }
    
}
addScienceSubject()

// Add another student Data to the existing studentDetails
const kaveriData = 
    {
        name: "Kaveri",
        rollNo: 104,
        hindi: 84,
        english: 88,
        maths: 78,
        computer: 90,
        science: 86
    }

studentDetails.push(kaveriData)
console.log(studentDetails)

for(let i = 0; i < studentDetails.length; i++){
    let totalMarks = studentDetails[i].hindi + studentDetails[i].english + studentDetails[i].maths + studentDetails[i].computer + studentDetails[i].science

    studentDetails[i].totalMarks = totalMarks
    console.log(studentDetails[i])
}

for(let i = 0; i < studentDetails.length; i++){
    let numberOfStudent = 5
    let avgMarks = studentDetails[i].totalMarks/numberOfStudent
    
    studentDetails[i].avgMarks = avgMarks
    console.log(studentDetails[i])
}

function generateStudentReportCard(student){
    console.log("===== Report Card For " + student.name + "===" + "\n" + "Roll No: " + student.rollNo
        + "\n"+ "-----\n" + "Marks: " + "\n------" + "\n" + "Hindi: " + student.hindi + "\n" + 
        "English: " + student.english + "\n" + "Maths: " + student.maths + "\n" + "Computer: " + student.computer
        + "\n" + "Science: " + student.science + "\n------" + "\n" + "Total: " + student.totalMarks + "\n" +
        "Average: " + student.avgMarks + "\n" + "Grade: " + getGrade(student.avgMarks) + "\n"  
    )
}

function getGrade(avg){
    if(avg >= 90){
        return "A"
    }else if(avg >= 80 && avg < 90){
        return "B"
    }else if(avg >= 70 && avg <= 79){
        return "C"
    }else if(avg >= 60 && avg <= 69){
        return "D"
    }else if(avg >= 50 && avg <= 59){
        return "E"
    }else{
        return "F"
    }
}
for(let i = 0; i <studentDetails.length; i++){
    generateStudentReportCard(studentDetails[i])
}