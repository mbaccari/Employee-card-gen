const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/Questions');

const Intern = require('./lib/Intern');

const Manager = require('./lib/Manager');

const Engineer = require('./lib/Engineer');

// Role templates
const template = require('./src/page-template')

const employees = [];

const createCompany = function() {

    createManager();

    function createManager() {
        // handle questions to create new manager object
        inquirer.prompt(questions.managerQuestions)
        .then(function (answer) {
            let newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNum);
            employees.push(newManager);
            console.log(employees);

            createTeam();
        })
    }

    function createTeam(){

        // prompt what member type to make next
        inquirer.prompt(
            {message: "What next?",
            name: "role",
            type: "list",
            choices: ["New engineer", "New intern", "I'm done"]}
        ).then( (userChoice) => {

            switch (userChoice.role) {
                case "New engineer":
                    createEngineer();
                    break;
                case "New intern":
                    createIntern();
                    break;
                default: 
                    populate();
                    ()=>{
                        
        const endTags = 
        `
</div>
</body>
</html>`
        fs.appendFile("cards.html", endTags,()=>console.log("Your cards are ready"))
                    }
                    
            }

        });

    }
    

    function createEngineer(){
        inquirer.prompt(questions.engineerQuestions)
        .then((answers) => {
            let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            let role = newEngineer.getRole();
            employees.push(newEngineer);
            console.log(newEngineer);
            createTeam()
            }
        )

    };

    function createIntern(){
        inquirer.prompt(questions.internQuestions)
        .then((answers) => {
            let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(newIntern);
            console.log(newIntern);
            createTeam();
            }
        )
    }

    function populate() {
        employees.forEach((emp) => {
            if(emp.getRole() === "Manager") {
                let tempManager = template.generateManager(emp);
                fs.appendFile("cards.html", tempManager, () => {
                    console.log("manager created")
                });
                console.log("all done populating")
            } else if(emp.getRole() === "Intern") {
                let tempIntern = template.generateIntern(emp);
                fs.appendFile("cards.html", tempIntern, () => {
                    console.log("Intern created")
                });
                console.log("all done populating")
            } else if(emp.getRole() === "Engineer") {
                let tempEngineer = template.generateEngineer(emp);
                fs.appendFile("cards.html", tempEngineer, () => {
                    console.log("Engineer created")
                });
                console.log("all done populating")
            }
        });

        console.log(employees)

    }

}

createCompany();

