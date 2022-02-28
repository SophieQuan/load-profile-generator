const Manager = require('../lib/Manager');

test('return Marie as the name input', () => {
    const nameInput = 'Marie';
    const manager = new Manager(nameInput);
    expect(manager.name).toBe(nameInput);
})

test('return id to be 4', () => {
    const idInput = '4';
    const manager = new Manager('Marie', idInput);
    expect(manager.id).toBe(idInput);
})

test('return email to be marie@bestteam.com', () => {
    const emailInput = 'marie@bestteam.com';
    const manager = new Manager('Marie', 1, emailInput);
    expect(manager.email).toBe(emailInput);
})

test('return office number is 588', () => {
    const officeNumber = '588';
    const manager = new Manager('Marie', 1, 'marie@bestteam.com', officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
})

test('return role as Manager', () => {
    const role = 'Manager';
    const manager = new Manager('Marie', 1, 'marie@bestteam.com');
    expect(manager.getRole()).toBe(role);
})