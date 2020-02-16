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

function writeToFile(data) {
    fs.writeFileSync(`${data.username}.pdf`, generatePDF.generateHTML);
}



function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile(data);
    });
}
init();
