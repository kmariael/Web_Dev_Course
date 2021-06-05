let studentAlice = {
    firstname: 'Alice', 
    lastname: 'Cooper',
    age: 18,
    height: 1.65
}

//Τροποποίηση στοιχείων πίνακα
studentAlice.lastname = 'Pope';
studentAlice['age'] = 19;

for (let property in studentAlice) {
    document.write(`${studentAlice[property]} `);
}