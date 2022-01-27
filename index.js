const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');

const employees = [];


// ask for Manager info

    // prompt user for the data

        // then create and store manager object
        employees.push(new Manager())

// ask for Engineer info

    // prompt user for the data

        // then create and store engineer data


// ask for Intern info

    // prompt user for the data

        // then create and store  intern data


// ask for Whats next

    // add employee, add intern, be done

        // if add engineer => ask for engineer info

        // if add intern => ask for intern info

        // if done => be done
    
// use info to build html page



const managerQuestions =
    {message: "Enter this members office number",
    name: "office",
    type: "input"};


function newEmployee() {
    inquirer.prompt([
        { message: "Enter team members name",
        name: "name",
        type: "input"},

        {message: "Enter member id number",
        name: "id",
        type: "input"},
        
        {message: "Select members role",
        choices:["Manager", "Engineer", "Intern"],
        name: "role",
        type: "list"}
    ]).then(function(employee) {

            inquirer.prompt(employee.role){

            }
        
    })
}