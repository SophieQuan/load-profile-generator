//call parent contructor
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // call Employee constructor
        super(name, id, email)

        //gitHub username
        this.gitHub = gitHub
    }
    getGithub() {
        return this.gitHub
    }

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;