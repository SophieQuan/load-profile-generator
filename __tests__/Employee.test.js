const Employee = require('../lib/Employee');

test('return ALex as the name input', () => {
    const nameInput = 'Alex';
    const employee = new Employee(nameInput);
    expect(employee.name).toBe(nameInput);
})

test('return id to be 1', () => {
    const idInput = '1';
    const employee = new Employee('Alex', idInput);
    expect(employee.id).toBe(idInput);
})

test('return email to be alex@bestteam.com', () => {
    const emailInput = 'alex@bestteam.com';
    const employee = new Employee('Alex', 1, emailInput);
    expect(employee.email).toBe(emailInput);
})

test('return role as employee', () => {
    const role = 'Employee';
    const employee = new Employee('Alex', 1, 'alex@bestteam.com');
    expect(employee.getRole()).toBe(role);
})