//display engineer card
const generateEngineerCard = function(engineer) {
        //remove space if user enter with spaces for github username
        let engineerInput = engineer.gitHub;
        engineerInput = engineerInput.replace(/\s/g, '');
        return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h3>${engineer.name}</h3><h5>${engineer.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <p class="id"><b>ID:</b> ${engineer.id}</p>
                            <p class="email"><b>Email: </b><a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="github"><b>Github:</b><a href="https://github.com/${engineerInput}" target="_blank" > ${engineer.gitHub}</a></p>
                        </div>
                    </div>
                </div>
    `
    }
    //display intern card
const generateInternCard = function(intern) {
        return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h3>${intern.name}</h3>
                            <h5>${intern.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <p class="id"><b>ID: </b> ${intern.id}</p>
                            <p class="email"><b>Email:</b><a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="schoolName"><b>School Name:</b> ${intern.school}</p>
                        </div>
                    </div>
                </div>
    `
    }
    //display manager card
const generateManagerCard = function(manager) {
    return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card">
                        <div class="card-header">
                            <h3>${manager.name}</h3>
                            </i><h5>${manager.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <p class="id"><b>ID:</b> ${manager.id}</p>
                            <p class="email"><b>Email: </b><a href="mailto:${manager.email}">${manager.email}</a><p>
                            <p class="officeNumber"><b>Office Number:</b> ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
`
}

//push data info to generate site
generate = (data) => {
    profileData = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];

        // console.log(profileData);
        const role = employee.getRole();

        if (role === "Engineer") {
            const engineerCard = generateEngineerCard(employee);
            profileData.push(engineerCard)
        }

        if (role === "Intern") {
            const internCard = generateInternCard(employee);
            profileData.push(internCard)
        }

        if (role === "Manager") {
            const managerCard = generateManagerCard(employee);
            profileData.push(managerCard)
        }
    }

    const displayCards = profileData.join("");
    return generateTemplate(displayCards);

}

//set up HTML template
const generateTemplate = function(displayCards) {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="../src/styles.css" />
        <title>Profile Generator</title>
    </head>
    <body>
        <header class="text-center d-flex flex-column justify-content-center">
            <h1>Your Team Profile</h1>
        </header>
        <main class="container">
            <section class="row">
                ${displayCards}
            </section>
        </main>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>
</html>
    `;
}

module.exports = generate;