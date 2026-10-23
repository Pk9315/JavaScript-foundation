// 1. Print a Single Star (*)
// console.log("*")

// 2. Print Four Stars (****)
// console.log("****")

// 3. Print n Stars on Same Line
// let n = 5
// let parttarn = ""
// for(let i = 0; i <= n; i++){
//     parttarn = parttarn + "*"
// }
// console.log(parttarn)

// Print four stars on the same line.

// let pattarn = ""
// let n = 4
// for(let i = 1; i <= n; i++){
//     pattarn = pattarn + "*"
// }
// console.log(pattarn)

// Print n stars on the same line.

// let n = 7
// let parttarn = ""
// for(let i = 1; i <= n; i++){
//     parttarn = parttarn + "*"
// }
// console.log(parttarn)

// Print a square pattern using nested loops.
// let n = 4
// for(let i = 1; i <= n; i++){
//     let pattarn = ""
//     for(let j = 1; j <= n; j++){
//         pattarn = pattarn + "*"
//     }
//     console.log(pattarn)
// }

// 1.1: Print Numbers from 10 to 20 using for loops.
// for(let i = 10; i <= 20; i++){
//     console.log(i)
// }

// Increasing Triangle of Stars
// Agar n = 5 ho, toh ye pattern print karna hai:

// let n = 5
// for(let i = 1; i <= n; i++){
//     let pattarn= ""
//     for(let j = 0; j <= i-1; j++){
//         pattarn = pattarn + "*"
//     }
//     console.log(pattarn)
// }

// 1.2: Print Repeating Numbers using for loops
// let numberPattarn = ""
// for(let i = 1; i <= 4; i++){
//     numberPattarn = numberPattarn + "2"
//     console.log(numberPattarn)
// }

// Print a Right-Aligned Triangle of Stars
// let n = 5
// for(let i= 1; i <= n; i++){
//     let pattarn = ""
//     for(let j = 1; j<= n-i; j++){
//         pattarn = pattarn + " "     
//     }
//     for(let k = 1; k <= i; k++){
//         pattarn = pattarn + "*"
         
//     }
//    console.log(pattarn)

// }

// 1.3: Print Repeating Characters using for loops.
// let alphaPattarn = ""
// for(let i = 1; i <= 5; i++){
//     alphaPattarn = alphaPattarn + "b"
//     console.log(alphaPattarn)
// }

// 1.4: Print Number Patterns using for loops.
// let numberPattarn = ""
// for(let i = 1; i <= 6; i++){
//     numberPattarn += i
//     console.log(numberPattarn)
// }

// 1.5: Print Table of 3 using for loops.
// for(let i = 1; i <= 10; i++){
//     let result = i * 3
//     console.log("3 * " + i + " = " + result)
// }

// 1.6: Print Squares of Numbers using for loops.
// for(let i = 11; i <= 20; i++){
//     let result = i * i
//     console.log(i + "*" + i + " = " + result)
    
// }

// Question 7: Print Stars in Even Numbers
// for(let i = 1; i <= 5; i++){
//     let starts = i * 2
//     let pattarn = ""
//     for(let j = 1; j <= starts; j++){
//         pattarn += "*"
//     }
//     console.log(pattarn)
// }


// 8. Print Stars in Odd Numbers
// for(let i = 1; i <= 5; i++){
//      let stars = i * 2 -1
//     let pattarn = ""
//     for(let j = 1; j <= stars; j++){
//         pattarn += "*"
//     }
//     console.log(pattarn)
// }

// 9. Print a Centered Pyramid of Stars
// let n = 5
// for(let i = 0; i < n; i++){
//     let pattarn = ""
//     let stars = 2*i+ 1
//     for(let j=1; j <= n-i-1; j++){
//         pattarn = pattarn + " "
//     }
//     for(let k = 1; k <= stars; k++){
//         pattarn = pattarn + "*"
//     }
//     console.log(pattarn)
// }

// 10. Print Stars and Spaces Alternating (Stars and Blank Spaces)
// let n = 5
// for(let i = 1; i <= n; i++){
//     let pattarn =""
//     for(let j = 1; j <= n-i; j++){
//         pattarn = pattarn + "b"
//     }
//     for(let k = 1; k <= i; k++){
//         pattarn = pattarn + "*"
//         if(k < i){
//             pattarn = pattarn + "b"
//         }
//     }
//     console.log(pattarn)
// }
