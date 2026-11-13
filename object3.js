// Create a citizen object with three properties, name, age and city. Assign name as “Ajay”, age as 72 and city as “Indore”.

const citizen = {
    name: "Ajay",
    age: 72,
    city: "Indore"
}
// 1.1 Compare the 'age' property of the citizen object with 60 to check senior citizenship. If age is greater than equal to 60, 
// console a message in the format “{name} is a senior citizen.” If age is less than 60, 
// console a message in the format “{name} is not a senior citizen.”

if(citizen.age >= 60){
    console.log(`${citizen.name} is a senior citizen`)
}else{
    console.log(`${citizen.name} is not a senior citizen`)
}

// 1.2 Add a property sugarLevel to the citizen object. Assign the value “Normal” to it. 
// Print the sugar level to console in the format: “Sugar level for {name} is {sugarLevel}.”

citizen.sugarLevel = "Normal"
console.log(`Sugar level for ${citizen.name} is ${citizen.sugarLevel}`)

// 1.3 If the age is greater than or equal to 60 and the sugar level is normal, console a message in the format: 
// “{name} is fit to travel”. Otherwise print, “{name} is not fit to travel”.
if(citizen.age >= 60 && citizen.sugarLevel === "Normal"){
    console.log(`${citizen.name} is fit to travel`)
}else{
    console.log(`${citizen.name} is not fit to travel`)
}

// Exercise 2:
// Write a function releaseMovie that takes in a movie object. The movie object has properties title, 
// duration and isReleased. Assign name as “MI 7”, duration as 150 and isReleased as false.
const movie = {
    title: "MI 7",
    duration: 150,
    isReleased: false
}

function releaseMovie(movie){
    // 2.1 Print the movie object to console.
    console.log(movie)
    // 2.2 Create a new object newMovie and assign to it the movie object itself. 
    // Do an equality check if newMovie and movie are the same object or not and print 
    // the result to the console.
    const newMovie = {...movie}
    console.log("is newMovie same as movie?: ", newMovie == movie)

    if(newMovie.duration > 120){
        newMovie.isReleased = true
    }
    console.log(newMovie)
    
}
releaseMovie(movie)

// Exercise 3
const object1 = {
    title: "The Lost City",
    duration: 120,
}
const object2 = {
    title: "Murder Mystery 2",
    duration: 110
}

function movieDetails(movie1,movie2){
    if(movie1.duration > movie2.duration){
        return true
    }else{
        return false
    }
}
console.log(`${object1.title} longer than ${object2.title}: `, movieDetails(object1,object2))

// Exercise 4:
const student = {
    name: "Priya",
    age: 14,
    marks: 45,

}

function printStudentDetails(stu){
    // 4.1 Print the student object to the console.
    console.log(stu)
    // 4.2 If marks of the student is less than 60, then add a property isTopPerformer to the student object and assign the value false to it. 
    // Print isTopPerformer property to the console.
    if(stu.marks < 60){
        stu.isTopPerformer = false
    }
    console.log("Is the student a top performer: ", stu.isTopPerformer)

    if(stu.marks >= 40 && stu.marks < 60){
        stu.grade = "D"
    }
    console.log(stu)
}

printStudentDetails(student)