function employees(input){
    for(let person of input){
        let name = person.split(',');
        let personalNumber = person.length;

        let employee = {
            name,
            personalNumber
        }
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])