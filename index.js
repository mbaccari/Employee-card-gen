const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/Questions');

const Intern = require('./lib/Intern');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

const employees = [];

const createCompany = function() {

    createManager();

    function createManager() {
        inquirer.prompt(questions.managerQuestions)
        .then(
            // handle questions to create new manager object
            inquirer.prompt(questions.managerQuestions)
            .then(( ) => {
                let newManager = new Manager(this.name, this.id, this.email, this.office);
                employees.push(newManager);
            })
            
        )
        
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
            }
        }).then((choice) => {

            inquirer.prompt(choice)
            .then( () => {
                if(choice.github = null) {
                    createIntern()
                } else if(choice.school = null) {
                    createEngineer;
                }
            });

        })

    };

    function createEngineer(name, id, email, github){

        let newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer);
        console.log(employees);

        createTeam()
    };

    function createIntern(name, id, email, school){


        let newIntern = new Intern(name, id, email, school);
        employees.push(newIntern);
        console.log(employees);
    }

}

createCompany();

