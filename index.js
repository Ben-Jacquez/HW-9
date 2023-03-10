// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter Project Name?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter Project Description",
        name: "description",
    },
    {
        type: "input",
        message: "Enter Steps To Install Project",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter Instructions And Exampless For Usage",
        name: "usage",
    },
    {
        type: "input",
        message: "How Could Other Developers Contribute?",
        name: "contributing",
    },
    {
        type: "input",
        message: "Enter Examples Of Tests If Applicable",
        name: "tests",
    },
    {
        type: "list",
        message: "Which License Will You Use?",
        choices: ["MIT", "GPLv2", "Skip",],
        name: "license",
    },
    {
        type: "input",
        message: "Enter Your Github Username",
        name: "github",
    },
    {
        type: "input",
        message: "Enter Your Email",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        return console.log(err);
        }
        console.log("README Generated!")
    }
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        const answers = generateMarkdown(response);
        writeToFile(fileName, generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
