function numberDivisible(n,m){
    let output = " "
    for(let i = 1; i <= n; i++){
       output = output + i
       if(i % m === 0){
        output = output + '-'
       }
    }
    console.log(output)
}
numberDivisible(9,4)

function numberDivisibleByM(n,m){
    let numberSpace = " "
    let numDivisible = 0
    let numNotDivisible = 0
    for(let i = 1; i <= n; i++){
        numberSpace = numberSpace + i
        if(i % m === 0){
            numDivisible = numberSpace + " "
        }
        if(i % m !== 0){
            numNotDivisible = numberSpace + " "
        }
    }
    console.log(numDivisible)
    console.log(numNotDivisible)
}
numberDivisibleByM(20,6)