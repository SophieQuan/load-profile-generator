//call parent contructor
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call Employee constructor
        super(name, id, email)

        //manager office number
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;