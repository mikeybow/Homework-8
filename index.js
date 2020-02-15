const inquirer = require("inquirer");
const generatePDF = require("./generatePDF");
const fs = require("fs");

const questions = [
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ['green', 'blue', 'pink', 'red'],
        name: "favColor"
    },
    {
        type: "input",
        message: "Where are you from?",
        name: "location"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your GitHub?",
        name: "GitHub"
    }
];


function writeToFile(fileName, data) {

}


function init() {
    inquirer.prompt(questions)
    .then(data => {
        console.log(`https://www.google.com/maps/place/${data.location}`);
        console.log(`https://github.com/${data.GitHub}`);
        console.log(data.username);
    });
}
init();
