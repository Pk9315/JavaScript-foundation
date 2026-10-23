// // 1.1: Print Numbers from 100 to 120 using for loops.
// for(let i = 100; i <=120; i++){
//     console.log(i)
// }

// // 1.2: Print Repeating Numbers using for loops
// let numberPattarn = ""
// for(let i = 1; i <= 4; i++){
//     numberPattarn = numberPattarn + "9"
//     console.log(numberPattarn)
// }

// // 1.3: Print Repeating Characters using for loops.
// let alphaPattarn = ""
// for(let i=1; i<=5; i++){
//     alphaPattarn = alphaPattarn + "z"
//     console.log(alphaPattarn)
// }

// // 1.4: Print Repeating Symbols using for loops.
// let starPattarn = ""
// for(let i = 1; i<=5; i++){
//     starPattarn = starPattarn + "*"
//     console.log(starPattarn)
// }

// // 1.5: Print Number Patterns using for loops.
// let numbersPattarn = ""
// for(let i = 1; i <= 9; i++){
//     numbersPattarn +=  + i
//     console.log(numbersPattarn)
// }

// // 1.6: Print Table of 5 using for loops.
// for(let i = 1; i <= 10; i++){
//     let result = i * 5
//     console.log("5 * " + i + " = " + result)
// }

// // 1.7: Print Squares of Numbers using for loops.
// for(let i = 21; i <= 25; i++){
//     let result = i * i
//     console.log(i + "*" + i + " = " + result)
// }

// 11. Print Numbers in an Increasing Sequence (1, 12, 123, 1234, 12345)
// let numbersPattarn = ""
// for(let i = 1; i <= 5; i++){
//     numbersPattarn += i
//     console.log(numbersPattarn)
// }

// 12. Print Repeated Numbers per Row (Same Number Repeated)

for(let i = 1; i <= 5; i++){
    let numbers = ""
    for(let j = 1; j <= i; j++){
        numbers = numbers + i
    }
    console.log(numbers)
}