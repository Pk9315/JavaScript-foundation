// Create an object named car with the following properties: brand, model, year, and color.
const car = {
    brand: "Mahindra",
    model: "Scorpio S11",
    year: 2014,
    color: "Black",
}
console.log(car.brand)
console.log(car.model)
console.log(car.color)
console.log(car["year"])

car.color = "white"
console.log(car)

// use for-in loop to print all object properties value
for(let cars in car){
    console.log(cars + ": " + car[cars])
}

const citizen = {
    name: "Ramesh Kumar",
    age: 65,
    occupation: "Retired",
}
citizen.age = 68
console.log(citizen.age)

citizen.age = citizen.age + 2
console.log(citizen.age)

citizen.city = "Delhi"
for(let citizens in citizen){
    console.log(citizens + ": " + citizen[citizens])
}

// Define an object 'animal' with three properties, name, averageWeight and sound. Assign the value for name as “Lion”, 
// averageWeight as 190 and value for sound as “Roar”.
const animal = {
    name: "Lion",
    averageWeight: 190,
    sound: "Roar",
}

// 1.1 Console the 'name' property of the 'animal' object.
console.log(animal.name)

// 1.2 Console the 'averageWeight' property of the 'animal' object.
console.log(animal.averageWeight)

// 1.3 Console the 'sound' property of the 'animal' object.
console.log(animal.sound)
// 1.4 Change the value of averageWeight property of the 'animal' object to 210. Console the entire animal object.
animal.averageWeight = 210
console.log(animal.averageWeight)

// 1.5 Add one more property to the 'animal' object, diet. Assign the value for diet as “Carnivore”.
animal.diet = "Carnivore"
console.log(animal.diet)

// 1.6 Use for-in loop to print all properties of the 'animal' object.
for(let animals in animal){
    console.log(animals + ": " + animal[animals])
}

// Exercise 2:
// Define an object 'movie' with two properties, title and director.
//  Assign the values, title as “Inception” and director as “Christopher Nolan”.

const movie = {
    title: "Inception",
    director: "Christopher Nolan"
}

// 2.1: Add a property year to the ‘movie’ object and assign it a value 2010. Print the year property to the console.
movie.year = 2010
console.log(movie.year)

// 2.2  Add a property duration to the ‘movie’ object and assign it a value 154. Print the duration property to the console.
movie.duration = 154
console.log(movie.duration)

// 2.3: Change the 'duration' property of the 'movie' object to 148 and print updated duration to the console.
movie.duration = 148
console.log(movie.duration)

// 2.4: Add 1 to the 'year' property of the 'movie' object and print the updated year to the console.
movie.year = movie.year + 1
console.log(movie.year)

// 2.5: Print all properties of the 'movie' object using for-in loop.
for(let movies in movie){
    console.log(movies + ": " + movie[movies])
}