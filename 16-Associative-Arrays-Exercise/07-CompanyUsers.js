function companyUsers(arr) {
    let employees = {};

    for (let token of arr) {
        let [company, idNUm] = token.split(' -> ');

        if (!Object.keys(employees).includes(company)) {
            employees[company] = {};
        }

        if (!Object.keys(employees[company]).includes(idNUm)) {
            employees[company][idNUm] = idNUm;
        }
    }

    // order the companies by the name in ascending order
    let sorted = Object.entries(employees).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, idNum] of sorted) {
        console.log(`${company}`);
        let stringsId = Object.entries(idNum).map(x => `-- ${x[0]}`);
        console.log(stringsId.join('\n'));
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
/*
HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345
*/

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);
/*
Lenovo
-- XX23456
Movement
-- DD11111
SoftUni
-- AA12345
-- CC12344
*/