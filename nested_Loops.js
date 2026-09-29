// Write a JavaScript program using nested for loops to print the numbers 1 2 3 for each value of the outer loop from 1 to 3.
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(j)
    }
}

// What will be the exact output of the following nested loop?
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){
        console.log(i,j)
    }
}
console.log("===============================")
// What will be the exact output of this nested for loop?
for(let i = 1; i <= 2; i++){
    for(let j = 1; j <= 4; j++){
        console.log(i, j)
    }
}
console.log("===========================")
// What will be the exact output of this nested for loop?
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 2; j++){
        console.log(j)
    }
}

// Without running the code, determine how many times console.log() will execute
console.log("===========================")
for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 3; j++){
        console.log(i,j)
    }
}

// Without running the code, determine how many times console.log() will execute.
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= i; j++){
        console.log(i,j)
    }
}
console.log("===============================")
// Without running the code, determine the values of j for each value of i.
for(let i = 1; i <= 4; i++){
    for(let j = 2; j <= i; j++){   
        console.log(i,j)
    }
}

console.log("=========================")
// for(let i = 2; i <= 4; i++){
//     for(let j = 1; j <= i - 1; j++){
//         console.log(i,j)
//     }
// }


for(let i = 2; i <= 5; i++){

    for(let j = 2; j <= i - 1; j++){

        console.log(i, j)

    }

}
console.log("=====================")

for(let i = 2; i <= 5; i++){
    for(let j = 2; j <= i - 1; j++){
        console.log(i,j)
    }
}

for(let wing = 1; wing <= 3; wing++){
    for(let floor = 1; floor <= 3; floor++){
        console.log("Wing: ", wing, "Floor: ", floor)
    }
}
console.log("====================")
for(let hotel = 1; hotel <= 3; hotel++){
    for(let floor = 1; floor <= hotel; floor++){
        console.log("Hotel: ", hotel, "Floor: ", floor)
    }
}
console.log("==============================")
for(let classNo = 1; classNo <= 3; classNo++){
    for(let bench = 1; bench <= classNo; bench++){
        console.log("Class No: ",classNo,"Bench: ", bench)
    }
}
console.log("===========================")
for(let team = 1; team <= 3; team++){
    for(let member = 1; member <= team + 1; member++){
        console.log("Team: ", team, "Member: ", member)
    }
}

console.log("===================")
for(let i = 1; i <= 4; i++){
    for(j = i; j <= 4; j++){
        console.log(i,j)
    }
}
console.log("===================")
for(let building = 1; building <= 4; building++){
    for(let floor = building; floor <= 4; floor++){
        console.log("Building: ", building, "Floor: ", floor)
    }
}
console.log("===========================")
for(let i = 1; i <= 4; i++){
    for(let j = i; j <= i+2; j++){
        console.log(i,j)
    }
}