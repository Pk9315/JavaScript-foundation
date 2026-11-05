// Create an array named movies containing 4 movie names. Print the first and third movie.
// let movies = ["drishyam 3", "jailar 2", "raid 2", "narsibhma"]
// console.log(movies[0])
// console.log(movies[2])

// Update the second movie with a new movie name.

// movies[1] = "Pusha 2"
// console.log(movies)

// Print the total number of movies using the length property.

// console.log(movies.length)

// You have a list of your favourite citites. use the given array and perform the following tasks

let cities = ["New york", "London", "Tokyo"]

// Print the entire array of the cities
console.log(cities)

// Print the second city (index 1) in the array
console.log(cities[1])

// print the number of cities of cities in array
console.log(cities.length)

// print the last city in the array
console.log(cities[cities.length - 1])

// print the one city at a time using a for loop
for(let i = 0; i< cities.length; i++){
    console.log(cities[i])
}

// Add a new city to the list ---> Paris
cities.push("Paris")

// print the updated numbers of the cities in the array
console.log(cities.length)

// You have a list of your favourite books. Use the given array and perform the following tasks:
const favoriteBooks = ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Great Gatsby"];

// 1.1 Print the entire array of book titles.
console.log(favoriteBooks)

// 1.2 Print the second book title (index 1) in the array.
console.log(favoriteBooks[1])

// 1.3 Print the number of books in the array.
console.log(favoriteBooks.length)

// 1.4 Print the title of the last book in the array.
console.log(favoriteBooks[favoriteBooks.length - 1])

// 1.5 Print one book title at a time using a for loop.
for(let i = 0; i < favoriteBooks.length; i++){
    console.log(favoriteBooks[i])
}

// 1.6 Add a new book to the list, "Harry Potter and the Sorcerer's Stone" and then print the updated array.

favoriteBooks.push("Harry Potter and the Sorcerer's Stone")
console.log(favoriteBooks)

// 1.7 Print the updated number of books in the array.
console.log("updated number of books: ",favoriteBooks.length)

// You have a list of top music artists. Use the given array and perform the following tasks:
const topIndianArtists = ["Arijit Singh", "Neha Kakkar", "Badshah", "Shreya Ghoshal"];

// 1.1 Print the entire array of artist names.
console.log(topIndianArtists)

// 1.2 Print the third artist's name (index 2) in the array.
console.log(topIndianArtists[2])

// 1.3 Print the total number of artists in the array.
console.log(topIndianArtists.length)

// 1.4 Print the name of the last artist in the array.
console.log(topIndianArtists[topIndianArtists.length -1])

// 1.5 Print one artist's name at a time using a for loop.
for(let i = 0; i < topIndianArtists.length; i++){
    console.log(topIndianArtists[i])
}

// 1.6 Add a new artist to the list. "Amit Trivedi" and print the updated array of artists.
topIndianArtists.push("Amit Trivedi")
console.log(topIndianArtists)
// 1.7 Print the updated total number of artists in the array.
console.log("Updated array: ", topIndianArtists.length)