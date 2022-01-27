const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/Questions');

const intern = require('./lib/Intern');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const employees = [];

const createCompany = () => {
    function createManager() {
        inquirer.prompt(questions.managerQuestions)
        .then(
            // handle questions to create new manager object

            
        )
        
        createTeam();
    }

    function createTeam(){

        // prompt what member type to make next
        inquirer.prompt(
            {message: "What next?",
            name: "role",
            type: "list",
            choices: ["New engineer", "New intern", "I'm done"]}
        ).then( () => {
            if (this.role ==="New engineer") {
                return questions.engineerQuestions;
            } else if (this.role === "New Intern") {
                return questions.internQuestions;
            }else {
                // end program
            }
        }).then((choice) => {

            inquirer.prompt(choice)
            .then()

        })

    };

    function createEngineer(){

        let newEngineer = new Engineer()

        createTeam()
    };

    function createIntern(){


        let newIntern = new 

        createTeam()
    };

    function buildTeam(){
        // build the page
    };
}
// ask for Manager info

    // prompt user for the data

        // then create and store manager object
        // employees.push(new Manager())

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



const ManagerQuestions =
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

        const job = `${employee.role}Questions`;
        
        
    })
}

createCompany();