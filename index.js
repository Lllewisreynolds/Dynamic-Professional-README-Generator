// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the your repository title? (Required)',
        //validate attribute used to check if user input has been provided
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('A repository title is required to begin creating your professional README.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your repository? (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('A description of the repository is a pre-requisite for any professional README.');
            return false;
          }
        }
        },
      //Different type deployed here as we first must check as to whether this particular application will require an installation process in the first place
    //   Requires a Boolean to progress
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Is there an installation process required to run this particular application?'
        hint: 'Are there any Node.js libraries requried for example?'
        },
      {
        type: 'input',
        name: 'installation',
        message: 'Please list any and all installation instructions required .',
        // 'when' function/boolean required as additional step based on confirmation of prior step
        when: ({ confirmInstallation }) => {
          if (confirmInstallation) {
            return true;
          } else {
            return false;
          }
        }
      },
      
      { //A further confirm
        type: 'confirm',
        name: 'confirmInstructions',
        message: 'Would you like to provide instructional information for ease of use when it comes to your application?'
      },
      { //'when' once again deployed to act as conditional
        type: 'input',
        name: 'instructions',
        message: 'Please list any applicable instructions you believe necessary for using your application. Descriptive images may be appended later for additional information.',
        when: ({ confirmInstructions }) => {
          if (confirmInstructions) {
            return true;
          } else {
            return false;
          }
        }
      },

      { //A further type of prompt used - checkbox to allow license choice from common options
        type: 'checkbox',
        // 'lienCe' because I'm British!
        name: 'licence',
        message: 'Please select a commonly-used licence from the options provided below.',
        choices: ['Academic Free License v3.0', 'Apache license 2.0',
        'Artistic license 2.0',	
        'Boost Software License 1.0',
        'BSD 2-clause "Simplified" license',	
        'BSD 3-clause "New" or "Revised" license',	
        'BSD 3-clause Clear license',
        'BSD 4-clause "Original" or "Old" license',	
        'BSD Zero-Clause license',
        'Creative Commons license family',	
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',	
        'Creative Commons Attribution ShareAlike 4.0',
        'Do What The F*ck You Want To Public License',	
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',	
        'Eclipse Public License 2.0',	
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU General Public License family',
        'GNU General Public License v2.0',	
        'GNU General Public License v3.0',
        'GNU Lesser General Public License family',	
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
       'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'MIT	MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License	PostgreSQL',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License'],

        validate: licenceSelected => {
          if (licenceSelected) {
            return true;
          } else {
            console.log('Please select a license.');
            return false;
          }
        }
      },
      
      {
        type: 'confirm',
        name: 'confirmContributorAccess',
        message: 'Will you allow other developers to contribute to this repository?'
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide a short guideline as to how other developers may contribute to your project',
        when: ({ confirmContributorAccess }) => {
          if (confirmContributorAccess) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTest',
        message: 'Is testing an available resource?'
      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please provide in short how users might test your application.',
        when: ({ confirmTest }) => {
          if (confirmTest) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: Username => {
          if (Username) {
            return true;
          } else {
            console.log('Please enter your GitHub username before progressing.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter your email before progressing.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Instructions are to be provided here in case anyone wishes to contact you regarding your application.',
        validate: (questionInstruction) => {
          if (questionInstruction) {
            return true;
          } else {
            return false;
          }
        }
      }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, error => {
          if (error) {
            return console.log('Sorry, an error occurred in the process of creating your README file - please see the following error: ' + error);
          }
        })
      }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
