// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contributors.',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Select a license.',
        choices: [
            'GNU Affero General 3.0', 'GNU General 3.0',
            'GNU Lesser General 3.0', 'Mozilla 2.0',
            'Apache 2.0',  'MIT', 'Boost Software 1.0', 'The Unlicense', 'none'             
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`README.md`, data, (err) => err ? console.error(err) : console.log('success'));
}    

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        writeToFile(data);
    });
}

// Function call to initialize app
init();
