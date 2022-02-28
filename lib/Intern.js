//call parent contructor
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call Employee constructor
        super(name, id, email)

        //Intern school
        this.school = school
    }
    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern;