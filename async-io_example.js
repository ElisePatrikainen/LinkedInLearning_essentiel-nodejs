const fs = require('fs');

function generateData() {
    let data = '1';
    for (i=0; i < 10000; i++) {
        data = data + Math.random() * 10;
    }
    return data;
}

const date = Date.now();

try {
    fs.writeFile('bigFile', generateData(), () => {
        console.log('Ecriture \'bigFile\' terminé, durée ' + (Date.now() - date) + ' ms.')
        fs.readFile('bigFile', "utf8", () => console.log('Lecture \'bigFile\' terminée'))
        })
} catch (e) {
    console.log(e)
}

console.log('Disponible.');
