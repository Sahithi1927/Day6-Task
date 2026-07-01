//Task 1 - Find Highest Salary
console.log("========== Task 1 ==========");

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

let highestSalary = employees[0];

for (let i = 1; i < employees.length; i++) {

    if (employees[i].salary > highestSalary.salary) {
        highestSalary = employees[i];
    }

}

console.log("Highest Salary :", highestSalary.salary);
console.log("Employee Name :", highestSalary.name);

//Task 2 - Find Employee by ID
console.log("========== Task 2 ==========");

let searchId = 103;

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

//Task 3 - Salary After Bonus
console.log("========== Task 3 ==========");

let bonus = 5000;

for (let i = 0; i < employees.length; i++) {

    let totalSalary = employees[i].salary + bonus;

    console.log(employees[i].name + " : " + totalSalary);

}

//Task 4 - Experience Check
console.log("========== Task 4 ==========");

let employeeExperience = [

    {
        name: "Sahithi",
        experience: 2
    },

    {
        name: "Vinnela",
        experience: 7
    },

    {
        name: "Nikki",
        experience: 5
    }

];

for (let i = 0; i < employeeExperience.length; i++) {

    if (employeeExperience[i].experience >= 5) {

        console.log(employeeExperience[i].name + " - Senior Employee");

    }

    else {

        console.log(employeeExperience[i].name + " - Junior Employee");

    }

}

//Task 5 - Display Employee Names
console.log("========== Task 5 ==========");

for (let i = 0; i < employees.length; i++) {

    console.log(employees[i].name);

}

//Task 6 - Display Employee IDs
console.log("========== Task 6 ==========");

for (let i = 0; i < employees.length; i++) {

    console.log(employees[i].id);

}

//Task 7 - Total Salary
console.log("========== Task 7 ==========");

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {

    totalSalary = totalSalary + employees[i].salary;

}

console.log("Total Salary :", totalSalary);

//Task 8 - Salary Greater Than 40000
console.log("========== Task 8 ==========");

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > 40000) {

        console.log(employees[i].name);

    }

}

//Task 9 - Increase Salary
console.log("========== Task 9 ==========");

for (let i = 0; i < employees.length; i++) {

    employees[i].salary = employees[i].salary + 5000;

    console.log(employees[i].name + " : " + employees[i].salary);

}

//Task 10 - Employee Report
console.log("========== Task 10 ==========");

for (let i = 0; i < employees.length; i++) {

    console.log(`
Employee Name : ${employees[i].name}
Employee ID : ${employees[i].id}
Salary : ${employees[i].salary}
`);

}