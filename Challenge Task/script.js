// ===============================
// Employee Data
// ===============================

let employees = [
    {
        name: "Sahithi",
        id: 101,
        salary: 30000
    },
    {
        name: "Vinnela",
        id: 102,
        salary: 60000
    },
    {
        name: "Nikki",
        id: 103,
        salary: 45000
    }
];


// ===============================
// Challenge 1 - Total Employees
// ===============================

console.log("===== Challenge 1 =====");

console.log("Total Employees :", employees.length);


// ===============================
// Challenge 2 - Highest Salary
// ===============================

console.log("===== Challenge 2 =====");

let highestEmployee = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > highestEmployee.salary) {

        highestEmployee = employees[i];

    }

}

console.log("Highest Salary :", highestEmployee.salary);


// ===============================
// Challenge 3 - Lowest Salary
// ===============================

console.log("===== Challenge 3 =====");

let lowestEmployee = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary < lowestEmployee.salary) {

        lowestEmployee = employees[i];

    }

}

console.log("Lowest Salary :", lowestEmployee.salary);


// ===============================
// Challenge 4 - Total Salary
// ===============================

console.log("===== Challenge 4 =====");

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {

    totalSalary = totalSalary + employees[i].salary;

}

console.log("Total Salary :", totalSalary);


// ===============================
// Challenge 5 - Highest Salary Employee
// ===============================

console.log("===== Challenge 5 =====");

console.log("Employee Name :", highestEmployee.name);
console.log("Salary :", highestEmployee.salary);


// ===============================
// Challenge 6 - Lowest Salary Employee
// ===============================

console.log("===== Challenge 6 =====");

console.log("Employee Name :", lowestEmployee.name);
console.log("Salary :", lowestEmployee.salary);


// ===============================
// Challenge 7 - Salary Greater Than 40000
// ===============================

console.log("===== Challenge 7 =====");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 40000) {

        console.log(employees[i].name);

    }

}


// ===============================
// Challenge 8 - Search Employee by ID
// ===============================

console.log("===== Challenge 8 =====");

let searchId = 102;

let found = false;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].id === searchId) {

        console.log("Employee Found");
        console.log("Name :", employees[i].name);
        console.log("Salary :", employees[i].salary);

        found = true;

        break;

    }

}

if (!found) {

    console.log("Employee Not Found");

}


// ===============================
// Challenge 9 - Add Bonus
// ===============================

console.log("===== Challenge 9 =====");

let bonus = 5000;

for (let i = 0; i < employees.length; i++) {

    let newSalary = employees[i].salary + bonus;

    console.log(employees[i].name + " : " + newSalary);

}


// ===============================
// Challenge 10 - Employee Report
// ===============================

console.log("===== Challenge 10 =====");

for (let i = 0; i < employees.length; i++) {

    console.log(`
Employee Name : ${employees[i].name}
Employee ID   : ${employees[i].id}
Salary        : ${employees[i].salary}
`);

}