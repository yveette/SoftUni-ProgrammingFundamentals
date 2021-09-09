function employees(list) {
    for (let employee of list) {
        let employeeData = {
            name: employee,
            number: employee.length
        };

        console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.number}`);
        // or ->  ${employeeData["name"]}
    }
}

employees(['Silas Butler', 'Adnaan Buckley',
    'Juan Peterson', 'Brendan Villarreal']);
/*
Name: Silas Butler -- Personal Number: 12
Name: Adnaan Buckley -- Personal Number: 14
Name: Juan Peterson -- Personal Number: 13
Name: Brendan Villarreal -- Personal Number: 18
*/