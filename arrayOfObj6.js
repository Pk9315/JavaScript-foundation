const productsData = [
  {
    id: 1,
    productName: "Laptop",
    price2021: 19999,
    price2022: 18999,
    price2023: 15090,
    brand: "Dell",
    productRating: 5
  },
  {
    id: 2,
    productName: "Smartphone",
    price2021: 18999,
    price2022: 17999,
    price2023: 16999,
    brand: "Samsung",
    productRating: 4
  },
  {
    id: 3,
    productName: "Smartwatch",
    price2021: 36999,
    price2022: 32999,
    price2023: 29999,
    brand: "Apple",
    productRating: 4
  }
];

// 1.1 Write a function to take an id and print the details for that product. Run that function with three ids (1, 2 and 3) one by one and print 3 details cards. Details Card Format:

function printProductDetails(ids){
    let productDetails = getProductDetails(ids)
    console.log("===== Details Card for " + productDetails.productName+ " =====" + "\n" + "ID: " + productDetails.id 
        + "\n--------\nDetails: \n-------\n" + "Name: " + productDetails.productName + "\n" + "Price in 2021: " + productDetails.price2021 
        + "\n" + "Price in 2022: " + productDetails.price2022 + "\n" + "Price in 2023: " + productDetails.price2023 + "\n" +"Brand: " + productDetails.brand
        + "\n" + "Rating: " + productDetails.productRating
    )

}

function getProductDetails(ids){
    for(let i=0; i<productsData.length; i++){
        if(productsData[i].id === ids){
            return productsData[i]
        }
    }
}
printProductDetails(1)
printProductDetails(2)
printProductDetails(3)

// 1.2 Write a function to take a year price (ex: price2021) and a minimumPrice and 
// return an array of products data that have prices greater than 
// the minimumPrice for the given year price. 
// Demo run this function for two years and minimumPrice pair.

function printProductPrice(yearPrice,minimumPrice){
    let result = []
    for(let i=0; i<productsData.length; i++){
        if(productsData[i][yearPrice] > minimumPrice){
          result.push(productsData[i])
        }
    }
    return result
}
console.log(printProductPrice("price2021", 25000))
console.log(printProductPrice("price2023", 16000))


// calculate the totalPrice
for(let i=0; i<productsData.length; i++){
    let numberOfProductPrice = 3
    let totalPrice = productsData[i].price2021 + productsData[i].price2022 + productsData[i].price2023

    productsData[i].totalPrice = totalPrice

    let average = productsData[i].totalPrice / numberOfProductPrice
    productsData[i].avgPrice = average
}
console.log("Updated Array: ", productsData)

// 1.3 Write a function to take an averagePrice cutoff (12000) and print the products who are above that cutoff.

function calculateAveragePrice(cutoff){
    for(let i=0; i<productsData.length; i++){
        if(productsData[i].avgPrice > cutoff){
            console.log("Average Price of 3 years for " + productsData[i].productName + " is " + productsData[i].avgPrice)
        }
    }
}
calculateAveragePrice(12000)

// Write a function to take the entire array as data and return the product object that has highest averagePrice.
function getProductHighestAvgPrice(data){
    let productAveragePrice = data[0].avgPrice
    for(let i=0; i<productsData.length; i++){
        if(productsData[i].avgPrice > productAveragePrice){
            productAveragePrice = productsData[i]
        }
    }
    return productAveragePrice
}
console.log(getProductHighestAvgPrice(productsData))