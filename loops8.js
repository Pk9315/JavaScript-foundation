// Print all even numbers from 1 to 20 using a for loop.
// for(let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// Print numbers from 10 to 1 using a while loop.
// let i = 10
// while(i >= 1){
//     console.log(i)
//     i--
// }

// function numberDivisible(n,m){
//      let output = ""
//     for(let i = 1; i <= n; i++){
//        output += i
//        if(i % m === 0 ){
//             output = output + "-"
//        } 
//     }
//     console.log(output)
// }
// numberDivisible(9,4)

// function numberDivisibleOrNot(n,m){
//     let divisibleByM = ""
//     let notDivisibleByM = ""
//     for(let i = 1; i <= n; i++){
//         if(i % m === 0){
//             divisibleByM  += i + " "
//         }else{
//             notDivisibleByM += i + " "
//         }
        
//     }
//     console.log(divisibleByM)
//     console.log(notDivisibleByM)
// }
// numberDivisibleOrNot(20,6)

// function printDivisibleNumbersBetween(p,n,m){
//     if(p < n && n < m){
//         for(let i = n; i <= m; i++){
//             if(i % p === 0){
//                 console.log(i)
//             }
//         }
//     }
// }
// printDivisibleNumbersBetween(3,5,15)


// function numberDivisible(n,m){
//     let number = ""
//     for(let i = 1; i <= n; i++){
//         number += i
//         if(i % m === 0){
//             number +=  "%"
//         }
//     }
//     console.log(number)
// }
// numberDivisible(20,5)

// function numberDivisibleOrNot(n,m){
//     let numberDivisible = ""
//     let numberNotDivisible = ""
//     for(let i = 10; i <= n; i++){
//         if(i % m === 0){
//             numberDivisible += i + " "
//         }else{
//             numberNotDivisible += i + " "
//         }
//     }
//     console.log(numberDivisible)
//     console.log(numberNotDivisible)
// }
// numberDivisibleOrNot(30,5)

function printEvenNumbersBetween(p,n,m){
    if(p>n && n < m){
        for(let i = p; i <= m; i++){
            if(i % 2 === 0){
                console.log(i)
            }
        }
        
    }
}
printEvenNumbersBetween(8,5,15)