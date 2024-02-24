// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "TITLE: What is the title name of your project?",
    "DESCRIPTION: Provide a short description explaining the what, why, and how of your project: ",
    "INSTALLATION: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: ",
    "USAGE: Provide instructions and examples for usage: ",
    "LICENSE: LICENSE STUFF HERE",
    "CONTRIBUTING: If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so: ",
    "TESTS: Go the extra mile and write tests for your application. Then provide examples on how to run them here: ",
    "QUESTIONS: What is your GitHub username: ",
    "QUESTIONS: What is your email address: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installation',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usage',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'license',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'contributing',
            },
            {
                type: 'input',
                message: questions[6],
                name: 'tests',
            },
            {
                type: 'input',
                message: questions[7],
                name: 'github',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((results) => {
            console.log(results);
            writeToFile("README.md", JSON.stringify(results));
        })
};

// Function call to initialize app
init();
