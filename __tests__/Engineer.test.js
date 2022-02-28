const Engineer = require('../lib/Engineer');

test('return Brad as the name input', () => {
    const nameInput = 'Brad';
    const engineer = new Engineer(nameInput);
    expect(engineer.name).toBe(nameInput);
})

test('return id to be 2', () => {
    const idInput = '2';
    const engineer = new Engineer('Brad', idInput);
    expect(engineer.id).toBe(idInput);
})

test('return email to be brad@bestteam.com', () => {
    const emailInput = 'brad@bestteam.com';
    const engineer = new Engineer('Brad', 1, emailInput);
    expect(engineer.email).toBe(emailInput);
})

test('return Pallace as gitHub username', () => {
    const gitHubUserName = 'Brad Pallace';
    const engineer = new Engineer('Brad', 1, 'brad@bestteam.com', gitHubUserName);
    expect(engineer.getGithub()).toBe(gitHubUserName);
})

test('return role as Engineer', () => {
    const role = 'Engineer';
    const engineer = new Engineer('Brad', 1, 'brad@bestteam.com');
    expect(engineer.getRole()).toBe(role);
})