
// Manager questions

const managerQuestions = [
    {message: "Please list team manager's name",
    name: name,
    type: "input"},

    {message: "Please enter team manager's id number",
    name: id,
    type: "input"},

    {message: "Please enter team manager's email",
    name: "email",
    type: "input"},
    
    {message: "Please enter team manager's office number",
    name: "officeNum"}];



// Engineer questions

const engineerQuestions = [
    {message: "Please list your engineer's name",
    name: name,
    type: "input"},

    {message: "Please enter your engineer's id number",
    name: 'id',
    type: "input"},

    {message: "Please enter your engineer's email",
    name: "email",
    type: "input"},
    
    {message: "Please enter your engineer's github username",
    name: "github",
    type: "input"}];




// Intern questions

const internQuestions = [
    {message: "Please list your intern's name",
    name: name,
    type: "input"},

    {message: "Please enter your intern's id number",
    name: 'id',
    type: "input"},

    {message: "Please enter your intern's email",
    name: "email",
    type: "input"},
    
    {message: "Please enter your intern's school",
    name: "school",
    type: "input"}];


module.exports = {
    internQuestions,
    engineerQuestions,
    managerQuestions
}