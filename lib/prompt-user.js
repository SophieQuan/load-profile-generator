//require lib, package
const inquirer = require('inquirer');
//team contructor
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

//set employee profile data
let teamData = [];

//prompt user start with manager info
const promptUser = () => {
    console.log(`
        =======================================================================
        Welcome to Team Profile Generator, please enter your team's basic info!
        =======================================================================
    `)

    return inquirer
        .prompt([{
                type: "input",
                name: "name",
                message: "What is the manager's name?",
                validate: name => {
                    return name ? true : (console.log("Please enter manager's name!"), false)
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the manager's id?",
                validate: idInput => {
                    return idInput ? true : (console.log("Please enter employee's id!"), false)
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the manager's email?",
                validate: emailInput => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                    return valid ? true : (console.log("Please enter employee's email!"), false)
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the manager's office number?",
                validate: name => {
                    return name ? true : (console.log("Please enter the manager's office number!"), false)
                }
            }
        ])
        .then(managerProfile => {
            const { name, id, email, officeNumber } = managerProfile;
            const manager = new Manager(name, id, email, officeNumber);
            teamData.push(manager);
            console.log(manager);
        })
};

//if user choose to add team member, prompt these questions
const addTeamMember = () => {
    console.log(`
        =================
        Add a New Member
        =================
    `)
    return inquirer
        .prompt([{
                type: "list",
                name: "employeeRole",
                message: "Select team's role",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the team member's name?",
                validate: name => {
                    return name ? true : (console.log("Please enter manager's name!"), false)
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team member's id?",
                validate: idInput => {
                    return idInput ? true : (console.log("Please enter employee's id!"), false)
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team member's email?",
                validate: emailInput => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                    return valid ? true : (console.log("Please enter employee's email!"), false)
                }
            }, {
                type: "input",
                name: "gitHub",
                message: "What is the engineer team member's github username?",
                when: (engeneerInput) => engeneerInput.employeeRole === "Engineer",
                validate: username => {
                    return username ? true : (console.log("Please enter the engineer's github username"), false)
                }
            },
            {
                type: "input",
                name: "schoolName",
                message: "What is the intern team member's school name?",
                when: (schoolInput) => schoolInput.employeeRole === "Intern",
                validate: schoolName => {
                    return schoolName ? true : (console.log("Please enter the intern's school name!"), false)
                }
            },
            {
                type: "confirm",
                name: "confirmAddTeamMember",
                message: "Would you to add a new team member?",
                default: false
            }
        ])
        .then(teamProfile => {
            let { name, id, email, employeeRole, gitHub, schoolName, confirmAddTeamMember } = teamProfile;
            // console.log(teamProfile);
            let teamMember;
            if (employeeRole === "Engineer") {
                teamMember = new Engineer(name, id, email, gitHub);
                console.log(teamMember);
            } else if (employeeRole === "Intern") {
                teamMember = new Intern(name, id, email, schoolName);
                console.log(teamMember);
            }
            teamData.push(teamMember);

            console.table(teamData)

            if (confirmAddTeamMember) {
                console.table(teamData)
                return addTeamMember(teamData);

            } else {
                return teamData
            }
        })
}

module.exports = { promptUser, addTeamMember };