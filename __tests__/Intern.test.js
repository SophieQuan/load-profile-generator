const Intern = require('../lib/Intern');

test('return Leslie as the name input', () => {
    const nameInput = 'Leslie';
    const intern = new Intern(nameInput);
    expect(intern.name).toBe(nameInput);
})

test('return id to be 3', () => {
    const idInput = '3';
    const intern = new Intern('Leslie', idInput);
    expect(intern.id).toBe(idInput);
})

test('return email to be leslie@bestteam.com', () => {
    const emailInput = 'leslie@bestteam.com';
    const intern = new Intern('Leslie', 1, emailInput);
    expect(intern.email).toBe(emailInput);
})

test('return school name School of Happy Valley', () => {
    const schoolName = 'School of Happy Valley';
    const intern = new Intern('Leslie', 1, 'leslie@bestteam.com', schoolName);
    expect(intern.getSchool()).toBe(schoolName);
})

test('return role as Intern', () => {
    const role = 'Intern';
    const intern = new Intern('Leslie', 1, 'leslie@bestteam.com');
    expect(intern.getRole()).toBe(role);
})