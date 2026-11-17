// Write a function named printBookDetails that takes a book object as an argument. Book object has 4 properties title as “The Great Gatsby”, author as “F. Scott Fitzgerald”, 
// genre as “Fiction, Classic” and pages as 650.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction, Classic",
    pages: 650
}
function printBookDetails(books){
    if(books.pages >= 500){
        console.log(`The book ${books.title} is long`)
    }else{
        console.log(`The book ${books.title} is not long`)
    }
    books.cover = "Hard Cover"
    console.log(`The book ${books.title} has ${books.cover}`)
    if(books.cover === "Hard Cover" && books.pages > 300){
        console.log(`The book ${books.title} is heavy`)
    }else{
        console.log(`The book ${books.title} is not heavy`)
    }
}
printBookDetails(book)

// Exercise 2
const weatherData = {
    city : "Tokyo",
    temperature: "28 C",
    humidity: 70,
    weatherCondition: "Partly Cloudy"

}

function printWeatherData(weather){
    console.log(weather)
    const newWeatherData = {...weatherData}
    console.log("Is weatherData as same as weatherData?: ", newWeatherData === weatherData)

    if(newWeatherData.humidity > 65){
        newWeatherData.weatherCondition = "Cloudy"
    }
    console.log(newWeatherData)
}

printWeatherData(weatherData)

// Exercise 4:
const object1 = {
    title: "Animal Farm",
    author: "George Orwell",
    numberOfPage: 140
}
const object2 = {
    title: "Coming up for air",
    author: "George Orwell",
    numberOfPage: 210
}

function compareBooks(book1,book2){
    console.log(book1,book2)

    if(book1.pages > book2.pages){
        console.log(`${book1.title} is thicker than ${book2.title}`)
    }else{
        console.log(`${book2.title} is thicker than ${book1.title}`)
    }
    if(book1.author === book2.author){
        console.log(`Both books are written by the same author ${book1.author}`)
    }else{
        console.log("Both books are written by the different author")
    }
}
compareBooks(object1,object2)