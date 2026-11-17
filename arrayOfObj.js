// Create an array of objects containing 3 employees. Each employee should have a name, age, and salary. Print the name of the second employee.
const employee = [
    {
        name: "Vijay",
        age: 24,
        salary: 20000
    },
    {
        name: "Rohit",
        age: 25,
        salary: 50000
    },
    {
        name: "Pritam",
        age: 25,
        salary: 13000
    },
]
console.log(employee[1].name)

// Print the salary of the third employee.
console.log(employee[2].salary)

// Print the names of all three employees using their array indexes.
console.log(employee[0].name)
console.log(employee[1].name)
console.log(employee[2].name)

// Find the total salary of all three employees.
function calculateTotalSalary(employees){
    let sumOfSalary = 0
    for(let i = 0; i < employees.length; i++){
        sumOfSalary += employees[i].salary
    }
    return sumOfSalary
}
console.log(calculateTotalSalary(employee))

// Find the employee who has the highest salary and print their name.
function calculateHighestSalary(emp){
    let highestSalary = emp[0].salary
    let employeeName = emp[0].name
    for(let i = 1; i <emp.length; i++){
        if(emp[i].salary > highestSalary){
            highestSalary = emp[i].salary
            employeeName = emp[i].name
        }
    }
    return employeeName
}
console.log(calculateHighestSalary(employee))

// Print the names of employees whose age is greater than 24.
function printEmployee(employeeAge){
    for(let i = 0; i < employeeAge.length; i++){
        if(employeeAge[i].age > 24){
            console.log(employeeAge[i].name)
        }
    }
}
printEmployee(employee)

// Calculate the total salary of employees whose age is greater than 24.
function calculateSalary(employeed){
    let totalSalary = 0
    for(let i = 0; i <employeed.length; i++){
        if(employeed[i].age > 24){
            totalSalary += employeed[i].salary
        }
    }
    return totalSalary
}
console.log(calculateSalary(employee))

// Find the names of employees whose salary is greater than 15,000.
function findSalaryGreater(empSalary){
    for(let i =0; i < empSalary.length; i++){
        if(empSalary[i].salary > 15000){
            console.log(empSalary[i].name)
        }
    }
}
findSalaryGreater(employee)

// Find the employee who has the lowest salary and print their name.
function calculateLowestSalary(employeeLowest){
    let lowestSalary = employeeLowest[0].salary
    let employeesName = employeeLowest[0].name
    for(let i = 1; i < employeeLowest.length; i++){
        if(employeeLowest[i].salary < lowestSalary ){
            lowestSalary = employeeLowest[i].salary
            employeesName = employeeLowest[i].name
        }
    }
    return employeesName
}
console.log(calculateLowestSalary(employee))

// Find the total number of employees whose salary is greater than 15,000.
function countTotalEmployee(employeeCount){
    let count = 0
    for(let i = 0; i < employeeCount.length; i++){
        if(employeeCount[i].salary > 15000){
            count++
        }
    }
    return count
}
console.log(countTotalEmployee(employee))

// Find the employee whose salary is greater than 15,000 and age is greater than 24. Print their name.
function findEmployeeWithNameAndSalary(employed){
    for(let i = 0; i < employed.length; i++){
        if(employed[i].salary > 15000 && employed[i].age > 24){
            console.log(employed[i].name)
        }
    }
}
findEmployeeWithNameAndSalary(employee)

// Find the total salary of employees whose age is greater than 24 AND salary is greater than 15,000.
function findTotalSalaryWithAge(employies){
    let totalSalary = 0
    for(let i = 0; i <employies.length; i++){
        if(employies[i].age > 24 && employies[i].salary > 15000){
            totalSalary += employies[i].salary
        }
    }
    return totalSalary
}
console.log(findTotalSalaryWithAge(employee))