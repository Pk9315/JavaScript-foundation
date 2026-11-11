// Exercise 1
// Define an object 'recipe' with two properties, name and cuisine. Assign the value for name as “Pasta Carbonara”,  and value for cuisine as “Italian”.
const recipe = {
    name: "Pasta carbonara",
    cuisine: "Italian",
}

// 1.1 Console the 'name' property of the 'recipe' object.
console.log(recipe.name)

// 1.2 Console the 'cuisine' property of the 'recipe' object.
console.log(recipe.cuisine)

// 1.3 Change the value of 'name' 
// property of the 'recipe' object to ‘Bell Pepper Pizza’. Console the entire recipe object.

recipe.name = "Bell Peppar Pizza"
console.log(recipe.name)

// 1.4 Add one more property to the 'recipe' object, difficulty. 
// Assign the value for difficulty as “Intermediate”. Print the difficulty property to the console.
recipe.difficulty = "Intermediate"
console.log(recipe.difficulty)

// 1.5 Use for-in loop to print all properties of the 'recipe' object.
for(let recipes in recipe){
    console.log(recipes + ": " + recipe[recipes])
}

// Exercise 2:
// Define an object 'laptop' with three properties, model, isTouchScreen and screenSize.
//  Assign the values, model as “XPS 15”, isTouchScreen as true and screenSize as 15.6.
const laptop = {
    model: "XPS 15",
    isTouchScreen: true,
    screenSize: 15.6
}

// 2.1: Add a property brand to the ‘laptop’ object and assign it a value “Dell”. Print the brand  property to the console.
laptop.brand = "Dell"
console.log(laptop.brand)

// 2.2  Add a property, processor to the 'laptop' object and assign it a value 'Intel Core i7’. Print the processor property to the console.
laptop.processor = "Intel Core i7"
console.log(laptop)

// 2.3: Change the 'screenSize' property of the 'laptop object to 15.4 and print updated screenSize to the console.
laptop.screenSize = 15.4
console.log(laptop.screenSize)

// 2.4: Print all properties of the 'laptop' object using for-in loop.
for(let laptops in laptop){
    console.log(laptops + ": " + laptop[laptops])
}
