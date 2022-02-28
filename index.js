//node modules
const fs = require('fs');
//page template
const generateTemplate = require('./src/generateTemplate');
//require lib 
const { promptUser, addTeamMember } = require('./lib/prompt-user');
const { writeFile, copyFile } = require('./lib/generate-site');

promptUser()
    .then(addTeamMember)
    .then(data => {
        return (generateTemplate(data))
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });