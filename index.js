const inquirer = require("inquirer");
const convertFactory = require(“electron-html-to”);
const fs = require("fs");
const generatePDF= require("./generatePDF")

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
    //when you prompt for the username, make an API to github to grab the information from the github user's API 
    .then(data => {

    });
}

//with the data you receive from github's API and inquirer prompts, send data to your generatePDF function 
//the generate PDF function will need to includte template literals to contact what you are sending from data 
//template literals are the ${variable} 

//this needs to be commented out, you will need thsi in order to send the html you generate to the PDF converter 
const html = generatePDF(data)
var conversion = convertFactory({
    converterPath: convertFactory.converters.PDF
  });
  
  conversion({ html: htmlDone }, function(err, result) {
    if (err) {
      return console.error(err);
    }
init();
